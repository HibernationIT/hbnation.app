import { TableRow as TableRowType, Table as Type } from "@/type/notion";
import TableRow from "./tableRow";

export default function Table({ value }: { value: Type }) {
  return (
    <div className="n2c_table">
      <div>
        <div>
          <table>
            <tbody>
              {value.table.children.map((v: TableRowType, key: number) => (
                <TableRow
                  key={key.toString()}
                  value={v}
                  colHeader={value.table.has_column_header && key === 0}
                  rowHeader={value.table.has_row_header}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
