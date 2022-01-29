import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "../../animations/animations";
import { stagger } from "../../animations/animations";
import styles from "../../styles/Project.module.css";

export default function Home({ project }) {
  const router = useRouter();
  const id = router.query.id;

  return (
    <motion.div
      className={styles.product__pageContainer}
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={styles.side__one}
      >
        <motion.img
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          src={`${project.image}`}
          alt="project__image"
          Height="auto"
          Width="80%"
          className={styles.project__image}
        />
      </motion.div>
      <motion.div
        className={styles.side__two}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Link href="/">
          <motion.div variants={fadeInUp} style={{ cursor: "pointer" }}>
            <a className={styles.home__CTA}>Back to home</a>
          </motion.div>
        </Link>
        <motion.div variants={fadeInUp}>
          <h4>Project Description</h4>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </motion.div>
        <span className={styles.CTA__buttons}>
          <motion.div variants={fadeInUp}>
            <a href={project.liveLink}>
              <button>View Live Demo</button>
            </a>
            <button>View Code</button>
          </motion.div>
        </span>
      </motion.div>
    </motion.div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/projects/${context.params.id}`
  );
  const project = await res.json();

  return {
    props: {
      project,
    },
  };
};