// api/fortune.js

export default function handler(_, res) {
  const fortunes = [
    "Você terá uma surpresa agradável em breve.",
    "Grandes oportunidades estão à sua frente.",
    "A sorte favorece os corajosos.",
    "Boas notícias estão chegando.",
    "Seja a mudança que você quer ver no mundo.",
    "Cada passo conta para o seu sucesso.",
    "O melhor ainda está por vir.",
    "Confie no processo, o universo está a seu favor."
  ];

  const randomIndex = Math.floor(Math.random() * fortunes.length);
  res.status(200).json({ fortune: fortunes[randomIndex] });
}
