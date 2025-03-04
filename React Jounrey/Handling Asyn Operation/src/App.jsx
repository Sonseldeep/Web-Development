import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [cardsData, setCardsData] = useState([]);

  const fetchCardData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      setCardsData((prevCards) => [...prevCards, response.data.results[0]]);
    } catch (error) {
      console.error("Error fetching card data:", error);
    }
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <div className="w-full h-screen p-10 bg-zinc-900 text-white font-['gilroy']">
      <button
        onClick={fetchCardData}
        className="bg-green-600 px-8 py-3 rounded-md font-semibold text-sm mb-10"
      >
        Get New Card
      </button>
      <div className="cards flex gap-4 flex-wrap">
        {cardsData.map((card, index) => (
          <div key={index} className="card w-60 p-4 rounded-md bg-zinc-800">
            <div className="w-20 h-20 bg-zinc-500 rounded-2xl mb-3">
              <img
                src={card.picture.large}
                alt={`${card.name.first} ${card.name.last}`}
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-2xl">
              {card.name.title} {card.name.first} {card.name.last}
            </h3>
            <h5 className="text-sm font-semibold opacity-60">{card.gender}</h5>
            <h6 className="text-sm opacity-40 ">{card.email}</h6>
            <p className="mt-5 text-xs font-semibold opacity-80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              adipisci hic praesentium explicabo.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
