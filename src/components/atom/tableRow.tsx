import { RichText as RichTextType, TableRow as Type } from "@/type/notion";
import RichText from "./richText";

export default function TableRow({
  value,
  colHeader,
  rowHeader,
}: {
  value: Type;
  colHeader: boolean;
  rowHeader: boolean;
}) {
  return (
    <tr className="n2c_table_row">
      {value.table_row.cells.map((v: RichTextType[], key: number) => {
        if (colHeader || (rowHeader && key === 0)) {
          return (
            <th key={key.toString()}>
              <div>
                <RichText value={v} />
              </div>
            </th>
          );
        }

        return (
          <td key={key.toString()}>
            <div>
              <RichText value={v} />
            </div>
          </td>
        );
      })}
    </tr>
  );
}
