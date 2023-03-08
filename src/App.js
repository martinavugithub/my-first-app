import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [godina, setGodina] = useState(2023);
  const [klik, setKlik] = useState(0);

  const init = useCallback(() => {
    console.log("component - init");
  });

  useEffect(() => {
    init();
  }, [init]);

  return (
    <div className="">
      <p>{godina}</p>
      <button onClick={() => setGodina(godina + 1)}>DODAJ BROJ</button>
      <p>{klik}</p>
      <button onClick={() => setKlik(klik + 1)}>DODAJ KLIK</button>
    </div>
  );
}

export default App;
