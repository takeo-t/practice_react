import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

let N: number = 5;

function squareArea(num: number): number {
  return num * num;
}

console.log(squareArea(N));
