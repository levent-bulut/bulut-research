async function loadResearch() {

    try {

        const response = await fetch("data/research-index.json");

        const json = await response.json();

        const items = Array.isArray(json) ? json : (json.items || []);

        const grid = document.getElementById("research-grid");
        const framework = document.getElementById("framework");
        const search = document.getElementById("search");

        function render(list) {

            grid.innerHTML = "";

            list.forEach(item => {

                const card = document.createElement("article");

                card.className = "card";

                card.innerHTML = `
                    <h3>${item.title || ""}</h3>

                    <p><strong>Status:</strong> ${item.status || "-"}</p>

                    <p><strong>Category:</strong> ${item.category || "-"}</p>

                    <p>${item.description || ""}</p>

                    <div class="links">

                        ${item.article ? `<a href="${item.article}" target="_blank">Article</a>` : ""}

                        ${item.repository ? `<a href="${item.repository}" target="_blank">Repository</a>` : ""}

                        ${item.corpus ? `<a href="${item.corpus}" target="_blank">Corpus</a>` : ""}

                        ${item.doi ? `<a href="${item.doi}" target="_blank">DOI</a>` : ""}

                    </div>
                `;

                grid.appendChild(card);

            });

        }

        render(items);

        document.getElementById("publicationCount").textContent = items.length;

        document.getElementById("frameworkCount").textContent =
            new Set(items.map(i => i.category).filter(Boolean)).size || 6;

        document.getElementById("repositoryCount").textContent =
            items.filter(i => i.repository).length;

        const languages = new Set();

        items.forEach(item => {

            if (Array.isArray(item.languages)) {

                item.languages.forEach(lang => languages.add(lang));

            } else if (item.language) {

                languages.add(item.language);

            }

        });

        document.getElementById("languageCount").textContent =
            languages.size || 2;

        framework.innerHTML = `
            <ul class="framework-list">
                ${items.map(item => `<li>${item.title}</li>`).join("")}
            </ul>
        `;

        search.addEventListener("input", function () {

            const query = this.value.toLowerCase();

            const filtered = items.filter(item => {

                return JSON.stringify(item)
                    .toLowerCase()
                    .includes(query);

            });

            render(filtered);

        });

    }

    catch (error) {

        console.error(error);

        document.getElementById("research-grid").innerHTML = `
            <p>research-index.json could not be loaded.</p>
        `;

    }

}

loadResearch();
