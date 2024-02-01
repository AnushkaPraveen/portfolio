import { getImageUrl } from "../../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>
                About
            </h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.jpg")} alt="Sitting with laptop" className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/frontend.png")} alt="cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>FRONTEND DEVELOPMENT</h3>
                            <p>I’m a front-end developer with experience
                                in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/mobile.png")} alt="cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>MOBILE DEVELOPMENT</h3>
                            <p className={styles.aboutItemDescription}>I'm mobile developer with experience developing responsive and optimized app for smartphones and tablets. </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/server.png")} alt="cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>BACKEND DEVELOPMENT</h3>
                            <p>I have experience developing fast and
                                optimised back-end systems and APIs </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}