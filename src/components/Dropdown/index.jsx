import { useState } from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({ modes, selectedMode }) => {
  const [ chosenField, setChosenField ] = useState(0);

  const selectHandler = e => setChosenField(+e.target.value);
  const clickHandler = () => selectedMode(chosenField);

  return (
    <>
      <select defaultValue="0" className={styles.select} onChange={selectHandler}>
        <option value="0" disabled hidden>Pick mode</option>
        {modes.map(mode => {
          const { name, field } = mode;
          return <option key={name} value={field}>{name}</option>
        })}
      </select>
      <button className={`${styles.button} ${!chosenField && styles.buttonDisabled}`} disabled={!chosenField} onClick={clickHandler}>Start</button>
    </>
  );
};
  
  export default Dropdown;
  