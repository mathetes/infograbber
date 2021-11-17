import styles from "@/styles/TaskList.module.css";

function TaskList(props) {
  const content = props.posts.map((post) => (
    <li key={post.id}>
      <h3>{post.title}</h3>
    </li>
  ));
  return <ul className={styles.tasklistitems}>{content}</ul>;
}

export default TaskList;
