import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StateGlobal } from "../context/StateGlobal";
function Home() {
  const navigate = useNavigate();
  const listDogs = () => {
    setPrincipal(true);
    navigate("/list-dogs");
  };
  const { setPrincipal } = useContext(StateGlobal);
  const login = () => {
    setPrincipal(true);
    navigate("/login");
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-[700px] flex flex-col justify-center items-center gap-6">
        <div
          className="bg-blue-500 flex flex-col items-center justify-center m-2 p-5 rounded-md cursor-pointer shadow-[15px_35px_60px_-15px_rgba(0,0,0,0.5)] active:bg-blue-900"
          onClick={listDogs}
        >
          <div className="h-44">
            <img className="w-full h-full" src="list.png" alt="" />
          </div>
          <button className="font-bold">LISTAR PERROS</button>
        </div>
        <div
          className="bg-blue-500 flex flex-col items-center justify-center m-2 p-5 rounded-md cursor-pointer shadow-[15px_35px_60px_-15px_rgba(0,0,0,0.5)] active:bg-blue-900"
          onClick={login}
        >
          <div className="h-44">
            <img className="w-full h-full" src="b-login.png" alt="" />
          </div>
          <button className="font-bold">INICIAR SESION</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
