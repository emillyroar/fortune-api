// api/fortune.js
export default function handler(_, res) {
  const fortunes = [
    "Você terá uma surpresa agradável em breve.",
    "Grandes oportunidades estão à sua frente.",
    "A sorte favorece os corajosos.",
    "Boas notícias estão chegando.",
    "Confie no processo, o universo está a seu favor.",
  ];
  
  const index = Math.floor(Math.random() * fortunes.length);
  res.status(200).json({ fortune: fortunes[index] });
}
