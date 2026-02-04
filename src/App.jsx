import styles from './App.module.css';
import Display from './components/Display';
import ButtonsContainer from './components/Buttonscontainer';
import { useState } from 'react';

function App() {
  let [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calValue}></Display>
      <ButtonsContainer
        onButtonClick={onButtonClick}
      />
    </div>
  );
}
export default App;