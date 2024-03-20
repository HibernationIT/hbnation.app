"use client";

import { useRouter } from "next/navigation";
import { FormEvent, RefObject, useLayoutEffect, useRef } from "react";

type IProps = {
  title?: string;
};

export default function SearchBox({ title }: IProps) {
  const router = useRouter();
  const titleRef = useRef() as RefObject<HTMLInputElement>;

  useLayoutEffect(() => {
    // @ts-ignore
    titleRef.current.value = title || "";
  }, []);

  return (
    <form
      className="flex items-center w-full"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        router.replace(`/blog?title=${e.currentTarget["search-title"].value}`, {
          scroll: false,
        });
      }}
    >
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-6 h-6 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
            />
          </svg>
        </div>
        <input
          ref={titleRef}
          type="text"
          id="search-title"
          className="bg-gray-700 border border-gray-500 text-gray-0 text-sm rounded-lg focus:ring-main focus:border-main block w-full ps-10 p-2.5 [&:placeholder-shown~button]:invisible"
          placeholder="제목으로 포스팅을 찾아보세요"
          required
        />
        <button
          type="reset"
          className="absolute inset-y-0 end-3 text-gray-400"
          onClick={() => {
            router.replace("/blog", {
              scroll: false,
            });
          }}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </button>
      </div>
      <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-main rounded-lg border border-main-400 hover:bg-main-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </form>
  );
}
