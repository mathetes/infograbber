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
        <TaskList posts={posts} />
        <Button variant="info">Info</Button>{" "}
      </main>
    </Layout>
  );
}

const posts = [
  {
    id: 1,
    title: "Привет, мир",
  },
  { id: 2, title: "Установка" },
  { id: 3, title: "Работаем!" },
  { id: 4, title: "Учимся!" },
  { id: 5, title: "Треним!" },
];
