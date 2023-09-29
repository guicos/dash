import ProductTable from "../../UI/Table/Table";
import table from "../../UI/Table/Table.module.css";
import useSortableData from "../../UI/SortTable/SortTable";

export default function ListDepartament(props) {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return(
        <ProductTable title = {
            <>
                <th className={table.th}>
                    <button
                    type="button"
                    onClick={() => requestSort('nome')}
                    className={getClassNamesFor('nome')}
                    >
                    Nome
                    </button>
                </th>
            </>
            } 
            result = {
                items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                    </tr>
                  ))
            }
        />
    )
}