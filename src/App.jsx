import "./css/styles.css";
import Card from "./components/Card";
import Account from "./components/Account";

function App() {
  return (
    <div className="main-content">
      <Card />
      <Account github="Github" instagram="Instagram" tiktok="Tiktok" />
    </div>
  );
}

export default App;
