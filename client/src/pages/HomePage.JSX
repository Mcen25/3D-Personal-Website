import styles from "./HomePage.module.css";
import Navbar from "../components/NavBar";
import Audio from "../components/Audio";

import GLTFViewer from "../components/GLTFViewer";
import GLTFPage from "../components/GLTFPage.jsx";
import shibaModel from "../assets/shiba/scene.gltf";
import room from "../assets/Room.glb";

export default function HomePage() {
  return (
    <div className={styles.root}>
      <Navbar />
      {/* <GLTFPage modelPath={shibaModel} /> */}
      <GLTFPage modelPath={room} />

      <button class={styles.button}></button>
    </div>
  );
}
