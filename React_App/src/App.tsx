import ListGroup from "./components/ListGroup.tsx";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectITem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectITem}
      ></ListGroup>
    </div>
  );
}

export default App;
