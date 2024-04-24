import "./App.css";
import { useEffect, useRef, useState } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";
import Even from "./component/Even";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트");
    }
  });

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  useEffect(() => {
    console.log("intervalID 컴포넌트 업데이트");
    const intervalID = setInterval(() => {
      console.log("깜빡", intervalID);
    }, 1000);

    return () => {
      console.log("클린업", intervalID);
      clearInterval(intervalID);
    };
  });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <div>짝수 아님</div> : <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
