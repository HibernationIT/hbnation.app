import Footer from "@/components/templates/Footer/footer";
import Header from "@/components/templates/Header/header";
import CardTemplate from "./cardTemplate";
import { getDatabase } from "@/api/notion";
import styles from "./page.module.scss";

export default async function Icon() {
  const data = await getData();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.header}>
          <h2>My Icons</h2>
          <p>
            토이 프로젝트에 사용하기 위해 만든 아이콘들 입니다 저작권 표시 없이
            <br />
            마음껏 사용하여도 괜찮습니다
          </p>
        </section>
        <CardTemplate data={data} />
      </main>
      <Footer />
    </>
  );
}

async function getData() {
  console.time("icon");
  const data = await getDatabase("b7bfb3b1552e4b2db12854ec32af6caa", {
    filter: {
      property: "노출",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "이름",
        direction: "ascending",
      },
    ],
  });
  console.timeEnd("icon");
  return data;
}
