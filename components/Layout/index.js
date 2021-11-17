import Head from "next/head";
import { useRouter } from "next/router";

// import Footer from './Footer'
// import Showcase from './Showcase'
// import InfoBox from './InfoBox'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      {router.pathname === "/"}

      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "InfoGrabber like ToDo App",
  description: "Find the latest DJ and other musical events",
  keywords: "music, dj, edm, events",
};
