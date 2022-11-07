import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h1 className="text-4xl mb-5 font-bold">Home</h1>
      <span className="text-7xl">🏡</span>
    </div>
  );
};

export default Home;
