import React from 'react';

const cards = [
  {
    id: 1,
    title: "#1 Hacus Habitasse",
    description: "Neque egestas odio nisi congue quisque.",
  },
  {
    id: 2,
    title: "#2 Natoque Penatibus",
    description: "Ultrices tincidunt arcu non sodales vestibulum.",
  },
  {
    id: 3,
    title: "#3 Tincidunt Ornare",
    description: "Dignissim diam quis enim lobortis scelerisque.",
  },
  {
    id: 4,
    title: "#4 Aliquam Sagittis",
    description: "Venenatis cras sed felis eget aliquet commodo.",
  },
];

const CardsSection = () => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="bg-gray-100 rounded-2xl p-12 text-start shadow-sm transition-all duration-300 hover:bg-violet-400 hover:text-white"
          >
            <h2 className="text-lg font-bold mb-2"> {card.title}</h2>
            <div className="w-6 h-0.5 bg-gray-300 mb-4"></div>
            <p className="text-gray-500 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
  
};

export default CardsSection;
