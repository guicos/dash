import React from 'react';
import styled from './Menu.module.css';
import { Link } from 'react-router-dom';
import Modal from '../../UI/Modal/Modal';
import AuthContext from '../../UI/Contexts/MyContext';
import button from '../../UI/Button/Button.module.css';
import axios from 'axios';

export default function Menu(){
    const [mounted, setMounted] = React.useState(false);
    const [ config, setConfig ] = React.useState('');
    const [cardFile, setCardFile] = React.useState();

    function handleSetConfig(e){
        setConfig(e.target.value)
    }

    function handleSaveArchive(){
        if(mounted){
            setMounted(false)
        }
        const data = new FormData();
        data.append("archive", cardFile);
        axios.post(`http://systembrutamarketing.com.br:21160/import/${config}`, data, { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTc0NDQyMTN9.ae8_sG_jThL80QeBk5iNYgcqvK2rpz6LAmjISEqC0aY"}} )
    }

    const handleUploadFile = (e) => setCardFile(e.target.files[0]);
      
    return (
      <AuthContext.Provider
        value={{
          mounted,
          setMounted,
        }}
      >
        <header className={styled.header}>
        <aside className={styled.aside}>
          <img src="/logo.svg" alt="bruta" className={styled.logo} />
          <nav className={styled.nav}>
            <ul className={styled.ul}>
              <li className={styled.li}>
                <Link to="/home" className={styled.link}>
                  Inicio
                </Link>
                <img
                  src="/icons/home.svg"
                  alt="Inicio"
                  className={styled.icon}
                />
              </li>
              <li className={styled.li}>
                <Link to="/company" className={styled.link}>
                  Dados
                </Link>
                <img
                  src="/icons/data.svg"
                  alt="dados"
                  className={styled.icon}
                />
              </li>
              <li className={styled.li}>
                <Link to="" className={styled.link} onClick={() => setMounted(true)}>
                  Adicionar
                </Link>
                <img
                  src="/icons/upload.svg"
                  alt="cadastrar"
                  className={styled.icon}
                />
              </li>
              <li className={styled.li}>
                <Link to="/" className={styled.link} onClick={() => localStorage.removeItem('token')}>
                  Sair
                </Link>
                <img src="/icons/exit.svg" alt="sair" className={styled.icon} />
              </li>
            </ul>
          </nav>
        </aside>
      </header>
      <Modal children={
        <div className={styled.div}>
          <select name="cars" id="cars" onChange={(e) => handleSetConfig(e)} className={styled.select} style={{ padding: '10px'}}>
                <option defaultValue >Escolha a tabela para upload</option>
                <option value="decisionMakers">Decisores</option>
                <option value="company">Empresa</option>
                <option value="departament">Departamento</option>
                <option value="sector">Setor</option>
                <option value="cnae">Cnae</option>
            </select>
          <label htmlFor='file' style={{ textAlign: 'center', border: '1px dashed black', padding: '5px'}}>Escolha um arquivo <br/> clicando aqui!</label>
          <input type="file" name="file" id="file" style={{ display: 'none'}} accept="application/csv" onChange={(e) => handleUploadFile(e)}/>
          <button className={button.button} style={{ padding: '10px'}} onClick={() => handleSaveArchive()}>Enviar</button>
        </div>
      } />
    </AuthContext.Provider>
  );
}