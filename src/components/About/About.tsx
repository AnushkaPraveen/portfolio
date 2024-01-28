import React from "react";
import { getImageUrl } from "../../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>
                About
            </h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="Sitting with laptop" className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm frontend developer with experience </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
                        <div>
                            <h3>Frontend Developer</h3>
                            <p>I'm frontend developer with experience </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
                        <div>
                            <h3>Frontend Developer</h3>
                            <p>I'm frontend developer with experience </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}