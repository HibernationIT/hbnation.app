import { Block as BlockType, BulletedListItem as Type } from "@/type/notion";
import RichText from "./richText";
import Block from "./block";

export default function BulletedListItem({
  value,
  idx,
}: {
  value: Type;
  idx?: number;
}) {
  const index = idx || 0;
  let className = "n2c_bulleted_list_item_";
  if (index % 3 === 0) className += "disc";
  if (index % 3 === 1) className += "circle";
  if (index % 3 === 2) className += "square";

  return (
    <div className="n2c_bulleted_list_item">
      <ul>
        <li className={className}>
          <div>
            <RichText value={value.bulleted_list_item.rich_text} />
          </div>
          {value.has_children && (
            <div className="n2c_bulleted_list_item_children">
              {value.bulleted_list_item.children?.map(
                (v: BlockType, key: number) => (
                  <Block key={key.toString()} value={v} idx={index + 1} />
                )
              )}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
