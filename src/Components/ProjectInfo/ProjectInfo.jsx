// Styles
import styles from "./ProjectInfo.module.css";

// img
import avatar from "../../assets/avatar.png";

// icons
import {
  FaComputer,
  FaClipboardList,
  FaCircleNotch,
  FaArrowTrendUp,
  FaUsers,
} from "react-icons/fa6";

function ProjectInfo() {
  return (
    <div className={`${styles.content}`}>
      <div className={styles.projectEstimate}>
        <div className={styles.title}>
          <FaClipboardList />
          <h2>Project estimate</h2>
        </div>
        <div className={styles.groupCard}>
          <div className={styles.infoCard}>
            <FaComputer className={styles.icon} />
            <span>Projects</span>
            <h4>23</h4>
          </div>
          <div className={styles.infoCard}>
            <FaComputer className={styles.icon} />
            <span>Projects</span>
            <h4>23</h4>
          </div>
          <div className={styles.infoCard}>
            <FaComputer className={styles.icon} />
            <span>Projects</span>
            <h4>23</h4>
          </div>
        </div>
        <div className={styles.rate}>
          <span>On time completion rate:</span>
          <div className={styles.infoRate}>
            <h2>94%</h2>
            <div className={styles.percentRate}>
              <FaArrowTrendUp />
              <span>2,3%</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ourTeam}>
        <div className={styles.titleTeam}>
          <FaUsers />
          <h2>Our Team</h2>
        </div>
        <div className={styles.teamMembers}>
          <span>Team members</span>
          <ul className={styles.members}>
            <li>
              <img src={avatar} alt="imagem dos membros" />
            </li>
            <li>
              <img src={avatar} alt="imagem dos membros" />
            </li>
            <li>
              <img src={avatar} alt="imagem dos membros" />
            </li>
          </ul>
        </div>
        <div className={styles.infoHours}>
          <div className={styles.hours}>
            <span>Hours</span>
            <h2>82</h2>
          </div>
          <div className={styles.iconCircle}>
            <FaCircleNotch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
