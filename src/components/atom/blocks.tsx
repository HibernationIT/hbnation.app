import { Block as Type } from "@/type/notion";
import Block from "./block";

export default function Blocks({
  value,
  idx,
}: {
  value: Type[];
  idx?: string;
}) {
  let number = 1;

  return value.map((v: Type, key: number) => {
    if (key !== 0 && value[key - 1].type === v.type) number++;
    else number = 1;

    return <Block key={key.toString()} value={v} idx={idx} number={number} />;
  });
}
