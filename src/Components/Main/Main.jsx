import React from 'react'
//import styles from modules
import styles from "./Main.module.css";
export default function Main() {
  return (
    <div className={styles.cards}>
        <div className={styles.card}>
            <h1>Post 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rerum maxime unde delectus cum sit quos alias qui accusamus blanditiis et, labore eos dolores, officiis expedita. Quae voluptate quaerat minus?</p>
        </div>
            <div className={styles.card}>
            <h1>Post 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rerum maxime unde delectus cum sit quos alias qui accusamus blanditiis et, labore eos dolores, officiis expedita. Quae voluptate quaerat minus?</p>
        </div>
            <div className={styles.card}>
            <h1>Post 3</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rerum maxime unde delectus cum sit quos alias qui accusamus blanditiis et, labore eos dolores, officiis expedita. Quae voluptate quaerat minus?</p>
        </div>
    </div>
  )
}
