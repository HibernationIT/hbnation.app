import { getDatabase, getPage } from "@/api/notion";
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";
import NotionRenderer from "@/components/templates/notionRenderer";

type IProps = {
  params: {
    title: string;
  };
};

async function getData(title: string) {
  console.time("project page");
  const database = await getDatabase("05b441947e73424f8fce737e7ecc17eb", {
    filter: {
      property: "이름",
      rich_text: {
        equals: title,
      },
    },
  });
  console.timeEnd("project page");
  return database.results[0];
}

export default async function ProjectPage({ params }: IProps) {
  const database = await getData(decodeURIComponent(params.title));
  const data = await getPage(database.id);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center pt-18">
        <section className="relative flex flex-col items-center w-full max-h-64">
          <div className="flex flex-col items-center justify-center w-full max-h-64 overflow-hidden">
            <img
              className="w-full blur-sm"
              src={database.properties["이미지"].files[0].file.url}
            />
          </div>
          <div className="relative max-w-screen-lg w-full px-8 z-10 bottom-11 md:bottom-12">
            <div className="w-full bg-[rgba(255,255,255,0.32)] p-5 rounded-2xl">
              <p className="text-gray-400 font-medium text-sm md:text-base mb-2">
                {database.properties["날짜"].date.start}
              </p>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
                <h1 className="text-gray-0 text-xl md:text-3xl font-bold">
                  {database.properties["이름"].title[0].plain_text}
                </h1>
                <div className="flex flex-row gap-4">
                  {database.properties["기술스택"].files.map(
                    (f: any, key: number) => (
                      <img key={key.toString()} src={f.file.url} />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-screen-lg w-full text-gray-0 px-8 pb-9">
          <NotionRenderer value={data} />
        </section>
      </main>
      <Footer />
    </>
  );
}
