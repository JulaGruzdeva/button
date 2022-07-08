import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      {/* <Card width="120px" height="120px">
        <button>Кнопка</button>
      </Card> */}
      <Button>Button</Button>
      <Button variant='ghost'>Button</Button>
      <Button variant='stroke'>Button</Button>

    </div>
  );
}

export default App;
