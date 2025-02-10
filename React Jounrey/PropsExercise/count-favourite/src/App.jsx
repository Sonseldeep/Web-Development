import React, { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

const App = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Brazilian",
      artist: "Barra Da Tijuca",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Under Red",
      artist: "Random",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1595422656857-ced3a4a0ce25?q=80&w=1608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Indian",
      artist: "Ram Dai ",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1521394095254-d70a3fe40353?q=80&w =1606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "GoreDai",
      artist: "Khaire ",
      added: false,
    },
  ];
  const [songData, setSongData] = useState(data);
  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemIndex) => {
        if (index === itemIndex) {
          return { ...item, added: !item.added };
        }

        return item;
      });
    });
  };
  return (
    <>
      <div className="w-full h-screen bg-zinc-300  gap-4 items-center justify-center">
        <Navbar data={songData} />
        <div className="flex gap-10 mt-32 px-20 flex-wrap">
          {songData.map((item, index) => (
            <Card
              key={index}
              data={item}
              handleClick={handleClick}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
