import { Routes, Route, HashRouter } from "react-router-dom";
import TemplatePage from "./components/UI/TemplatePage/TemplatePage";
import ListCompany from "./components/Dash/ListCompany/ListCompany";
import Count from "./components/Dash/Count/Count";
import ListCnae from "./components/Dash/ListCnae/ListCnae";
import ListDecision from "./components/Dash/ListDecision/ListDecision";
import ListOffice from "./components/Dash/ListOffice/ListOffice";
import ListSector from "./components/Dash/ListSector/ListSector";
import ListDepartament from "./components/Dash/ListDepartament/ListDepartament";
import Cnae from "./connections/cnae";
import Company from "./connections/company";
import Decision from "./connections/decision";
import Departament from "./connections/departament";
import Sector from "./connections/sector";
import Office from "./connections/office";
import Filters from "./components/UI/Filters/Filters";
import Login from "./components/Dash/Login/Login";


const cnae = localStorage.getItem('token') ? await Cnae() : '';
const company = localStorage.getItem('token') ? await Company() : '';
const decision =  localStorage.getItem('token') ? await Decision() : '';
const departament = localStorage.getItem('token') ? await Departament() : '';
const sector =  localStorage.getItem('token') ?await Sector() : '';
const office = localStorage.getItem('token') ?  await Office() : '';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/home" element={<TemplatePage child={<Count />} />} />
        <Route
          path="/company"
          element={
            <TemplatePage
              filter={<Filters />}
              child={<ListCompany products={company} />}
            />
          }
        />
        <Route
          path="/cnae"
          element={
            <TemplatePage
              filter={<Filters />}
              child={<ListCnae products={cnae} />}
            />
          }
        />
        <Route
          path="/decisionMakers"
          element={
            <TemplatePage
              filter={<Filters />}
              child={<ListDecision products={decision} />}
            />
          }
        />
        <Route
          path="/departament"
          element={
            <TemplatePage
              filter={<Filters />}
              child={<ListDepartament products={departament} />}
            />
          }
        />
        <Route
          path="/sector"
          element={
            <TemplatePage
              filter={<Filters />}
              child={<ListSector products={sector} />}
            />
          }
        />
        <Route
          path="/office"
          element={
            <TemplatePage
              filter={<Filters />}
              child={<ListOffice products={office} />}
            />
          }
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
