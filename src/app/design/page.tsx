import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";
import Section from "./section";
import { getDatabase } from "@/api/notion";

async function getData() {
  console.time("project");
  const data = await getDatabase("49b55aec3870421aa1db16f7f505ced1", {
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

export default async function Illust() {
  const data = await getData();

  return (
    <>
      <Header />
      <main className="flex flex-col items-center pt-18">
        <section className="flex flex-col w-full gap-4 py-16">
          <h2 className="text-gray-0 text-4xl font-bold text-center">
            My Design Projects
          </h2>
          <p className="mt-2 mb-9 text-xl text-gray-500 text-center">
            지금까지 디자인해본 프로젝트들을 소개합니다
          </p>
        </section>
        {data.results.map((value: any, key: number) => {
          const data = {
            name: value.properties["이름"].title[0].plain_text as string,
            link: value.properties["링크"].url as string,
            image: value.properties["이미지"].files[0].file.url as string,
            description: value.properties["설명"].rich_text[0]
              .plain_text as string,
          };
          return <Section key={key.toString()} idx={key} data={data} />;
        })}
      </main>
      <Footer />
    </>
  );
}
