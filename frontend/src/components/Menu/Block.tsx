"use client";

import styles from "../../styles/menu.module.css"

import Image from "next/image";
import "../../../public/assets/svg/logo.svg"

export default function Menu() {

    return (
      <div className={styles.menu}>
        <div className={styles.burger}>
          <span>
            {/* <button onClick={leftMenuTrigger}>menu: {1}</button> */}
          </span>
        </div>
        <div className={styles.title}>
          <Image loading="lazy" src="/assets/svg/logo.svg" alt="no" width={50} height={50}></Image>
          <h1>kittens-archive</h1>
        </div>
      </div>
    );
  }
  