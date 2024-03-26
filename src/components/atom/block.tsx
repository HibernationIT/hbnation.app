import {
  Bookmark as BookmarkType,
  BulletedListItem as BulletedListItemType,
  Callout as CalloutType,
  Code as CodeType,
  Column as ColumnType,
  ColumnList as ColumnListType,
  Paragraph as ParagraphType,
  Block as Type,
} from "@/type/notion";
import Bookmark from "./bookmark";
import Paragraph from "./paragraph";
import BulletedListItem from "./bulletedListItem";
import Callout from "./callout";
import Code from "./code";
import ColumnList from "./columnList";
import Column from "./column";
import Divider from "./divider";

export default function Block({ value, idx }: { value: Type; idx?: number }) {
  if (value.type === "bookmark")
    return <Bookmark value={value as BookmarkType} />;
  if (value.type === "paragraph")
    return <Paragraph value={value as ParagraphType} />;
  if (value.type === "bulleted_list_item")
    return <BulletedListItem value={value as BulletedListItemType} idx={idx} />;
  if (value.type === "callout") return <Callout value={value as CalloutType} />;
  if (value.type === "code") return <Code value={value as CodeType} />;
  if (value.type === "column_list")
    return <ColumnList value={value as ColumnListType} />;
  if (value.type === "column") return <Column value={value as ColumnType} />;
  if (value.type === "divider") return <Divider />;
}
