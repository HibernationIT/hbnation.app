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

async function getData(title: string) {
  console.time("blog page");
  const database = await getDatabase(process.env.NOTION_BLOG_DATABASE, {
    filter: {
      property: "이름",
      rich_text: {
        equals: title,
      },
    },
  });
  console.timeEnd("blog page");
  return database.results[0];
}
