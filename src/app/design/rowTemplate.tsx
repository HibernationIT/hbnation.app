import styles from "./rowTemplate.module.scss";

export default function RowTemplate({ data }: any) {
  return (
    <div className={styles.rowTemplate}>
      {data.map((value: any, key: number) => {
        const d = {
          name: value.properties["이름"].title[0].plain_text as string,
          link: value.properties["링크"].url as string,
          image: value.properties["이미지"].files[0].file.url as string,
          description: value.properties["설명"].rich_text[0]
            .plain_text as string,
        };
        return <Block key={key.toString()} data={d} />;
      })}
    </div>
  );
}

type BlockIProps = {
  data: {
    image: string;
    name: string;
    link: string;
    description: string;
  };
};

function Block({ data }: BlockIProps) {
  return (
    <div className={styles.card}>
      <div
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      />
      <div>
        <div className={styles.cardContent}>
          <p>{data.name}</p>
          <a href={data.link}>
            <span>Figma</span>
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
          <p className="text-gray-500">{data.description}</p>
        </div>
        <a
          href={`/design/${encodeURIComponent(data.name)}`}
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
