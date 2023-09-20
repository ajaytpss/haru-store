"use client";
import Link from "next/link";
import styles from "./authModal.module.css";

export default function AuthModal(props) {
  const closeModalHandler = () => {
    props.onClose();
  };
  return (
    <div className={styles.authModalMain}>
      <div className={styles.modalBody}>
        <div className={styles.btnOuter}>
          <Link
            onClick={closeModalHandler}
            className={"btn"}
            href={"/auth/login"}
          >
            Login
          </Link>
          <Link
            onClick={closeModalHandler}
            className={"btn"}
            href={"/auth/signup"}
          >
            Signup
          </Link>
        </div>
        <div className="text-right mt-3">
          <span onClick={closeModalHandler} className="cursor-pointer">
            Close
          </span>
        </div>
      </div>
    </div>
  );
}
