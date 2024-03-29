export default function RowTemplate({ data }: any) {
  return (
    <div className="flex flex-col w-full gap-16">
      {data.map((value: any, key: number) => {
        const d = {
          name: value.properties["이름"].title[0].plain_text as string,
          link: value.properties["링크"].url as string,
          image: value.properties["이미지"].files[0].file.url as string,
          description: value.properties["설명"].rich_text[0]
            .plain_text as string,
        };
        return <Block key={key.toString()} idx={key} data={d} />;
      })}
    </div>
  );
}

type BlockIProps = {
  idx: number;
  data: {
    image: string;
    name: string;
    link: string;
    description: string;
  };
};

function Block({ idx, data }: BlockIProps) {
  return (
    <div
      className={`flex flex-col items-center w-full gap-6 md:gap-16 ${
        idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div
        style={{
          backgroundImage: `url(${data.image})`,
        }}
        className="h-64 md:h-64 md:max-w-100 w-full bg-cover bg-center rounded-lg"
      />
      <div className="max-w-112 min-w-60 w-full">
        <div className="flex flex-col gap-3 mb-6">
          <p className="text-gray-0 text-4xl font-bold">{data.name}</p>
          <a
            href={data.link}
            className="flex flex-row items-center gap-2 text-main text-lg"
          >
            <span>Figma</span>
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
        <a
          href={`/design/${encodeURIComponent(data.name)}`}
          className="flex items-center gap-2 w-fit text-white bg-main hover:bg-main-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:cursor-pointer"
        >
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
    </div>
  );
}
