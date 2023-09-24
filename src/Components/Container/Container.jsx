import styles from "./Container.module.css";
function Container(props) {
  return (
    <div className={`${styles[props.container]}`}>
      {props.children}
    </div>
  );
}

export default Container;
