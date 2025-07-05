import Alert from "./components/Alert.tsx";
import ListGroup from "./components/ListGroup.tsx";
import Buttons from "./components/Buttons.tsx";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectITem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectITem}
      ></ListGroup>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisible(false);
          }}
        >
          {" "}
          My Button{" "}
        </Alert>
      )}
      <Buttons
        color="dark"
        onClick={() => {
          setAlertVisible(true);
        }}
      >
        My Button
      </Buttons>
    </div>
  );
}

export default App;
