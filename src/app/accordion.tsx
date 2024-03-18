"use client";

import { useState } from "react";

type IProps = {
  data: {
    frontend: any;
    backend: any;
  };
};

export default function Accodion({ data }: IProps) {
  const [open, setOpen] = useState(1);

  return (
    <div>
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray rounded-t-xl focus:ring-2 focus:ring-gray-200 hover:bg-main-100 gap-3${
            open === 1 ? " bg-main-100" : ""
          }`}
          onClick={() => setOpen((state) => (state === 1 ? 0 : 1))}
        >
          <div className="flex flex-row gap-2">
            <svg
              className={`w-6 h-6${open === 1 ? " text-gray-100" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
              />
            </svg>
            <span className={open === 1 ? "text-gray-0" : ""}>Frontend</span>
          </div>
          <svg
            className={`w-3 h-3 rotate-180 shrink-0${
              open === 1 ? " text-gray-0" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        className={`overflow-hidden transition-all border border-b-0 border-gray ${
          open === 1 ? "h-108" : "h-0"
        }`}
      >
        <div className="flex flex-row gap-5 p-5">
          <ul className="w-full text-sm font-medium text-gray-0 bg-main-200 border border-gray rounded-lg [&>li:not(:last-child)]:border-b [&>li:not(:last-child)]:border-gray">
            {data.frontend.results.map((value: any, key: number) => {
              const name = value.properties["이름"].title[0].plain_text;
              const image = value.properties["이미지"].files[0].file.url;
              const proficiency = value.properties["숙련도"].number;

              return (
                <li
                  className="flex flex-row items-center gap-3 w-full px-4 py-2"
                  key={key.toString()}
                >
                  <img src={image} alt={name} />
                  <span className="w-24 flex-shrink-0">{name}</span>
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{`${Math.round(
                        proficiency * 100
                      )}%`}</span>
                    </div>
                    <div className="w-full bg-gray-500 rounded-full h-2.5">
                      <div
                        className="bg-main h-2.5 rounded-full transition-all duration-700"
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
      </div>
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray focus:ring-2 focus:ring-gray-200 hover:bg-main-100 gap-3${
            open === 2 ? " border-b-0" : " border-b rounded-b-xl"
          } `}
          onClick={() => setOpen((state) => (state === 2 ? 0 : 2))}
        >
          <div className="flex flex-row gap-2">
            <svg
              className={`w-6 h-6${open === 2 ? " text-gray-100" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
              />
            </svg>
            <span className={open === 2 ? "text-gray-0" : ""}>Backend</span>
          </div>
          <svg
            className="w-3 h-3 rotate-180 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              className={open === 2 ? "stroke-gray-0" : ""}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        className={`overflow-hidden transition-all border-gray rounded-b-lg ${
          open === 2 ? "border h-108" : "border-0 h-0"
        }`}
      >
        <div className="flex flex-row gap-5 p-5">
          <ul className="w-full text-sm font-medium text-gray-0 bg-main-200 border border-gray rounded-lg [&>li:not(:last-child)]:border-b [&>li:not(:last-child)]:border-gray">
            {data.backend.results.map((value: any, key: number) => {
              const name = value.properties["이름"].title[0].plain_text;
              const image = value.properties["이미지"].files[0].file.url;
              const proficiency = value.properties["숙련도"].number;

              return (
                <li
                  className="flex flex-row items-center gap-3 w-full px-4 py-2"
                  key={key.toString()}
                >
                  <img src={image} alt={name} />
                  <span className="w-24 flex-shrink-0">{name}</span>
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{`${Math.round(
                        proficiency * 100
                      )}%`}</span>
                    </div>
                    <div className="w-full bg-gray-500 rounded-full h-2.5">
                      <div
                        className="bg-main h-2.5 rounded-full transition-all duration-700"
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
    </div>
  );
}
