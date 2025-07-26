
const data = [
    { fruit: "Love", gift: "Healing", verse: "Matthew 14:14, Mark 1:41", insight: "Healing flows from compassion." },
    { fruit: "Joy", gift: "Tongues", verse: "Acts 2, Acts 10:46", insight: "Tongues overflow from joy." },
    { fruit: "Peace", gift: "Wisdom", verse: "Mark 4, James 3:17", insight: "Wisdom follows inner calm." },
    { fruit: "Patience", gift: "Prophecy", verse: "James 5:10, Luke 19", insight: "Prophecy demands endurance." },
    { fruit: "Kindness", gift: "Discernment", verse: "John 4, 1 John 4:1", insight: "Discernment must be kind." },
    { fruit: "Goodness", gift: "Knowledge", verse: "John 1:48", insight: "Goodness protects revealed truth." },
    { fruit: "Faithfulness", gift: "Miracles", verse: "1 Kings 18, Hebrews 11", insight: "Miracles follow trust." },
    { fruit: "Gentleness", gift: "Faith", verse: "Luke 1:38, Luke 7", insight: "Faith grows through surrender." },
    { fruit: "Self-Control", gift: "Interpretation", verse: "1 Cor 14:28–32", insight: "Self-control guides clarity." }
];

const grid = document.querySelector(".grid");

data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h2>${item.fruit} → ${item.gift}</h2>
        <div class="card-content">
            <p><strong>Verse:</strong> ${item.verse}</p>
            <p>${item.insight}</p>
            <textarea placeholder="Your reflection..."></textarea>
        </div>
    `;
    card.addEventListener("click", () => {
        card.classList.toggle("open");
    });
    grid.appendChild(card);
});
