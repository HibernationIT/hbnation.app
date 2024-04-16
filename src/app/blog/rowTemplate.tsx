import styles from "./rowTemplate.module.scss";

export default function RowTemplate({ data }: any) {
  return (
    <div className={styles.template}>
      {data.map((value: any, key: number) => {
        const data = {
          date: value.properties["날짜"].date.start,
          tags: value.properties["태그"].multi_select.map((v: any) => v.name),
          name: value.properties["이름"].title[0].plain_text,
          description: value.properties["설명"].rich_text[0].plain_text,
        };

        return <Block key={key.toString()} data={data} />;
      })}
    </div>
  );
}

type BlockIProps = {
  data: {
    date: string;
    tags: string[];
    name: string;
    description: string;
  };
};

function Block({ data }: BlockIProps) {
  return (
    <>
      <div className={styles.card}>
        <div>
          <div>
            {data.tags.map((tag: string, idx: number) => (
              <span key={idx.toString()}>{tag}</span>
            ))}
          </div>
          <span>{data.date}</span>
        </div>
        <div>
          <a href={`/blog/${encodeURIComponent(data.name)}`}>
            <h2>{data.name}</h2>
          </a>
          <p>{data.description}</p>
          <div>
            <a
              href={`/blog/${encodeURIComponent(data.name)}`}
              className="text-main"
            >
              Read more →
            </a>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
    </>
  );
}
