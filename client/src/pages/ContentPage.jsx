import { createSignal } from "solid-js";
import styles from "./ContentPage.module.css";
import Navbar from "../components/NavBar";
import GLTFPage from "../components/GLTFPage.jsx";

export default function ContentPage() {
  return (
    <div class={styles.root}>
      <Navbar />

      <div class={styles.graph}>
        <div class={styles.columnContainer}>
          <div class={styles.leftSection}>
            <h2>Search</h2>
            <input type="text" placeholder="Search" class={styles.search} />
            <h2>Tags</h2>
            <div class={styles.checkboxContainer}>
              <div class={styles.checkboxWrapper}>
                <input type="checkbox" class={styles.checkbox} id="option1" />
                <label class={styles.checkboxLabel} for="option1">
                  3D Model
                </label>
              </div>
              <div class={styles.checkboxWrapper}>
                <input type="checkbox" class={styles.checkbox} id="option2" />
                <label class={styles.checkboxLabel} for="option2">
                  VR
                </label>
              </div>
              <div class={styles.checkboxWrapper}>
                <input type="checkbox" class={styles.checkbox} id="option3" />
                <label class={styles.checkboxLabel} for="option3">
                  Animated
                </label>
              </div>
              <div class={styles.checkboxWrapper}>
                <input type="checkbox" class={styles.checkbox} id="option4" />
                <label class={styles.checkboxLabel} for="option4">
                  Interactable
                </label>
              </div>
            </div>
            <h2>Filters</h2>
            <div class={styles.checkboxContainer}>
              <div class={styles.checkboxWrapper}>
                <input type="checkbox" class={styles.checkbox} id="option5" />
                <label class={styles.checkboxLabel} for="option5">
                  Planets
                </label>
              </div>
              <div class={styles.checkboxWrapper}>
                <input type="checkbox" class={styles.checkbox} id="option6" />
                <label class={styles.checkboxLabel} for="option6">
                  Man-made Objects
                </label>
              </div>
              <div class={styles.checkboxWrapper}>
                <input type="checkbox" class={styles.checkbox} id="option7" />
                <label class={styles.checkboxLabel} for="option7">
                  Astronomical
                </label>
              </div>
            </div>
          </div>
          <div class={styles.rightSection}>
            <div class={styles.cardGrid}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
