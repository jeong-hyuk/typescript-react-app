import React from "react";
import styles from "../styles/Section.module.scss";
export default function Section({ color }: { color: string }) {
  return (
    <div className={styles.box}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quae magni? Adipisci, inventore
        praesentium facilis voluptatibus debitis tenetur, accusamus non obcaecati dolore rerum voluptatum nulla ducimus.
        Vero sed perferendis aut.
      </p>
      <button className={styles[color]}>버튼</button>
    </div>
  );
}
