import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useApi from "./useApi";

function App() {
  const [api, setApi] = useState<string>("");

  const { fetchData } = useApi(api);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input value={api} onChange={(e) => setApi(e.target.value)} />
        <button onClick={fetchData} />
      </div>
    </>
  );
}

export default App;
