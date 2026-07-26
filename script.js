(function () {
  "use strict";

  var DATA_URL = "research-index.json";

  function escapeHTML(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalize(raw) {
    var data = {
      meta: {},
      stats: {},
      languages: [],
      repositories: [],
      frameworks: [],
      research: []
    };

    if (!raw) {
      return data;
    }

    if (Array.isArray(raw)) {
      data.frameworks = raw;
      return data;
    }

    if (typeof raw === "object") {
      if (Array.isArray(raw.frameworks)) {
        data.frameworks = raw.frameworks;
      } else if (raw.id && raw.title) {
        data.frameworks = [raw];
      }
      if (Array.isArray(raw.research)) {
        data.research = raw.research;
      }
      if (Array.isArray(raw.repositories)) {
        data.repositories = raw.repositories;
      }
      if (Array.isArray(raw.languages)) {
        data.languages = raw.languages;
      }
      if (raw.stats && typeof raw.stats === "object") {
        data.stats = raw.stats;
      }
      if (raw.meta && typeof raw.meta === "object") {
        data.meta = raw.meta;
      }
    }

    return data;
  }

  function collectLanguages(data) {
    var set = {};
    data.languages.forEach(function (lang) {
      set[lang] = true;
    });
    data.frameworks.forEach(function (item) {
      (item.language || []).forEach(function (lang) {
        set[lang] = true;
      });
    });
    return Object.keys(set);
  }

  function animateCount(el, target) {
    if (!el) {
      return;
    }
    var value = Number(target) || 0;
    var reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || value <= 0) {
      el.textContent = String(value);
      return;
    }
    var start = null;
    var duration = 700;
    function step(timestamp) {
      if (start === null) {
        start = timestamp;
      }
      var progress = Math.min((timestamp - start) / duration, 1);
      el.textContent = String(Math.round(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
  }

  function renderStats(data) {
    var languages = collectLanguages(data);
    var stats = data.stats;

    animateCount(
      document.getElementById("frameworkCount"),
      stats.frameworks || data.frameworks.length
    );
    animateCount(
      document.getElementById("publicationCount"),
      stats.researchItems || data.research.length || data.frameworks.length
    );
    animateCount(
      document.getElementById("languageCount"),
      stats.languages || languages.length
    );
    animateCount(
      document.getElementById("repositoryCount"),
      stats.repositories || data.repositories.length
    );
  }

  function frameworkLink(item) {
    if (item.page) {
      return item.page;
    }
    if (item.id) {
      return "framework/" + encodeURIComponent(item.id) + "/";
    }
    return item.article || item.url || "#";
  }

  function isExternal(href) {
    return /^https?:\/\//i.test(href);
  }

  function frameworkCardHTML(item) {
    var href = frameworkLink(item);
    var external = isExternal(href);
    var doi = item.doi
      ? '<span class="card-doi">DOI: ' + escapeHTML(item.doi) + "</span>"
      : "";
    var alt = item.alternateName
      ? '<span class="card-alt">' + escapeHTML(item.alternateName) + "</span>"
      : "";
    return (
      '<a class="framework-card" href="' +
      escapeHTML(href) +
      '"' +
      (external ? ' target="_blank" rel="noopener"' : "") +
      ">" +
      "<strong>" +
      escapeHTML(item.title) +
      "</strong>" +
      alt +
      "<span>" +
      escapeHTML(item.summary || "") +
      "</span>" +
      doi +
      "</a>"
    );
  }

  function researchCardHTML(item) {
    var href = item.url || item.article || "#";
    var external = isExternal(href);
    var doi = item.doi
      ? '<span class="card-doi">DOI: ' + escapeHTML(item.doi) + "</span>"
      : "";
    return (
      '<a class="research-card" href="' +
      escapeHTML(href) +
      '"' +
      (external ? ' target="_blank" rel="noopener"' : "") +
      ' data-search="' +
      escapeHTML(
        (
          (item.title || "") +
          " " +
          (item.summary || "") +
          " " +
          (item.keywords || []).join(" ")
        ).toLowerCase()
      ) +
      '">' +
      "<strong>" +
      escapeHTML(item.title) +
      "</strong>" +
      "<span>" +
      escapeHTML(item.summary || "") +
      "</span>" +
      doi +
      "</a>"
    );
  }

  function renderFrameworks(data) {
    var container = document.getElementById("framework");
    if (!container) {
      return;
    }
    if (!data.frameworks.length) {
      container.innerHTML =
        '<p class="empty-state">Framework data is being prepared. See the <a href="https://leventbulut.com/corpus/" target="_blank" rel="noopener">full corpus</a>.</p>';
      return;
    }
    container.innerHTML =
      '<div class="framework-grid">' +
      data.frameworks.map(frameworkCardHTML).join("") +
      "</div>";
  }

  function renderResearch(data) {
    var container = document.getElementById("research-grid");
    if (!container) {
      return;
    }
    var items = data.research.length ? data.research : data.frameworks;
    if (!items.length) {
      container.innerHTML =
        '<p class="empty-state">Research data is being prepared. See the <a href="https://leventbulut.com/corpus/" target="_blank" rel="noopener">full corpus</a>.</p>';
      return;
    }
    container.innerHTML = items.map(researchCardHTML).join("");
  }

  function bindSearch() {
    var input = document.getElementById("search");
    var container = document.getElementById("research-grid");
    if (!input || !container) {
      return;
    }
    input.addEventListener("input", function () {
      var query = input.value.trim().toLowerCase();
      var cards = container.querySelectorAll("[data-search]");
      var visible = 0;
      cards.forEach(function (card) {
        var match =
          query === "" ||
          (card.getAttribute("data-search") || "").indexOf(query) !== -1;
        card.style.display = match ? "" : "none";
        if (match) {
          visible += 1;
        }
      });
      var emptyMsg = container.querySelector(".search-empty");
      if (visible === 0 && cards.length > 0) {
        if (!emptyMsg) {
          emptyMsg = document.createElement("p");
          emptyMsg.className = "search-empty";
          emptyMsg.textContent = "No research items match this search.";
          container.appendChild(emptyMsg);
        }
      } else if (emptyMsg) {
        emptyMsg.remove();
      }
    });
  }

  function showError() {
    var container = document.getElementById("framework");
    if (container) {
      container.innerHTML =
        '<p class="empty-state">The research index is temporarily unavailable. The full record remains accessible at the <a href="https://leventbulut.com/corpus/" target="_blank" rel="noopener">official corpus</a>.</p>';
    }
    var grid = document.getElementById("research-grid");
    if (grid) {
      grid.innerHTML = "";
    }
  }

  function init() {
    fetch(DATA_URL, { cache: "no-cache" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("HTTP " + response.status);
        }
        return response.json();
      })
      .then(function (raw) {
        var data = normalize(raw);
        renderStats(data);
        renderFrameworks(data);
        renderResearch(data);
        bindSearch();
      })
      .catch(function () {
        showError();
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
