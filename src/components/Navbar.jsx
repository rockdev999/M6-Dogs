import { useNavigate } from "react-router-dom";
import { StateGlobal } from "../context/StateGlobal";
import { useContext } from "react";
function Navbar() {
  const navigate = useNavigate();
  const { principal, setPrincipal } = useContext(StateGlobal);

  return (
    <div className="w-full h-[70px] flex justify-center items-center bg-gray-500">
      {principal ? (
        <button
          className="absolute flex justify-start px-2 w-full items-center"
          onClick={() => navigate(-1)}
        >
          <img className="w-12 h-12" src="back.png" alt="" />
        </button>
      ) : (
        <></>
      )}
      <h1 className="text-2xl font-bold">CONSUMIENDO API DOGS</h1>
    </div>
  );
}

export default Navbar;
