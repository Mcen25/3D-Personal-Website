import { createSignal } from "solid-js";
import styles from "./IntroPage.module.css";

export default function IntroPage() {
  const [animate, setAnimate] = createSignal(false);

  const handleClick = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 10);
  };

  return (
    <div className={styles.root}>
      <button 
        onClick={handleClick} 
        className={`${styles.title} ${animate() ? styles.animation : ""}`}
      >
        Matthew En's Portfolio
      </button>
    </div>
  );
}