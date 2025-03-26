import styles from "./HomePage.module.css";

import GLTFViewer from "../components/GLTFViewer";
import room from "../assets/Room.glb";

export default function HomePage() {
  return (
    <div className={styles.root}>
      {/* <GLTFPage modelPath={shibaModel} /> */}
      <GLTFViewer modelPath={room} />
    </div>
  );
}
