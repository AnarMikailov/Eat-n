import React, { useState } from "react";
import FriendItem from "./FriendItem";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const FriendContainer = () => {
  return (
    <>
      <div>
        {initialFriends.map((item) => (
          <>
            <FriendItem
              name={item.name}
              img={item.image}
              balance={item.balance}
              key={item.id}
              id={item.id}
            />
          </>
        ))}
        <button className="button">Add friend</button>
      </div>
    </>
  );
};

export default FriendContainer;
