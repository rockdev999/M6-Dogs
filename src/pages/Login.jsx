import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateGlobal } from "../context/StateGlobal";
function Login() {
  const navigate = useNavigate();
  const { authentication, setAuthentication } = useContext(StateGlobal);
  const handleLogin = () => {
    setAuthentication(true);
    navigate("/auth-dogs");
  };
  return (
    <div className="pt-20 w-full h-[80vh] sm:h-[90vh] sm:pt-0 flex justify-center items-center">
      <form className="h-full w-full flex flex-col justify-center items-center">
        <div className="w-[40%] flex flex-col items-center py-4 sm:gap-3">
          <div className="sm:w-[60%] md:w-[40%] lg:w-[30%]">
            <img src="login.png" alt="" />
          </div>
          <h1 className="font-bold text-3xl">LOGIN</h1>
        </div>
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="flex w-full justify-center sm:w-[60%] md:w-[40%] lg:w-[30%]">
            <input
              className="w-[80%] p-4 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
              type="text"
              placeholder="Usuario"
            />
          </div>
          <div className="flex w-full justify-center sm:w-[60%] md:w-[40%] lg:w-[30%]">
            <input
              className="w-[80%] p-4 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
              type="password"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <button
          className="rounded-md text-lg bg-amber-900 p-4 text-lg font-bold text-white mt-8 active:bg-amber-700"
          onClick={() => handleLogin()}
        >
          INGRESAR
        </button>
      </form>
    </div>
  );
}

export default Login;
