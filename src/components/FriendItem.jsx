import React, { useState } from "react";
import BillForm from "./BillForm";

const FriendItem = ({ name, img, balance, id }) => {
  const [openBillForm, setOpenBillForm] = useState(false);
  const [myOwe, setMyowe] = useState(0);
  const [selected, setSelected] = useState("You");

  // console.log(selected);
  // const [friendOwe, setFriendOwe] = useState(0);
  const splitHandler = (myBill, friendsBill) => {
    setMyowe(friendsBill);
    // setFriendOwe(myBill);
  };
  const selectedYou = selected == "You";
  const selectedfriend = selected == name;

  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <img src={img} alt="img" />
            <h3>{name}</h3>
            {myOwe ? (
              <>
                {selectedYou && (
                  <p className="green">
                    {name} owes you {myOwe}
                  </p>
                )}
                {selectedfriend && (
                  <p className="red">
                    You owes {name} {myOwe}
                  </p>
                )}
              </>
            ) : (
              <p>You and {name} even</p>
            )}
            <button
              onClick={() => setOpenBillForm(!openBillForm)}
              type="button"
              className="button"
            >
              {openBillForm ? "close" : "select"}
            </button>
          </li>
        </ul>
      </div>
      {openBillForm ? (
        <BillForm
          splitHandler={splitHandler}
          name={name}
          id={id}
          selected={selected}
          setSelected={setSelected}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default FriendItem;
