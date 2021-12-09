import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <Layout className={styles.container}>
      <Header className={styles.header} />

      <main className={styles.main}>
        <h1 className={styles.title}>Сборщик данных</h1>
        <TaskList />
      </main>
    </Layout>
  );
}


