import Footer from "@/components/templates/Footer/footer";
import Header from "@/components/templates/Header/header";
import SearchBox from "./searchBox";
import { Filter, getDatabase } from "@/api/notion";
import CardTemplate from "./cardTemplate";
import RowTemplate from "./rowTemplate";
import styles from "./page.module.scss";

type IProps = {
  searchParams: {
    title: string;
  };
};

export default async function Blog({ searchParams }: IProps) {
  const data = await getData(searchParams.title);
  const top3 = data.results.slice(0, 3);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.mainSection}>
          <h2>My Blog</h2>
          <p>개발 관련 공부한 내용이나 내가 기억하기 위한 기록을 공유합니다</p>
          <SearchBox title={searchParams.title} />
        </section>
        {searchParams.title == undefined && (
          <section className={styles.rowSection}>
            <h2>최신글</h2>
            <RowTemplate data={top3} />
          </section>
        )}
        <section className={styles.cardSection}>
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
