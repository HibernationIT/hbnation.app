import { ToDo as Type } from "@/type/notion";
import RichText from "./richText";
import Blocks from "./blocks";

export default function ToDo({ value }: { value: Type }) {
  return (
    <div
      className={`n2c_todo${value.to_do.checked ? " n2c_todo_checked" : ""} ${
        "n2c_" + value.to_do.color
      }`}
    >
      <div>
        <div>
          <div>
            {value.to_do.checked ? (
              <svg viewBox="0 0 14 14">
                <polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon>
              </svg>
            ) : (
              <svg viewBox="0 0 16 16">
                <path d="M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z"></path>
              </svg>
            )}
          </div>
        </div>
        <div>
          <div>
            <RichText value={value.to_do.rich_text} />
          </div>
          {value.has_children && <Blocks value={value.to_do.children} />}
        </div>
      </div>
    </div>
  );
}
