import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";
import SearchBox from "./searchBox";
import { getDatabase } from "@/api/notion";
import Card from "./card";

async function getData() {
  console.time("blog");
  const data = await getDatabase("7bcac528c84545bf861e7ec9bc26409a", {
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
  console.timeEnd("blog");
  return data;
}

export default async function Blog() {
  const data = await getData();

  return (
    <>
      <Header />
      <main className="flex flex-col items-center pt-18">
        <section className="flex flex-col max-w-screen-sm w-full gap-4 px-8 pt-16">
          <h2 className="text-gray-0 text-4xl font-bold text-center">
            My Blog
          </h2>
          <p className="mt-2 mb-4 text-xl text-gray-500 text-center">
            개발 관련 공부한 내용이나 내가 기억하기 위한 기록을 공유합니다
          </p>
          <SearchBox />
        </section>
        <section className="grid grid-cols-1 justify-items-center gap-16 xl:grid-cols-3 md:grid-cols-2 px-8 py-18">
          {data.results.map((value: any, key: number) => {
            const data = {
              image: value.properties["이미지"].files[0].file.url,
              tags: value.properties["태그"].multi_select.map(
                (v: any) => v.name
              ),
              name: value.properties["이름"].title[0].plain_text,
              description: value.properties["설명"].rich_text[0].plain_text,
            };
            return <Card key={key.toString()} data={data} />;
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
