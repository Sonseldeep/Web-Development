import React from "react";

const Card = () => {
  const musicRecord = [
    {
      name: "Aakasaimaa Jun Tara",
      description:
        "Aakasaimaa Jun tara by Bipul Chetteri, on of the best songs og the year",
    },
    {
      name: "Resham Filili ",
      description:
        "Resham Fririr is the best film songs of the year 2020 by Vivek Shrestha",
    },
  ];

  const handleCilck = () => {
    alert("Downloading");
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center">
        {musicRecord.map((item, index) => (
          <div key={index} className="w-90 px-3 py-2 bg-zinc-100 rounded-md">
            <h3 className="font-semibold text-xl"> {item.name}</h3>
            <p className="pt-3">{item.description}</p>
            <button
              onClick={handleCilck}
              className="px-2 py-3  mt-5 bg-blue-500 text-white font-bold"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
