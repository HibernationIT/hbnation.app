import { getDatabase } from "@/api/notion";
import Footer from "@/components/templates/Footer/footer";
import Header from "@/components/templates/Header/header";
import RowTemplate from "./rowTemplate";
import styles from "./page.module.scss";

export default async function Project() {
  const data = await getData();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.header}>
          <h2>My Projects</h2>
          <p>지금까지 만든 토이 프로젝트를 소개합니다</p>
        </section>
        <section>
          <RowTemplate data={data.results} />
        </section>
      </main>
      <Footer />
    </>
  );
}

async function getData() {
  console.time("project");
  const data = await getDatabase(process.env.NOTION_PROJECT_DATABASE, {
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
