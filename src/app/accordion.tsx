"use client";

import { useState } from "react";
import styles from "./accordion.module.scss";
import classNames from "classnames/bind";

type IProps = {
  data: {
    frontend: any;
    backend: any;
  };
};

export default function Accodion({ data }: IProps) {
  const cb = classNames.bind(styles);
  const [open, setOpen] = useState(1);

  return (
    <div className={styles.accordion}>
      <button
        className={cb("header", { active: open === 1 })}
        onClick={() => setOpen((state) => (state === 1 ? 0 : 1))}
      >
        <div className="flex flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
            />
          </svg>
          <span className={open === 1 ? "text-gray-0" : ""}>Frontend</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
      <div className={cb("content", { active: open === 1 })}>
        <ul>
          {data.frontend.results.map((value: any, key: number) => {
            const name = value.properties["이름"].title[0].plain_text;
            const image = value.properties["이미지"].files[0].file.url;
            const proficiency = value.properties["숙련도"].number;

            return (
              <li key={key.toString()}>
                <img src={image} alt={name} />
                <span>{name}</span>
                <div className={styles.gage}>
                  <span>{`${Math.round(proficiency * 100)}%`}</span>
                  <div>
                    <div
                      style={{
                        width: `${open === 1 ? proficiency * 100 : 0}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className={cb("header", { active: open === 2 })}
        onClick={() => setOpen((state) => (state === 2 ? 0 : 2))}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
            />
          </svg>
          <span className={open === 2 ? "text-gray-0" : ""}>Backend</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
      <div className={cb("content", { active: open === 2 })}>
        <ul>
          {data.backend.results.map((value: any, key: number) => {
            const name = value.properties["이름"].title[0].plain_text;
            const image = value.properties["이미지"].files[0].file.url;
            const proficiency = value.properties["숙련도"].number;

            return (
              <li key={key.toString()}>
                <img src={image} alt={name} />
                <span>{name}</span>
                <div className={styles.gage}>
                  <span>{`${Math.round(proficiency * 100)}%`}</span>
                  <div>
                    <div
                      style={{
                        width: `${open === 2 ? proficiency * 100 : 0}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
