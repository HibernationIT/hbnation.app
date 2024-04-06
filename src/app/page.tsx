import DownButton from "@/app/downButton";
import IconSvg from "@/components/icons/IconSvg";
import BlogSvg from "@/components/icons/blogSvg";
import DesignSvg from "@/components/icons/designSvg";
import ProjectSvg from "@/components/icons/projectSvg";
import Footer from "@/components/templates/Footer/footer";
import Header from "@/components/templates/Header/header";
import Accodion from "./accordion";
import { getDatabase } from "@/api/notion";
import styles from "./page.module.scss";

export default async function Home() {
  const data = await getData();

  const tags = {
    "hbnation.it@gmail.com": "mailto:hbnation.it@gmail.com",
    Github: "https://github.com/HibernationIT",
  };
  const navigations = [
    {
      name: "PROJECT",
      url: "/project",
      icon: <ProjectSvg className={styles.mainSectionNavItemIcon} />,
    },
    {
      name: "BLOG",
      url: "/blog",
      icon: <BlogSvg className={styles.mainSectionNavItemIcon} />,
    },
    {
      name: "DESIGN",
      url: "/design",
      icon: <DesignSvg className={styles.mainSectionNavItemIcon} />,
    },
    {
      name: "ICON",
      url: "/icon",
      icon: <IconSvg className={styles.mainSectionNavItemIcon} />,
    },
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.mainSection}>
          <div className={styles.mainSectionContent}>
            <div>
              <div className={styles.mainSectionContentTitle}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M3.81084 13.7117C2.82913 13.2894 0.731073 12.0225 0.192534 10.3332C-0.48064 8.22166 0.781561 5.8567 1.37059 5.09653C1.95961 4.33637 2.96938 3.15388 4.48402 2.39372C5.99866 1.63355 7.76574 1.04231 8.9438 0.957849C10.1218 0.873386 11.3841 0.788923 13.1511 1.21124C14.9182 1.63355 16.0121 2.47818 16.6853 3.06942C17.3585 3.66066 18.9117 5.25085 19.6903 6.97021C20.5318 8.8284 20.6402 10.5022 20.6402 11.3468C20.6402 12.1914 20.3878 13.9651 19.8829 15.2321C19.378 16.499 18.9573 17.1747 18.3682 17.9349C17.7792 18.6951 16.7694 20.1309 16.517 20.8066C16.8536 20.1309 17.9674 18.3977 19.8829 17.0903C21.9865 15.6544 22.828 15.9078 24.2585 14.7253C24.2585 14.0214 24.107 12.3435 23.5012 11.2623C24.0061 11.0652 25.3019 10.8231 26.4463 11.4313C26.9231 11.6846 27.5907 12.0732 27.7927 12.6137C28.3817 12.5574 29.829 12.6644 30.9061 13.5428C31.3268 13.886 31.8317 14.5564 32 15.401C31.8878 15.9641 31.4951 17.0903 30.4854 17.6815C29.1871 18.4417 28.2134 18.5261 27.0353 18.4417C27.2317 18.6951 27.8263 19.2525 28.6341 19.4552C28.9034 19.5228 29.5317 19.5397 29.8122 19.5397C30.1207 19.2863 30.8724 18.864 31.411 19.2018C32.098 19.6328 31.8317 20.3843 31.5793 20.6377C31.1076 21.1111 30.7378 21.3134 29.5597 21.7357C28.7183 22.0736 28.3817 22.4114 27.4561 22.9182C27.1475 23.0871 26.3117 23.425 25.4366 23.425C24.3426 23.425 23.5853 23.1716 22.239 22.5804C22.6878 22.3551 23.7873 21.8878 24.5951 21.8202C25.6048 21.7357 26.3622 21.9046 26.9512 22.327C26.5843 22.4529 26.3808 22.508 26.0256 22.5804C25.7451 22.4959 24.999 22.3776 24.2585 22.5804C24.567 22.693 25.3861 22.8675 26.1939 22.6648C27.2036 22.4114 27.2036 22.327 27.8768 21.9046C28.55 21.4823 29.5597 20.9756 30.3171 20.7222C31.0744 20.4688 31.2427 19.8775 31.1585 19.7931C31.0744 19.7086 30.8219 19.6242 30.0646 20.2154C29.4756 20.2717 28.0956 20.2154 27.2878 19.5397C26.48 18.864 25.8292 17.7378 25.6048 17.2592C26.0817 17.4844 27.2036 17.918 27.8768 17.8504C28.7183 17.766 29.728 17.4281 30.1488 17.0903C30.5695 16.7524 31.1585 16.1612 31.3268 15.4855C31.2146 15.035 30.7883 14.0496 29.9805 13.7117C28.9707 13.2894 28.8024 13.2894 27.4561 13.2894C27.3439 13.036 26.9849 12.4617 26.4463 12.1914C25.7731 11.8536 25.2683 11.6846 24.4268 11.7691C24.6231 12.3322 24.999 13.7624 24.9317 14.9787C24.6231 15.3165 23.7873 16.0429 22.9122 16.2456C21.8182 16.7524 21.7341 16.7524 20.556 17.4281C19.378 18.1038 17.4426 19.962 16.517 22.158C15.7765 23.9149 15.367 27.0569 15.2548 28.4083C15.0304 26.6909 14.8004 22.7831 15.6755 20.8911C16.7694 18.5261 17.6951 18.0194 18.5365 16.4146C19.378 14.8098 19.5463 14.3875 19.7987 13.036C20.0512 11.6846 20.2195 9.23522 18.8731 6.78579C18.2837 5.71349 16.4329 3.23835 14.6658 2.47818C13.8524 2.08402 11.7038 1.34638 9.61697 1.54909C7.00842 1.80248 5.57793 2.56265 5.07305 2.81604C4.56816 3.06942 2.96938 3.99852 2.04376 5.26546C1.11815 6.5324 0.697415 7.96827 0.697415 8.98183C0.697415 9.99538 1.034 11.6846 2.80108 12.6982C2.57669 12.2196 2.26254 11.0089 2.80108 9.99538C3.47426 8.72844 4.14743 8.22166 5.07305 8.05274C5.99866 7.88381 7.68159 8.05274 8.69135 9.23522C9.70112 10.4177 9.44868 12.107 9.11209 13.4584C8.7755 14.8098 6.92427 16.668 6.92427 19.5397C6.92427 22.4114 7.17671 25.0298 8.60721 27.1413C10.0377 29.2529 11.6365 30.4354 13.3194 30.4354H27.0353C27.3439 30.3791 27.961 30.1482 27.961 29.6752C27.961 29.084 27.6244 28.7461 26.6988 28.7461C25.9583 28.7461 23.2487 29.1966 21.9865 29.4218C22.9122 28.7461 24.8644 27.2934 25.2683 26.888C25.7731 26.3812 26.6146 25.5366 26.867 25.0298C27.1195 24.523 27.2635 24.0317 26.927 23.2716C27.1751 23.1857 27.3096 23.1342 27.516 23.0182C27.6001 23.1589 27.7927 23.6446 27.7927 24.1851C27.7927 24.8609 27.4561 25.4521 26.867 26.2123C26.3958 26.8204 24.9878 27.9297 24.3426 28.4083C25.0439 28.2394 26.6314 27.9522 27.3719 28.1549C28.2975 28.4083 28.55 28.9151 28.6341 29.5908C28.7183 30.2665 27.961 30.8577 27.2878 31.0266C27.0634 31.0548 26.5473 31.1111 26.278 31.1111H13.3194C12.5621 31.1111 11.0138 30.8915 9.19623 28.9995C8.55111 28.352 7.14305 26.4825 6.67183 24.1851C6.08281 21.3134 6.2511 19.3708 6.41939 18.2727C6.58769 17.1747 7.42915 15.1476 7.93403 14.3875C8.43891 13.6273 8.60721 12.3603 8.69135 11.6846C8.7755 11.0089 8.85965 10.3332 7.93403 9.4886C7.00842 8.64398 6.2511 8.64398 5.91451 8.64398C5.57793 8.64398 4.82061 8.64398 4.23158 9.15075C3.64255 9.65753 3.30596 10.4177 3.22182 10.84C3.13767 11.2623 3.13767 11.5157 3.22182 12.0225C3.28913 12.4279 3.64255 13.3176 3.81084 13.7117Z" />
                </svg>
                <span>Hibernation IT</span>
              </div>
              <div className={styles.mainSectionContentSubTitle}>
                <span>내가 만들고 싶은거 만드는 개발 블로그</span>
              </div>
              <div className={styles.mainSectionContentChips}>
                {(Object.keys(tags) as Array<keyof typeof tags>).map(
                  (tag, key) => (
                    <a href={tags[tag]} key={key.toString()}>
                      {tag}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
          <div className={styles.mainSectionNav}>
            <div className={styles.mainSectionNavItems}>
              {navigations.map((nav, key) => (
                <a href={nav.url} key={key.toString()}>
                  {nav.icon}
                  <span>{nav.name}</span>
                </a>
              ))}
            </div>
            <DownButton />
          </div>
        </section>
        <section className={styles.secondSection}>
          <div>
            <h2 className={styles.secondSectionTitle}>What I can do</h2>
            <p className={styles.secondSectionSubTitle}>
              지금까지 실무에서 사용했거나 취미로 개발 시 사용해본 프레임워크
              또는 언어입니다.
            </p>
            <Accodion data={data} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

async function getData() {
  console.time("home");
  const [frontend, backend] = await Promise.all([
    getDatabase(process.env.NOTION_WHAT_I_CAN_DO_DATABASE, {
      filter: {
        property: "태그",
        select: {
          equals: "frontend",
        },
      },
      sorts: [
        {
          property: "이름",
          direction: "ascending",
        },
      ],
    }),
    getDatabase(process.env.NOTION_WHAT_I_CAN_DO_DATABASE, {
      filter: {
        property: "태그",
        select: {
          equals: "backend",
        },
      },
      sorts: [
        {
          property: "이름",
          direction: "ascending",
        },
      ],
    }),
  ]);
  console.timeEnd("home");

  return {
    frontend,
    backend,
  };
}
