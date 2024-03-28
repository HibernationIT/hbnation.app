import { Quote as QuoteType } from "@/type/notion";
import RichText from "./richText";

export default function Quote({ value }: { value: QuoteType }) {
  return (
    <div className="n2c_quote">
      <blockquote>
        <div>
          <RichText value={value.quote.rich_text} />
        </div>
      </blockquote>
    </div>
  );
}
