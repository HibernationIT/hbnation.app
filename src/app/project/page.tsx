import { getDatabase } from "@/api/notion";
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";
import ProjectSection from "./projectSection";

async function getData() {
  console.time("project");
  const data = await getDatabase("05b441947e73424f8fce737e7ecc17eb", {
    filter: {
      property: "노출",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "생성일시",
        direction: "descending",
      },
    ],
  });
  console.timeEnd("project");
  return data;
}

export default async function Project() {
  const data = await getData();

  return (
    <>
      <Header />
      <main className="flex flex-col items-center pt-18">
        <section className="flex flex-col w-full gap-4 py-16">
          <h2 className="text-gray-0 text-4xl font-bold text-center">
            My Projects
          </h2>
          <p className="mt-2 mb-9 text-xl text-gray-500 text-center">
            지금까지 만든 토이 프로젝트들을 소개합니다
          </p>
        </section>
        {data.results.map((value: any, key: number) => {
          const data = {
            name: value.properties["이름"].title[0].plain_text as string,
            link: value.properties["링크"].url as string,
            image: value.properties["이미지"].files[0].file.url as string,
            stack: value.properties["기술스택"].files.map(
              (f: any) => f.file.url
            ) as string[],
            description: value.properties["설명"].rich_text[0]
              .plain_text as string,
          };
          return <ProjectSection key={key.toString()} idx={key} data={data} />;
        })}
      </main>
      <Footer />
    </>
  );
}
