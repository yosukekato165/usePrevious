import "./styles.css";
import React from "react";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClick = () => {
    setIsOpen(isOpen ? false : true);
  };
  const prevIsOpen = usePrevious(isOpen);

  if (isOpen !== prevIsOpen && isOpen) {
    console.log("2");
    console.log(`prevIsOpen ${prevIsOpen}`);
    console.log(`isOpen ${isOpen}`);
  }
  return (
    <div className="App">
      <button onClick={() => onClick()}>button </button>
    </div>
  );
}

const usePrevious = (e) => {
  const ref = React.useRef();

  // useEffect の rendering はコンポーネントが描画された後で発火するので
  // useEffect内の　 ref.current = e より return ref.currentが先に動くので
  // return されたのちに ref.current に e が代入されるので　前回の state を管理することができる
  React.useEffect(() => {
    ref.current = e;
    console.log(`3 ref ${ref.current}`);
  }, [e]);

  console.log(`1 e ${e}`);
  return ref.current;
};
