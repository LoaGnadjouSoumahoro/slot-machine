import "./App.css";
import { Machine } from "./Machine";

function App() {
  return (
    <>
      <h1>Slot Machine</h1>
      <Machine s1="🍊" s2="🍇" s3="🍒" />
      <Machine s1="🍇" s2="🍊" s3="🍇" />
      <Machine s1="🍊" s2="🍇" s3="🍊" />
    </>
  );
}

export default App;
