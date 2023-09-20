"use client";

import React, { useState } from "react";
import Link from "next/link";
import AuthModal from "./authModal/AuthModal";
import { accountIcon } from "@/assets/icons/icon";

export default function AuthHeaderLink() {
  const [show, setShow] = useState();
  const authModalHandler = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const onCloseHandler = (val) => {
    setShow(val);
  };
  return (
    <>
      {show && <AuthModal onClose={onCloseHandler} />}
      <Link onClick={authModalHandler} href="/">
        {accountIcon}
      </Link>
    </>
  );
}
