import React from "react";
import styled from './Filters.module.css';
import button from "../Button/Button.module.css";
import input from "../Input/Input.module.css";
import { useNavigate  } from "react-router-dom";


export default function Filters() {
    const [ config, setConfig ] =React.useState('');
    const [ list, setList ] = React.useState([]);
    const [value, setValue ] = React.useState({});
    const navigate = useNavigate();

  const getConfig = [
    {
      id: 1,
      name: "decisionMakers",
      configs: [
        {
          id: 1,
          configKey: 1,
          name: "email"
        },
        {
          id: 1,
          configKey: 1,
          name: "cnpj"
        },
        {
          id: 1,
          configKey: 1,
          name: "departament"
        },
        {
          id: 1,
          configKey: 1,
          name: "office"
        },
      ]
    },
    {
      id: 2,
      name: "company",
      configs: [
        {
          id: 2,
          configKey: 2,
          name: "document"
        },
        {
          id: 2,
          configKey: 2,
          name: "companyName"
        },
        {
          id: 2,
          configKey: 2,
          name: "cnae"
        },
        {
          id: 2,
          configKey: 2,
          name: "sector"
        },
      ]
    },
    {
      id: 3,
      name: "departament",
      configs: [
        {
          id: 3,
          configKey: 3,
          name: "name"
        },
      ]
    },
    {
      id: 4,
      name: "sector",
      configs: [
        {
          id: 4,
          configKey: 4,
          name: "name"
        },
      ]
    },
    {
      id: 5,
      name: "cnae",
      configs: [
        {
          id: 5,
          configKey: 5,
          name: "name"
        },
        {
          id: 5,
          configKey: 5,
          name: "code"
        },
      ]
    },
  ];

  function handleSetConfig(e){
    setConfig(e.target.value)
    
  }

  const handleValue = (e) => {
    setValue()
  }

  React.useEffect(() => {
    if(config){
      return navigate(`/${config}`)
    }
  }, [config])

  React.useEffect(() => {
    const value = getConfig.filter(element => element.name === config)
    setList(value[0]);
  }, [config])

  const Inputs = (props) => {
    return (
        <div className={styled.form}>
          {
                props.list?.configs?.map(element => (
                  <input
                    type="text"
                    name={element.name}
                    placeholder={element.name}
                    className={input.input}
                    value={value[element.name]}
                    onChange={(e) => setValue({...value, [e.target.name]: e.target.value})}
                  />
                ))
            }
          {list ? 
          <>
            <button className={button.button} >Enviar</button>
            <select name="cars" id="cars" onChange={(e) => handleSetConfig(e)} className={styled.select}>
                <option defaultValue >Exportar</option>
                <option value="csv">CSV</option>
                <option value="xlsx">XLSX</option>
            </select>
          </> : 
          ''}
        </div>
    )
  }

  return (
    <section>
        <div className={styled.div}>
            <Inputs list = {list} />
            <select name="cars" id="cars" onChange={(e) => handleSetConfig(e)} className={styled.select}>
                <option defaultValue >Escolha um filtro </option>
                <option value="decisionMakers">Decisores</option>
                <option value="company">Empresa</option>
                <option value="departament">Departamento</option>
                <option value="sector">Setor</option>
                <option value="cnae">Cnae</option>
            </select>
        </div>
    </section>
  );
}
