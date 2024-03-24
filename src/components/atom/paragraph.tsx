import { Paragraph as Type } from "@/type/notion";
import RichText from "./richText";

export default function Paragraph({ value }: { value: Type }) {
  return (
    <div className="n2c_paragraph">
      <div>
        <RichText value={value.paragraph.rich_text} />
      </div>
    </div>
  );
}
