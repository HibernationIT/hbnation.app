import { Quote as QuoteType } from "@/type/notion";
import RichText from "./richText";

export default function Quote({ value }: { value: QuoteType }) {
  return (
    <div className={`n2c_quote ${"n2c_" + value.quote.color}`}>
      <blockquote>
        <div>
          <RichText value={value.quote.rich_text} />
        </div>
      </blockquote>
    </div>
  );
}
