import { useState, createContext } from "react";

export const StateGlobal = createContext();

export function StateGlobalProvider(props) {
  const [authentication, setAuthentication] = useState(false);
  const [principal, setPrincipal] = useState(false);
  const [dogs, setDogs] = useState([]);
  const url = "https://sample-dogs-api.netlify.app/api/v1/";

  const dataShare = {
    authentication,
    setAuthentication,
    dogs,
    setDogs,
    url,
    principal,
    setPrincipal,
  };
  return (
    <StateGlobal.Provider value={dataShare}>
      {props.children}
    </StateGlobal.Provider>
  );
}
