import React from 'react';

const newsItems = [
  {
    title: 'Amet Commodo Nulla Facilisi Vehicula Ipsum',
    category: 'USEFUL',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507',
  },
  {
    title: 'Urna Neque Viverra Justo Ultrices Sapieneget',
    category: 'GADGETS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
  },
  {
    title: 'Tristique Magna Amet Purus Gravida Quisblandit',
    category: 'EXPERIENCE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507',
  },
];

export default function LatestNews() {
  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <p className="text-gray-500">Feugiat pretium nibh ipsum consequat commodo.</p>
          </div>
          <button className="text-sm text-white bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">View All</button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={item.image} alt="news" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase mb-2">{item.category}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <button className="text-sm text-white bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
