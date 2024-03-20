export default function CardTemplate({ data }: any) {
  return (
    <section className="grid grid-cols-1 justify-items-center gap-16 xl:grid-cols-3 md:grid-cols-2 px-8 pb-18">
      {data.results.map((value: any, key: number) => {
        const data = {
          image: value.properties["이미지"].files[0].file.url,
          tags: value.properties["태그"].multi_select.map((v: any) => v.name),
          name: value.properties["이름"].title[0].plain_text,
          description: value.properties["설명"].rich_text[0].plain_text,
        };
        return <Card key={key.toString()} data={data} />;
      })}
    </section>
  );
}

type CardIProps = {
  data: {
    image: string;
    tags: string[];
    name: string;
    description: string;
  };
};

function Card({ data }: CardIProps) {
  return (
    <div className="max-w-96 w-full h-fit bg-main-100 border border-main rounded-lg overflow-hidden">
      <div className="w-full h-fit">
        <img src={data.image} alt="image" />
      </div>
      <div className="flex flex-col gap-2 p-6">
        <div className="flex flex-row gap-2">
          {data.tags.map((tag: string, key: number) => (
            <span
              key={key.toString()}
              className="bg-main-200 text-main border border-main-400 px-2 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-2xl text-gray-0 font-bold">{data.name}</p>
        <p className="text-gray-400">{data.description}</p>
      </div>
    </div>
  );
}
