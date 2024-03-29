import { BulletedListItem as Type } from "@/type/notion";
import RichText from "./richText";
import Blocks from "./blocks";

export default function BulletedListItem({
  value,
  idx,
}: {
  value: Type;
  idx?: string;
}) {
  let index: number = 0;
  if (idx === undefined) index = 0;
  else if (idx.startsWith("bullted")) index = Number(idx.split("-")[1]);

  let className = "n2c_bulleted_list_item_";
  if (index % 3 === 0) className += "disc";
  if (index % 3 === 1) className += "circle";
  if (index % 3 === 2) className += "square";

  return (
    <div
      className={`n2c_bulleted_list_item ${
        "n2c_" + value.bulleted_list_item.color
      }`}
    >
      <ul>
        <li className={className}>
          <div>
            <RichText value={value.bulleted_list_item.rich_text} />
          </div>
          {value.has_children && (
            <div className="n2c_bulleted_list_item_children">
              <Blocks
                value={value.bulleted_list_item.children}
                idx={`bullted-${index + 1}`}
              />
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
