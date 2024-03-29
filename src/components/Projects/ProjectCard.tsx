import React from "react";
import { getImageUrl } from "../../../utils";
import styles from "./ProejctCard.module.css";
interface Project {
    title: string;
    imageSrc: string;
    description: string;
    skills: string[];
    demo: string;
    source: string;
}

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project: { title, imageSrc, description, skills, demo, source } }) => {

    return (
        <div className={styles.container}>
            <img src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill: any, id: any) => {
                    return <li key={id} className={styles.skill}>{skill}</li>;
                })}
            </ul>
            <div className={styles.links}>
                {demo ? <a href={demo} className={styles.link}>Demo</a> : null}
                <a href={source} className={styles.link}>Source</a>
            </div>
        </div>
    )
}
