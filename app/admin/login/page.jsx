import Login from "@/app/components/login/Login";
import React from "react";

export default function adminLogin() {
  return (
    <>
      <section className="py-[100px]">
        <div className="container">
          <div className="max-w-[450px] mx-auto">
            <h2 className="text-3xl mb-2 text-center">Admin Login</h2>
            <Login />
          </div>
        </div>
      </section>
    </>
  );
}
