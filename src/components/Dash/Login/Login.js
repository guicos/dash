import styled from "./Login.module.css";
import input from "../../UI/Input/Input.module.css";
import button from "../../UI/Button/Button.module.css";
import { useNavigate  } from "react-router-dom";
import axios from "axios";
import React from "react";

export default function Login() {
  const [data, setData] = React.useState({});
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await axios.post(`http://systembrutamarketing.com.br:21160/auth`, data);
    console.log(response)
    if(response.status === 201){
        localStorage.setItem('token', `Bearer ${response.data.access_token}`)
        return navigate(`/home`)
    }
  };

  return (
    <main className={styled.main}>
      <div className={styled.squad}>
        <img src="/logo.svg" alt="bruta" className={styled.logo} />
        <div className={styled.form}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={data.email}
            className={input.input}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={data.password}
            className={input.input}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
          <button
            className={button.button}
            style={{ padding: "12px" }}
            onClick={() => handleLogin()}
          >
            Entrar
          </button>
        </div>
      </div>
    </main>
  );
}
