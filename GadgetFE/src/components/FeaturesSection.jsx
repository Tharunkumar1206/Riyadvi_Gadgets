import React from "react";
import { Sparkles, Ghost, Star } from "lucide-react";

const features = [
  {
    title: "Special Offers",
    description:
      "Lorem ipsum consectetur adipiscing eiusmod tempor incididunt labore dolore magna aliqua.",
    icon: <Sparkles className="w-6 h-6 text-white transition-colors group-hover:text-white" />,
  },
  {
    title: "Amazing Events",
    description:
      "Massa tincidunt nunc pulvinar sapien et ligula ullamcorper blandit turpis cursus commodo sed egestas egestas.",
    icon: <Ghost className="w-6 h-6 text-white transition-colors group-hover:text-white" />,
  },
  {
    title: "Human Reviews",
    description:
      "Ullamcorper malesuada proin libero nunc consequat interdum varius consequat mauris nunc congue nisi vitae.",
    icon: <Star className="w-6 h-6 text-white transition-colors group-hover:text-white" />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl px-8 py-20  hover:shadow-2xl transition duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-black rounded-full mb-4 transition-colors group-hover:bg-violet-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-violet-500 hover:text-white transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
