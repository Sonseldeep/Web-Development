import React from "react";

const Card = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      description:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      instock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1719581886973-30aa96abd38f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Objects",
      description:
        "  tool and object on the day-of-week basis for the day-of-week",
      instock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Mac",
      description:
        "  Apple Products and mac book are available in the varius size",
      instock: true,
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-52 bg-zinc-100  overflow-hidden rounded-md  "
        >
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt="box "
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs pt-5">{elem.description}</p>

            <button
              className={`px-4 py-2 mt-10 text-white ${
                elem.instock
                  ? "bg-blue-600 hover:bg-blue-900 "
                  : "bg-red-500 hover:bg-red-700"
              } `}
            >
              {elem.instock ? "In Stock" : "Out Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
