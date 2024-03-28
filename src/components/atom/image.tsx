import { Image as Type } from "@/type/notion";

export default function Image({ value }: { value: Type }) {
  return (
    <div className="n2c_image">
      <img
        src={
          value.image.type === "file"
            ? value.image.file?.url
            : value.image.external?.url
        }
      />
    </div>
  );
}
