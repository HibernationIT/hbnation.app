import styles from "./rowTemplate.module.scss";

export default function RowTemplate({ data }: any) {
  return (
    <div className={styles.rowTemplate}>
      {data.map((value: any, key: number) => {
        const d = {
          name: value.properties["이름"].title[0].plain_text as string,
          link: value.properties["링크"].url as string,
          image: value.properties["이미지"].files[0].file.url as string,
          stack: value.properties["기술스택"].files.map(
            (f: any) => f.file.url
          ) as string[],
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
    stack: string[];
  };
};

function Block({ data, idx }: BlockIProps) {
  return (
    <div
      className={styles.card}
      // className={`flex flex-col items-center w-full gap-6 md:gap-16 ${
      //   idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      // }`}
    >
      <div
        style={{
          backgroundImage: `url(${data.image})`,
        }}
        className="gap-16"
      />
      <div>
        <div className={styles.cardContent}>
          <p>{data.name}</p>
          <a href={data.link}>
            <span>
              {data.link.length > 30
                ? data.link.substring(0, 30) + "..."
                : data.link}
            </span>
            <svg
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
          <p>{data.description}</p>
        </div>
        <div className={styles.cardStack}>
          {data.stack.map((s: string, key: number) => (
            <div key={key.toString()} className="relative">
              <img src={s} />
              <div>{s.split("/")[5].split("?")[0].split(".")[0]}</div>
            </div>
          ))}
        </div>
        <a
          href={`/project/${encodeURIComponent(data.name)}`}
          className={styles.cardLink}
        >
          <span>Learn more</span>
          <svg
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
