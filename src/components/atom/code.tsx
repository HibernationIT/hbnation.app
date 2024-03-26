import { Code as Type } from "@/type/notion";
import hljs from "highlight.js";

export default function Code({ value }: { value: Type }) {
  const v = hljs.highlight(
    value.code.rich_text.map((t) => t.plain_text).join(""),
    {
      language: value.code.language,
    }
  );

  return (
    <div className="n2c_code">
      <div className="n2c_code_content">
        <pre className="n2c_code_pre">
          <code
            className="n2c_code_code"
            dangerouslySetInnerHTML={{ __html: v.value }}
          />
        </pre>
      </div>
    </div>
  );
}
