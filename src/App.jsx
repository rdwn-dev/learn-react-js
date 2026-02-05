import "./App.css";

function App() {
  // JSX & Variable
  const name = "Ridwan Nur Faizin";
  let job = "Web Programmer";
  let desc = "I am a very enthusiastic beginner web programmer.";

  return (
    <>
      <h1>{name}</h1>
      <p>
        <strong>{job}</strong>
      </p>
      <p>{desc}</p>
    </>
  );
}

export default App;
