import { getDatabase, getPage } from "@/api/notion";
import Footer from "@/components/templates/Footer/footer";
import Header from "@/components/templates/Header/header";
import NotionRenderer from "@/components/templates/notionRenderer";
import styles from "./page.module.scss";

type IProps = {
  params: {
    title: string;
  };
};

async function getData(title: string) {
  console.time("project page");
  const database = await getDatabase("05b441947e73424f8fce737e7ecc17eb", {
    filter: {
      property: "이름",
      rich_text: {
        equals: title,
      },
    },
  });
  console.timeEnd("project page");
  return database.results[0];
}

export default async function ProjectPage({ params }: IProps) {
  const database = await getData(decodeURIComponent(params.title));
  const data = await getPage(database.id);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.title}>
          <div className={styles.titleBg}>
            <img src={database.properties["이미지"].files[0].file.url} />
          </div>
          <div className={styles.titleBox}>
            <div>
              <p>{database.properties["날짜"].date.start}</p>
              <div>
                <h1>{database.properties["이름"].title[0].plain_text}</h1>
                <div className={styles.titleStacks}>
                  {database.properties["기술스택"].files.map(
                    (f: any, key: number) => (
                      <img key={key.toString()} src={f.file.url} />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.content}>
          <NotionRenderer value={data} />
        </section>
      </main>
      <Footer />
    </>
  );
}
