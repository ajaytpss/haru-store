import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className="container">
        <Link href={"/admin/login"}>Login as admin</Link>
        {/* abc */}
      </div>
    </footer>
  );
};
