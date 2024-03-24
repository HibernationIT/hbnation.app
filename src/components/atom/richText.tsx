import { RichText as Type } from "@/type/notion";

export default function RichText({ value }: { value: Type[] }) {
  return value.map((v: Type, idx: number) => {
    let className = "n2c_richText";
    if (v.annotations.bold) className += " n2c_bold";
    if (v.annotations.italic) className += " n2c_italic";
    if (v.annotations.strikethrough) className += " n2c_strikethrough";
    if (v.annotations.underline) className += " n2c_underline";
    if (v.annotations.code) className += " n2c_code";
    if ((idx === 0 || !value[idx - 1].annotations.code) && v.annotations.code)
      className += " n2c_code_start";
    if (
      (idx === value.length - 1 || !value[idx + 1].annotations.code) &&
      v.annotations.code
    )
      className += " n2c_code_end";
    className += " n2c_" + v.annotations.color;

    if (v.annotations.code) {
      return <code className={className}>{v.plain_text}</code>;
    }
    if (v.href != null) {
      return (
        <a href={v.href} className={className}>
          {v.plain_text}
        </a>
      );
    }
    return <span className={className}>{v.plain_text}</span>;
  });
}
