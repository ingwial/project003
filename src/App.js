import "./App.css";

function sumUpShow(e) {
  e.preventDefault();
  const value1 = Number(e.target.firstValue.value);
  const value2 = Number(e.target.secondValue.value);
  const total = value1 + value2;
  alert("Total:" + total);
}

function App() {
  return (
    <div>
      <form onSubmit={sumUpShow}>
        <label>Enter first value</label>
        <input type="number" name="firstValue" />
        <label>Enter Second value</label>
        <input type="number" name="secondValue" />
        <button type="submit">Sum up</button>
      </form>
    </div>
  );
}

export default App;
