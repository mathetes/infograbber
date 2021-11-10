import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Layout from "@/components/Layout";

import TaskList from "../components/taskList";

export default function Home() {
  return (
    <Layout className={styles.container}>
      <Head>
        <title>Сборщик данных</title>
        <meta name="description" content="Сборщик данных" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Сборщик данных</h1>
        <TaskList />
      </main>
    </Layout>
  );
}
