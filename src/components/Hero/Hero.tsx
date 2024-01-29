import React from "react";
import { getImageUrl } from "../../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container} >
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I,m Anushka Praveen
                </h1>
                <p className={styles.description}>I'm a frontend developer with 1 years of experience specializing in React and React Native.Reach out if you'd like to learn more!</p>
                <a href="mailto:anushkapraveen98@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}