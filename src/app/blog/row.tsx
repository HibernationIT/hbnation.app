type IProps = {
  data: {
    date: string;
    tags: string[];
    name: string;
    description: string;
  };
};

export default function Row({ data }: IProps) {
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
          <h2 className="text-gray-0 text-2xl font-bold">{data.name}</h2>
          <p className="text-gray-400 text-base">{data.description}</p>
          <div className="flex flex-row justify-end w-full">
            <a className="text-main">Read more →</a>
          </div>
        </div>
      </div>
      <hr className="border-gray-700" />
    </>
  );
}
