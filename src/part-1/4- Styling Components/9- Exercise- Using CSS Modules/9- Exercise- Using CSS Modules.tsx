import styles from "./9- Exercise- Using CSS Modules.module.css";

interface Props {
  children: string;
}
export default function Exercise_Using_CSS_Modules({ children }: Props) {
  return (
    <>
      <button className={styles.btn}>{children}</button>
    </>
  );
}
