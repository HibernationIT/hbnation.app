import Footer from "@/components/templates/Footer/footer";
import Header from "@/components/templates/Header/header";
import RowTemplate from "./rowTemplate";
import { getDatabase } from "@/api/notion";
import styles from "./page.module.scss";

export default async function Illust() {
  const data = await getData();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.header}>
          <h2>My Design Projects</h2>
          <p>지금까지 디자인해본 프로젝트들을 소개합니다</p>
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
