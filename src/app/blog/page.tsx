import Footer from "@/components/templates/Footer/footer";
import Header from "@/components/templates/Header/header";
import SearchBox from "./searchBox";
import { Filter, getDatabase } from "@/api/notion";
import CardTemplate from "./cardTemplate";
import RowTemplate from "./rowTemplate";

type IProps = {
  searchParams: {
    title: string;
  };
};

async function getData(title: string) {
  console.time("blog");
  const filter: Filter[] = [
    {
      property: "노출",
      checkbox: {
        equals: true,
      },
    },
  ];
  if (title) {
    filter.push({
      property: "이름",
      rich_text: {
        contains: title,
      },
    });
  }

  const data = await getDatabase("7bcac528c84545bf861e7ec9bc26409a", {
    filter: {
      and: filter,
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

export default async function Blog({ searchParams }: IProps) {
  const data = await getData(searchParams.title);
  const top3 = data.results.slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center pt-18">
        <section className="flex flex-col max-w-screen-sm w-full gap-4 px-8 pt-16 mb-18">
          <h2 className="text-gray-0 text-4xl font-bold text-center">
            My Blog
          </h2>
          <p className="mt-2 mb-4 text-xl text-gray-500 text-center">
            개발 관련 공부한 내용이나 내가 기억하기 위한 기록을 공유합니다
          </p>
          <SearchBox title={searchParams.title} />
        </section>
        {searchParams.title == undefined && (
          <section className="max-w-screen-xl w-full px-8 mb-8">
            <h2 className=" w-full text-gray-0 text-3xl font-bold text-start mb-8">
              최신글
            </h2>
            <RowTemplate data={top3} />
          </section>
        )}
        <section className="flex flex-col max-w-screen-2xl w-full gap-4 px-8 pt-16 mb-18">
          <h2 className=" w-full text-gray-0 text-3xl font-bold text-center mb-8">
            전체 글
          </h2>
          <CardTemplate data={data.results} />
        </section>
      </main>
      <Footer />
    </>
  );
}
