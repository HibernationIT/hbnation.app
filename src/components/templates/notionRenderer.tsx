import { Block } from "@/type/notion";
import Blocks from "../atom/blocks";
import "./notion.css";

export default function NotionRenderer({ value }: { value: Block[] }) {
  return (
    <div className="n2c">
      <Blocks value={value} />
    </div>
  );
}
