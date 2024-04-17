"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import ArrowSvg from "../components/icons/arrowSvg";
import styles from "./downButton.module.scss";

export default function DownButton() {
  function scrollDown() {
    setScroll(1);
  }

  let scrolling = false;

  const [scroll, setScroll] = useState(0);

  useLayoutEffect(() => {
    window.addEventListener(
      "wheel",
      (e: any) => {
        e.preventDefault();

        if (!scrolling) {
          scrolling = true;

          if (e.wheelDeltaY < 0)
            setScroll((state) => (state + 1 > 2 ? 2 : state + 1));
          else setScroll((state) => (state - 1 < 0 ? 0 : state - 1));

          setTimeout(() => {
            scrolling = false;
          }, 500);
        }
      },
      { passive: false }
    );

    window.addEventListener(
      "touchmove",
      () => {
        setScroll(5);
      },
      { passive: false }
    );
  }, []);

  useEffect(() => {
    const height = window.innerHeight;

    if (scroll <= 2) {
      window.scroll({
        left: 0,
        top: height * scroll,
        behavior: "smooth",
      });
    }
  }, [scroll]);

  return (
    <button className={styles.downButton} onClick={scrollDown}>
      <ArrowSvg />
    </button>
  );
}
