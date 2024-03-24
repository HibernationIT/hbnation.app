import { Bookmark as Type } from "@/type/notion";
import parse from "node-html-parser";
import RichText from "./richText";

async function getData(url: string) {
  const data = await fetch(url).then((res) => res.text());
  const doc = parse(data);

  const title =
    doc.querySelector('meta[name="title"]')?.getAttribute("content") ||
    doc.querySelector('meta[property="og:title"]')?.getAttribute("content") ||
    doc.querySelector('meta[name="twitter:title"]')?.getAttribute("content") ||
    doc.querySelector("title")?.text;
  const description =
    doc.querySelector('meta[name="description"]')?.getAttribute("content") ||
    doc
      .querySelector('meta[property="og:description"]')
      ?.getAttribute("content") ||
    doc
      .querySelector('meta[name="twitter:description"]')
      ?.getAttribute("content");
  const image =
    doc.querySelector('meta[property="og:image"]')?.getAttribute("content") ||
    doc.querySelector('meta[name="twitter:url"]')?.getAttribute("content");
  const iconUrl =
    doc.querySelector('link[type="image/x-icon"]')?.getAttribute("href") ||
    doc.querySelector('link[rel="icon"]')?.getAttribute("href");
  const icon =
    iconUrl !== null && iconUrl !== undefined && iconUrl.startsWith("/")
      ? url + iconUrl
      : iconUrl;

  return {
    title,
    description,
    image,
    icon,
  };
}

export default async function Bookmark({ value }: { value: Type }) {
  const { title, description, image, icon } = await getData(value.bookmark.url);

  return (
    <div className="n2c_bookmark">
      <a href={value.bookmark.url} className="n2c_bookmark_" target="_blank">
        <div className="n2c_bookmark_content">
          <p>{title}</p>
          <p>{description}</p>
          <div className="n2c_bookmark_link">
            <img src={icon} />
            <span>{value.bookmark.url}</span>
          </div>
        </div>
        <div className="n2c_bookmark_image">
          <div>
            <div>
              <img src={image} />
            </div>
          </div>
        </div>
      </a>
      {value.bookmark.caption.length !== 0 && (
        <div className="n2c_bookmark_caption">
          <RichText value={value.bookmark.caption} />
        </div>
      )}
    </div>
  );
}
