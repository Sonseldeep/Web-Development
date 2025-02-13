import React, { use } from "react";

import Card from "./Card";

const Cards = ({ users, handleRemove }) => {
  return (
    <div className="w-full min-h-96 max-h-96 overflow-auto p-4 flex gap-4 justify-center flex-wrap  ">
      {users.map((item, index) => {
        return (
          <Card
            handleRemove={handleRemove}
            key={index}
            id={index}
            user={item}
          />
        );
      })}
    </div>
  );
};

export default Cards;
