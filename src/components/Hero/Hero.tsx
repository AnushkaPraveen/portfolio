import React from "react";
import { getImageUrl } from "../../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container} >
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I,m Ada
                </h1>
                <p>I'm a full-stack developer with 5 years of experience</p>
                <a href="mailto:anushkapraveen98@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}