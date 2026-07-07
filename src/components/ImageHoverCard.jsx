import React from "react";
import Image from "next/image";

/**
 * Dynamic Image Hover Card Component
 *
 * Props:
 *  cards: [
 *    {
 *      id: number,
 *      title: string,
 *      description: string,
 *      image: string,
 *    }
 *  ]
 *
 * Example usage:
 * <ImageHoverCards cards={cardData} />
 */

const ImageHoverCards = ({ cards = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-white"
        >
          {/* Image */}
          <Image
            src={card.image}
            alt={card.title}
            width={1200}
            height={640}
            className="w-full h-64 object-cover transition-opacity duration-500 group-hover:opacity-30"
          />

          {/* Hover Overlay Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white text-xl font-semibold mb-2 drop-shadow-md">
              {card.title}
            </h3>
            <p className="text-gray-200 text-sm max-w-sm">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageHoverCards;
