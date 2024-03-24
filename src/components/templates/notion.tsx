import { Block as Type } from "@/type/notion";
import "./notion.css";
import Block from "../atom/block";

export default function Notion({ value }: { value: Type[] }) {
  return (
    <div className="n2c">
      {value.map((v: Type, key: number) => (
        <Block key={key.toString()} value={v} />
      ))}
    </div>
  );
}
