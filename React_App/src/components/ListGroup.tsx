import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //  selected 1st one by default
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // items = [];

  // if (items.length == 0) {
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No items found</p>
  //     </>
  //   );
  // }

  const message = items.length === 0 && <p>Nothing</p>;

  return (
    <>
      <h1>List Group Component</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            aria-current="false"
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
