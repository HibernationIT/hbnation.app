import {
  Bookmark as BookmarkType,
  BulletedListItem as BulletedListItemType,
  Callout as CalloutType,
  Code as CodeType,
  Column as ColumnType,
  ColumnList as ColumnListType,
  Paragraph as ParagraphType,
  Block as Type,
  Equation as EquationType,
  File as FileType,
  Headings as HeadingsType,
  Image as ImageType,
  NumberedListItem as NumberedListItemType,
  Quote as QuoteType,
  Table as TableType,
  ToDo as ToDoType,
  Toggle as ToggleType,
  Video as VideoType,
} from "@/type/notion";
import Bookmark from "./bookmark";
import Paragraph from "./paragraph";
import BulletedListItem from "./bulletedListItem";
import Callout from "./callout";
import Code from "./code";
import ColumnList from "./columnList";
import Column from "./column";
import Divider from "./divider";
import Equation from "./equation";
import File from "./file";
import Heading from "./heading";
import Image from "./image";
import NumberedListItem from "./numberedListItem";
import Quote from "./quote";
import Table from "./table";
import ToDo from "./todo";
import Toggle from "./toggle";
import Video from "./video";

export default function Block({
  value,
  idx,
  number,
}: {
  value: Type;
  idx?: string;
  number?: number;
}) {
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
  if (value.type === "equation")
    return <Equation value={value as EquationType} />;
  if (value.type === "file") return <File value={value as FileType} />;
  if (value.type.startsWith("heading"))
    return <Heading value={value as HeadingsType} />;
  if (value.type === "image") return <Image value={value as ImageType} />;
  if (value.type === "numbered_list_item")
    return (
      <NumberedListItem
        value={value as NumberedListItemType}
        idx={idx}
        number={number}
      />
    );
  if (value.type === "quote") return <Quote value={value as QuoteType} />;
  if (value.type === "table") return <Table value={value as TableType} />;
  if (value.type === "to_do") return <ToDo value={value as ToDoType} />;
  if (value.type === "toggle") return <Toggle value={value as ToggleType} />;
  if (value.type === "video") return <Video value={value as VideoType} />;
}
