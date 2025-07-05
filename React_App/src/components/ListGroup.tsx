import { useState } from "react";
// Using props we can pass data to our components
// It makes ListGroup reusable
// Props are read-only, we cannot modify them
// We can use typescript to define the type of props
// Props are passed as an object
//  Now using props we can pass different labels like "Cities", "Countries", etc.
// and different items like "New York", "San Francisco", etc. dynamically
interface Props {
  items: string[];
  heading: string;
  // funtion
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //  selected 1st one by default
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const message = items.length === 0 && <p>Nothing</p>;

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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
