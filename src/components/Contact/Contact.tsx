import styles from "./Contact.module.css";
import { getImageUrl } from "../../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                    <a href="mailto:anushkapraveen98@gmail.com">anushkapraveen98@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin" />
                    <a href="https://www.linkedin.com/in/anushka-praveen/">anushka-praveen</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github" />
                    <a href="https://github.com/AnushkaPraveen">AnushkaPraveen</a>
                </li>
            </ul>
        </footer>
    )
}