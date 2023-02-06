import styles from './Field.module.css';
import FieldItem from './FieldItem';

const Field = ({ mode }) => {
  return (
    <div className={styles.field}>
      {Array.from({length: mode}, (_, index) => {
        return <FieldItem key={index} id={index + 1} />;
      })}
    </div>
  );
};

export default Field;