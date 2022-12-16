import { useState } from "react";
import classes from "./MealItem.module.css";
export function MealItem(props) {
  const price = props.price.toFixed(2);
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0);
  const countIncrement =()=>{
    setCount(count + 1)
    setTotal((prevTotal) => +prevTotal + +price);
  }
  const countDecrement =()=>{
    if (count > 0) {
      setCount(count - 1)
     setTotal((prevTotal) => +prevTotal - +price);
    }
    
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div className={classes.containerCounter}>
        <div className={classes.counter}>
          <button onClick={countDecrement}>-</button>
          <div>{count}</div>
          <button onClick={countIncrement}>+</button>
        </div>
        <div>Total: {Number(total).toFixed(2)}</div>
      </div>
    </li>
  );
}
