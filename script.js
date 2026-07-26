async function loadResearch() {

    const response = await fetch("data/research-index.json");

    const items = await response.json();

    const grid = document.getElementById("research-grid");

    items.forEach(item => {

        const card = document.createElement("article");

        card.className = "card";

        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.status}</p>
            <a href="${item.article}" target="_blank">
                Read Article
            </a>
        `;

        grid.appendChild(card);

    });

}

loadResearch();
