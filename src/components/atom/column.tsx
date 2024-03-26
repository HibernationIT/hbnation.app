import { Block as BlockType, Column as Type } from "@/type/notion";
import Block from "./block";

export default function Column({ value }: { value: Type }) {
  return (
    <div className="n2c_column">
      {value.column.children.map((child: BlockType, key: number) => (
        <Block key={key.toString()} value={child} />
      ))}
    </div>
  );
}
