import ProductTable from "../../UI/Table/Table";
import table from "../../UI/Table/Table.module.css";
import {Link} from 'react-router-dom';
import useSortableData from "../../UI/SortTable/SortTable";

export default function ListDecision(props) {
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
                <th className={table.th}>
                    <button
                    type="button"
                    onClick={() => requestSort('email')}
                    className={getClassNamesFor('email')}
                    >
                    Email
                    </button>
                </th>
                <th className={table.th}>
                    <button
                    type="button"
                    onClick={() => requestSort('companyName')}
                    className={getClassNamesFor('companyName')}
                    >
                    Nome Empresa
                    </button>
                </th>
                <th className={table.th}>
                    <button
                    type="button"
                    onClick={() => requestSort('document')}
                    className={getClassNamesFor('document')}
                    >
                    CNPJ
                    </button>
                </th>
                <th className={table.th}>
                    <button
                    type="button"
                    onClick={() => requestSort('telephone')}
                    className={getClassNamesFor('telephone')}
                    >
                    Telefone
                    </button>
                </th>
                <th className={table.th}>
                    <button
                    type="button"
                    onClick={() => requestSort('office')}
                    className={getClassNamesFor('office')}
                    >
                    Cargo
                    </button>
                </th>
                <th className={table.th}>
                    <button
                    type="button"
                    onClick={() => requestSort('departament')}
                    className={getClassNamesFor('departament')}
                    >
                    Departamento
                    </button>
                </th>
                <th className={table.th}>
                    <button
                    type="button"
                    onClick={() => requestSort('linkedin')}
                    className={getClassNamesFor('linkedin')}
                    >
                    Linkedin
                    </button>
                </th>
            </>
            } 
            result = {
                items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item?.company?.companyName || "Não Cadastrado"}</td>
                      <td>{item?.company?.document || "Não Cadastrado"}</td>
                      <td>({item.areaCode}) {item.telephone}</td>
                      <td>{item?.office?.name || "Não Cadastrado"}</td>
                      <td>{item?.department?.name || "Não Cadastrado"}</td>
                      <td><Link style={{ color: "white", textDecoration: "none"}} to={`${item.linkedin}`}><img src="/icons/navegation.svg" alt="navegacao"/></Link></td>
                    </tr>
                  ))
            }
        />
    )
}