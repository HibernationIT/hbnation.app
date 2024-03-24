import { Emoji, File, Callout as Type } from "@/type/notion";
import RichText from "./richText";

export default function Callout({ value }: { value: Type }) {
  return (
    <div className="n2c_callout">
      <div className={"n2c_" + value.callout.color}>
        <div>
          {value.callout.icon.type === "emoji" ? (
            <Emoji value={value.callout.icon} />
          ) : (
            <File value={value.callout.icon} />
          )}
        </div>
        <div>
          <div>
            <RichText value={value.callout.rich_text} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Emoji({ value }: { value: Emoji }) {
  return (
    <div className="n2c_emoji">
      <span>{value.emoji}</span>
    </div>
  );
}
function File({ value }: { value: File }) {
  return (
    <div className="n2c_file">
      <img src={value.external?.url || value.file?.url} />
    </div>
  );
}
