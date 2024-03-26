import { Block as BlockType, ColumnList as Type } from "@/type/notion";
import Column from "./column";
import Block from "./block";

export default function ColumnList({ value }: { value: Type }) {
  return (
    <div className="n2c_column_list">
      <div>
        {value.column_list.children.map((child: BlockType, key: number) => (
          <div key={key.toString()} className="n2c_column_list_child">
            <Block value={child} />
          </div>
        ))}
      </div>
    </div>
  );
}
