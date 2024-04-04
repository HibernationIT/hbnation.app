import { getDatabase, getPage } from "@/api/notion";
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/Header/header";
import NotionRenderer from "@/components/templates/notionRenderer";

type IProps = {
  params: {
    title: string;
  };
};

async function getData(title: string) {
  console.time("design page");
  const database = await getDatabase("49b55aec3870421aa1db16f7f505ced1", {
    filter: {
      property: "이름",
      rich_text: {
        equals: title,
      },
    },
  });
  console.timeEnd("design page");
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
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
                <h1 className="text-gray-0 text-xl md:text-3xl font-bold">
                  {database.properties["이름"].title[0].plain_text}
                </h1>
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
