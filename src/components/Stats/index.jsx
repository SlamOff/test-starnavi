import { useSelector } from 'react-redux';
import styles from './Stats.module.css';

const Stats = () => {
  const ITEMS_PER_ROW = 5;
  const filledItems = useSelector(state => state.data);

  return (
    <div>
      <h1 className={styles.statsTitle}>Hover Squares</h1>
      {filledItems.map(cell => {
        return <div key={cell} className={styles.statsItem}>row {Math.ceil(cell / ITEMS_PER_ROW)} col {cell % ITEMS_PER_ROW || 5}</div>
      })}
    </div>
  );
};

export default Stats;