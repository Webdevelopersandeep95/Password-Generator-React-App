import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (symbolAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      // console.log(str.charAt(char));
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, symbolAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, symbolAllowed]);

  return (
    <>
      <div className="box">
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Copy</button>
      </div>
      <div className="password-btns">
        <input
          type="range"
          min="6"
          max="100"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label>length: {length}</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label>Number</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={symbolAllowed}
          onChange={() => setSymbolAllowed((prev) => !prev)}
        />
        <label>Special Symbol</label>
      </div>
    </>
  );
}

export default App;
