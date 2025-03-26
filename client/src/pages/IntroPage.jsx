import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import styles from "./IntroPage.module.css";

export default function IntroPage() {
  const [animate, setAnimate] = createSignal(false);
  const navigate = useNavigate();

  const handleClick = () => {
    const audio = new Audio("/src/assets/sound.wav");
    audio.play();

    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 10);
    setTimeout(() => {
      navigate("/home");
    }, 1500);
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