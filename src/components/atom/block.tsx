import {
  Bookmark as BookmarkType,
  BulletedListItem as BulletedListItemType,
  Callout as CalloutType,
  Paragraph as ParagraphType,
  Block as Type,
} from "@/type/notion";
import Bookmark from "./bookmark";
import Paragraph from "./paragraph";
import BulletedListItem from "./bulletedListItem";
import Callout from "./callout";

export default function Block({ value, idx }: { value: Type; idx?: number }) {
  if (value.type === "bookmark")
    return <Bookmark value={value as BookmarkType} />;
  if (value.type === "paragraph")
    return <Paragraph value={value as ParagraphType} />;
  if (value.type === "bulleted_list_item")
    return <BulletedListItem value={value as BulletedListItemType} idx={idx} />;
  if (value.type === "callout") return <Callout value={value as CalloutType} />;
}
