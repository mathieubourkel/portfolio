import React from 'react';
import Image from 'next/image';

type Props = {
    title: string,
    description: string,
    image:any,
    url:string
}

const PortfolioCard = ({ title, description, image, url }:Props) => {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-md m-4">
      <Image className="w-full h-48 object-cover object-center" src={image} alt={title} />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="flex justify-between p-4 bg-gray-100">
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visiter le site</a>
        {/* Ajoutez d'autres liens ou boutons selon vos besoins */}
      </div>
    </div>
  );
};

export default PortfolioCard;