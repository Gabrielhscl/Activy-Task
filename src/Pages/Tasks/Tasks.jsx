import Container from "../../Components/Container/Container";
import ProjectInfo from "../../Components/ProjectInfo/ProjectInfo";
import styles from "./Tasks.module.css";

function Tasks() {
  return (
    <Container container="container">
      <div className={styles.content}>
        <ProjectInfo />
      </div>
    </Container>
  );
}

export default Tasks;
