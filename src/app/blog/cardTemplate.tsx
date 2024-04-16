import styles from "./cardTemplate.module.scss";

export default function CardTemplate({ data }: any) {
  return (
    <div className={styles.template}>
      {data.map((value: any, key: number) => {
        const d = {
          image: value.properties["이미지"].files[0].file.url,
          tags: value.properties["태그"].multi_select.map((v: any) => v.name),
          name: value.properties["이름"].title[0].plain_text,
          description: value.properties["설명"].rich_text[0].plain_text,
        };
        return <Block key={key.toString()} data={d} />;
      })}
    </div>
  );
}

type BlockIProps = {
  data: {
    image: string;
    tags: string[];
    name: string;
    description: string;
  };
};

function Block({ data }: BlockIProps) {
  return (
    <div className={styles.card}>
      <a href={`/blog/${encodeURIComponent(data.name)}`}>
        <div>
          <img src={data.image} alt="image" />
        </div>
      </a>
      <div>
        <div>
          {data.tags.map((tag: string, key: number) => (
            <span key={key.toString()}>{tag}</span>
          ))}
        </div>
        <a href={`/blog/${encodeURIComponent(data.name)}`}>
          <p>{data.name}</p>
        </a>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
