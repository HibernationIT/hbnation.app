type IProps = {
  idx: number;
  data: {
    image: string;
    name: string;
    link: string;
    description: string;
    stack: string[];
  };
};

export default function Section({ idx, data }: IProps) {
  return (
    <section
      className={`flex flex-col items-center max-w-screen-xl w-full gap-6 md:gap-16 px-9 mb-16 ${
        idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div
        style={{
          backgroundImage: `url(${data.image})`,
        }}
        className="h-64 md:h-96 md:max-w-100 w-full bg-cover bg-center rounded-lg"
      />
      <div className="max-w-112 min-w-60 w-full">
        <div className="flex flex-col gap-3 mb-6">
          <p className="text-gray-0 text-4xl font-bold">{data.name}</p>
          <a
            href={data.link}
            className="flex flex-row items-center gap-2 text-main text-lg"
          >
            <span>{data.link.substring(0, 30)}...</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
              />
            </svg>
          </a>
          <p className="text-gray-500">{data.description}</p>
        </div>
        <div className="flex flex-row gap-2 mb-6">
          {data.stack.map((s: string, key: number) => (
            <div key={key.toString()} className="relative">
              <img
                src={s}
                data-tooltip-target="tooltip-default"
                className="w-9 h-9 [&:hover~div]:visible [&:hover~div]:opacity-100"
              />
              <div className="absolute z-10 -top-12 invisible inline-block px-3 py-2 text-sm font-medium text-gray-0 transition-all duration-300 bg-gray-500 rounded-lg shadow-sm opacity-0 tooltip">
                {s.split("/")[5].split("?")[0].split(".")[0]}
                <div className="tooltip-arrow -bottom-1" data-popper-arrow />
              </div>
            </div>
          ))}
        </div>
        <a className="flex items-center gap-2 w-fit text-white bg-main hover:bg-main-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:cursor-pointer">
          <span>Learn more</span>
          <svg
            className="w-6 h-6 text-white"
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
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
