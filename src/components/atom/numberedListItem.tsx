import { Block as BlockType, NumberedListItem as Type } from "@/type/notion";
import RichText from "./richText";
import Blocks from "./blocks";

export default function NumberedListItem({
  value,
  idx,
  number,
}: {
  value: Type;
  idx?: string;
  number?: number;
}) {
  let index: number = 0;
  if (idx === undefined) index = 0;
  else if (idx.startsWith("numbered")) index = Number(idx.split("-")[1]);

  let className = "n2c_numbered_list_item_";
  if (index % 3 === 0) className += "decimal";
  if (index % 3 === 1) className += "lower-alpha";
  if (index % 3 === 2) className += "lower-roman";

  return (
    <div
      className={`n2c_numbered_list_item ${
        "n2c_" + value.numbered_list_item.color
      }`}
    >
      <ol start={number}>
        <li className={className}>
          <div>
            <RichText value={value.numbered_list_item.rich_text} />
          </div>
          {value.has_children && (
            <div className="n2c_numbered_list_item_children">
              <Blocks
                value={value.numbered_list_item.children}
                idx={`numbered-${index + 1}`}
              />
            </div>
          )}
        </li>
      </ol>
    </div>
  );
}
