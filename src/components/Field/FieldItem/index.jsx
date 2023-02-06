import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilledItems, removeFilledItems } from '../../../redux/filledReducer';
import styles from './FieldItem.module.css';

const FieldItem = ({ id }) => {
  const [ isFilled, setIsFilled ] = useState(false);
  const dispatch = useDispatch();

  const hoverHandler = () => {
    setIsFilled(!isFilled);
    isFilled ? dispatch(removeFilledItems(id)) : dispatch(addFilledItems(id));
  }

  return (
    <div onMouseEnter={hoverHandler} className={`${styles.fieldItem} ${isFilled && styles.fieldItemFilled}`}></div>
  );
};

export default FieldItem;