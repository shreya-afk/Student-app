import React from "react";
import styles from "./Student.module.css";

const Student = ({ name, age, course }) => {
  return (
    <article className={styles.Student}>
      <header>
        <h3 className={styles.Name}>name: {name} </h3>
        <h4 className={styles.Age}>age: {age} </h4>
        <h4 className={styles.Course}>course: {course} </h4>
      </header>
    </article>
  )
};

export default Student;
