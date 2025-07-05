import Alert from "./components/Alert.tsx";
import ListGroup from "./components/ListGroup.tsx";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectITem = (item: string) => {
    console.log(item);
  };

  let text = "Hollow world";

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectITem}
      ></ListGroup>
      <Alert>
        {" "}
        Hello <h1>world</h1>
      </Alert>
    </div>
  );
}

export default App;
