"use client";

import { ChangeEvent, useState } from "react";

type IProps = {
  data: any;
};

export default function CardTemplate({ data }: IProps) {
  const [size, setSize] = useState(32);
  const [width, setWidth] = useState(2);

  return (
    <section className="flex flex-col items-center max-w-screen-xl w-full px-8">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-main-100 border border-main-200 rounded-lg px-8 py-3 mb-8">
        <div className="w-64">
          <div className="flex flex-row justify-between text-gray-0">
            <span>Size</span>
            <span>{size}px</span>
          </div>
          <input
            type="range"
            min={12}
            max={64}
            value={size}
            className="w-full h-2 bg-gray-800 rounded-lg cursor-pointer accent-main"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSize(Number(e.currentTarget.value))
            }
          />
        </div>
        <div className="w-64">
          <div className="flex flex-row justify-between text-gray-0">
            <span>Stroke Width</span>
            <span>{width}px</span>
          </div>
          <input
            type="range"
            min={0.1}
            step={0.1}
            max={3}
            value={width}
            className="w-full h-2 bg-gray-800 rounded-lg cursor-pointer accent-main"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setWidth(Number(e.currentTarget.value))
            }
          />
        </div>
      </div>
      <div className="flex flex-row">
        {data.results.map((value: any, key: number) => {
          const name = value.properties["이름"].title[0].plain_text;
          const svg = value.properties["svg"].rich_text
            .map((v: any) => v.plain_text)
            .join("");

          return (
            <Block
              key={key.toString()}
              name={name}
              svg={svg}
              size={size}
              width={width}
            />
          );
        })}
      </div>
    </section>
  );
}

function Block({
  name,
  svg,
  size,
  width,
}: {
  name: string;
  svg: string;
  size: number;
  width: number;
}) {
  const [copy, setCopy] = useState("copy");

  const copyIcon = svg
    .replaceAll('width="32"', `width="${size}"`)
    .replaceAll('height="32"', `height="${size}"`)
    .replaceAll('stroke-width="2"', `stroke-width="${width}"`);

  const icon = copyIcon.replaceAll('stroke="black"', "");

  return (
    <div className="relative flex flex-col items-center gap-2 bg-main-100 border border-main px-6 py-4 rounded-lg hover:[&>button]:opacity-100">
      <div
        className="flex flex-row justify-center items-center h-16 text-gray-300 stroke-gray-300"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <p className="text-gray-300 w-28 text-center">{name}</p>
      <button
        className="absolute flex items-center justify-center transition-opacity opacity-0 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] rounded-lg hover:cursor-pointer"
        onClick={() => {
          setCopy("copied");
          setTimeout(() => setCopy("copy"), 1000);
          navigator.clipboard.writeText(copyIcon);
        }}
      >
        {copy === "copy" ? (
          <svg
            className="w-5 h-5 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M19.2002 5.57255C19.2002 5.28746 19.5449 5.14469 19.7465 5.34628L24.2539 9.85373C24.4555 10.0553 24.3127 10.4 24.0276 10.4H20.8002C19.9165 10.4 19.2002 9.68366 19.2002 8.8V5.57255Z" />
            <path d="M24.8002 22.4C24.8002 23.2837 24.0839 24 23.2002 24H12.0002C11.1165 24 10.4002 23.2837 10.4002 22.4V6.4C10.4002 5.51635 11.1165 4.8 12.0002 4.8H18.0802C18.2569 4.8 18.4002 4.94327 18.4002 5.12V9.6C18.4002 10.4837 19.1165 11.2 20.0002 11.2H24.4802C24.6569 11.2 24.8002 11.3433 24.8002 11.52V22.4Z" />
            <path d="M21.6002 25.6C21.6002 26.4837 20.8839 27.2 20.0002 27.2H8.8002C7.91654 27.2 7.2002 26.4837 7.2002 25.6V9.6C7.2002 8.71635 7.91654 8 8.8002 8H9.2802C9.45693 8 9.6002 8.14327 9.6002 8.32V22.4C9.6002 23.7255 10.6747 24.8 12.0002 24.8H21.2802C21.4569 24.8 21.6002 24.9433 21.6002 25.12V25.6Z" />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.4939 8.37652C28.1144 8.92542 28.1724 9.87339 27.6235 10.4939L16.8068 22.7214C15.872 23.7782 14.2484 23.8525 13.2209 22.8855L5.47196 15.5923C4.8687 15.0245 4.83993 14.0752 5.4077 13.472C5.97548 12.8687 6.92479 12.8399 7.52805 13.4077L14.9015 20.3475L25.3765 8.50616C25.9254 7.88567 26.8734 7.82763 27.4939 8.37652Z"
            />
          </svg>
        )}
        <span className="text-white">{copy}</span>
      </button>
    </div>
  );
}
