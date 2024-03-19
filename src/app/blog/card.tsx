type IProps = {
  data: {
    image: string;
    tags: string[];
    name: string;
    description: string;
  };
};

export default function Card({ data }: IProps) {
  return (
    <div className="max-w-96 w-full bg-main-100 border border-main rounded-lg overflow-hidden">
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
