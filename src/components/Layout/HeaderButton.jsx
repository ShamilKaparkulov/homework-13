import classes from "./HeaderButton.module.css";
import { CardIcon } from "../Icons/CardIcon";
export function HeaderButton() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Card</span>
      <span></span>
    </button>
  );
}
