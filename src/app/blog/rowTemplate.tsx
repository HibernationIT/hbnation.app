export default function RowTemplate({ data }: any) {
  return (
    <div className="flex flex-col gap-8 [&>hr:last-child]:invisible">
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
      <div>
        <div className="flex flex-row justify-between mb-5">
          <div className="flex flex-row gap-2">
            {data.tags.map((tag: string, idx: number) => (
              <span
                key={idx.toString()}
                className="bg-main-200 text-main border border-main-400 px-2 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-gray-400">{data.date}</span>
        </div>
        <div className="flex flex-col gap-4">
          <a href={`/blog/${encodeURIComponent(data.name)}`}>
            <h2 className="text-gray-0 text-2xl font-bold">{data.name}</h2>
          </a>
          <p className="text-gray-400 text-base">{data.description}</p>
          <div className="flex flex-row justify-end w-full">
            <a
              href={`/blog/${encodeURIComponent(data.name)}`}
              className="text-main"
            >
              Read more →
            </a>
          </div>
        </div>
      </div>
      <hr className="border-gray-700" />
    </>
  );
}
