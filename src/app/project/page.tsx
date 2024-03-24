import { getDatabase } from "@/api/notion";
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";
import RowTemplate from "./rowTemplate";

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
        <section className="max-w-screen-xl w-full px-8">
          <RowTemplate data={data.results} />
        </section>
      </main>
      <Footer />
    </>
  );
}
