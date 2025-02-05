import React, { useState } from "react";
import Card from "./Components/Card";

const App = () => {
  const data = [
    {
      name: "Sashank",
      profession: "Dramaist",
      image:
        "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Hari",
      profession: "Doctor",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Krishna",
      profession: "Artist",
      image:
        "https://images.unsplash.com/photo-1513152697235-fe74c283646a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Shyam",
      profession: "Teacher",
      image:
        "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
  ];

  const [realdata, setRealData] = useState(data);
  const handleFriendsButton = () => {
    setRealData((prev) => {
      prev.map((item, index) => {
        if (index === 2) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };
  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-4 justify-center items-center">
        {realdata.map((item, index) => (
          <Card
            key={index}
            handleFriendsButton={handleFriendsButton}
            // image={item.image}
            // name={item.name}
            // profession={item.profession}
            values={item}
          />
        ))}
      </div>
    </>
  );
};

export default App;
