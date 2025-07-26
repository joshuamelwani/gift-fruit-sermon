
const data = [
    {
        fruit: "Love", gift: "Healing", icon: "❤️",
        verse: "Matthew 14:14, Mark 1:41",
        text: "Healing flows from compassion.",
        full: "Matthew 14:14 — 'When Jesus landed and saw a large crowd, he had compassion on them and healed their sick.'<br>Mark 1:41 — 'Jesus was indignant. He reached out his hand and touched the man. “I am willing,” he said. “Be clean!”'",
        tip: "Text or visit someone who's hurting and offer prayer or comfort this week."
    },
    {
        fruit: "Joy", gift: "Tongues", icon: "😄",
        verse: "Acts 2, Acts 10:46",
        text: "Tongues overflow from Spirit-filled joy.",
        full: "Acts 2:13 — 'Some, however, made fun of them and said, “They have had too much wine.”'<br>Acts 10:46 — 'For they heard them speaking in tongues and praising God.'",
        tip: "Start your morning with worship music that lifts your spirit daily this week."
    },
    {
        fruit: "Peace", gift: "Wisdom", icon: "🕊️",
        verse: "Mark 4, James 3:17",
        text: "Wisdom flows from peace.",
        full: "Mark 4:39 — 'He got up, rebuked the wind and said to the waves, “Quiet! Be still!”'<br>James 3:17 — 'But the wisdom that comes from heaven is first of all pure; then peace-loving, considerate, submissive, full of mercy and good fruit, impartial and sincere.'",
        tip: "Take 5 minutes of silence each day to invite God’s peace before making decisions."
    },
    {
        fruit: "Patience", gift: "Prophecy", icon: "⏳",
        verse: "James 5:10, Luke 19",
        text: "Prophecy is rooted in long-suffering.",
        full: "James 5:10 — 'Brothers and sisters, as an example of patience in the face of suffering, take the prophets who spoke in the name of the Lord.'<br>Luke 19:41 — 'As he approached Jerusalem and saw the city, he wept over it.'",
        tip: "Practice patience in one frustrating moment this week — pause and pray before responding."
    },
    {
        fruit: "Kindness", gift: "Discernment", icon: "🤝",
        verse: "John 4, 1 John 4:1",
        text: "Discernment through kindness restores.",
        full: "John 4:18 — 'The fact is, you have had five husbands, and the man you now have is not your husband.'<br>1 John 4:1 — 'Dear friends, do not believe every spirit, but test the spirits to see whether they are from God.'",
        tip: "Choose to assume the best about someone instead of jumping to conclusions."
    },
    {
        fruit: "Goodness", gift: "Knowledge", icon: "🌟",
        verse: "John 1:48",
        text: "Knowledge must uplift with goodness.",
        full: "John 1:48 — 'How do you know me?” Nathanael asked. Jesus answered, “I saw you while you were still under the fig tree before Philip called you.”'",
        tip: "Affirm someone privately with a kind truth you see in them."
    },
    {
        fruit: "Faithfulness", gift: "Miracles", icon: "🙏",
        verse: "1 Kings 18, Hebrews 11",
        text: "Miracles follow consistent faith.",
        full: "1 Kings 18:38 — 'Then the fire of the Lord fell and burned up the sacrifice.'<br>Hebrews 11:33 — 'Who through faith conquered kingdoms, administered justice, and gained what was promised; who shut the mouths of lions.'",
        tip: "Commit to one consistent habit this week (prayer, Scripture, worship) without quitting."
    },
    {
        fruit: "Gentleness", gift: "Faith", icon: "🙇",
        verse: "Luke 1:38, Luke 7",
        text: "Faith thrives in gentle surrender.",
        full: "Luke 1:38 — '“I am the Lord’s servant,” Mary answered. “May your word to me be fulfilled.”'<br>Luke 7:9 — 'When Jesus heard this, he was amazed at him, and turning to the crowd following him, he said, “I tell you, I have not found such great faith even in Israel.”'",
        tip: "Say 'yes' to something God is prompting gently — even if it feels uncomfortable."
    },
    {
        fruit: "Self-Control", gift: "Interpretation", icon: "🧘",
        verse: "1 Cor 14:28–32",
        text: "Self-control governs clarity.",
        full: "1 Corinthians 14:28 — 'If there is no interpreter, the speaker should keep quiet in the church and speak to himself and to God.'<br>1 Corinthians 14:32 — 'The spirits of prophets are subject to the control of prophets.'",
        tip: "When emotions rise this week, pause, breathe, and respond instead of reacting."
    }
];

const grid = document.querySelector(".grid");

data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="icon">${item.icon}</div>
        <h2>${item.fruit} → ${item.gift}</h2>
        <div class="card-content">
            <p><strong>Scripture:</strong><br>${item.full}</p>
            <p><em>${item.text}</em></p>
            <p><strong>Try this week:</strong> ${item.tip}</p>
        </div>
    `;
    card.addEventListener("click", () => {
        card.classList.toggle("open");
    });
    grid.appendChild(card);
});
