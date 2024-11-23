import axios from "axios";
import { StateGlobal } from "../context/StateGlobal";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function AuthDogs() {
  const { url, dogs, setDogs, authentication, setAuthentication } =
    useContext(StateGlobal);
  const [state, setState] = useState(true);
  const [idM, setIdM] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const [raza, setRaza] = useState("");
  const [juguete, setJuguete] = useState("");
  const [perso, setPerso] = useState("");
  const [desc, setDesc] = useState("");
  const [nombreM, setNombreM] = useState("");
  const [edadM, setEdadM] = useState(0);
  const [colorM, setColorM] = useState("");
  const [imageM, setImageM] = useState("");
  const [razaM, setRazaM] = useState("");
  const [jugueteM, setJugueteM] = useState("");
  const [persoM, setPersoM] = useState("");
  const [descM, setDescM] = useState("");
  const [create, setCreate] = useState(false);
  const [modify, setModify] = useState(false);
  const [modifyDog, setModifyDog] = useState({
    age: edadM,
    bio: descM,
    breed: razaM,
    color: colorM,
    favoriteToy: jugueteM,
    image: imageM,
    name: nombreM,
    personality: persoM,
  });
  const navigate = useNavigate();
  const obtenerDogs = () => {
    axios
      .get(`${url}dogs`)
      .then((result) => {
        setDogs(result.data);
        // console.log(dogs);
        setState(false);
      })
      .catch((error) => console.log(error));
  };
  // con
  useEffect(() => {
    if (!authentication) navigate("/");
    else obtenerDogs();
  }, [authentication]);
  const handleCreate = () => {
    if (
      nombre !== "" ||
      edad !== 0 ||
      color !== "" ||
      raza !== "" ||
      juguete !== "" ||
      perso !== "" ||
      desc !== ""
    ) {
      axios
        .post(`${url}dogs`, {
          name: nombre,
          age: edad,
          color: color,
          breed: raza,
          favoriteToy: juguete,
          personality: perso,
          bio: desc,
          image: image,
        })
        .then((result) => {
          obtenerDogs();
          alert("Creado Salisfactoriamente...");
          // console.log(dogs);
          setCreate(false);
        })
        .catch((error) => console.log(error));
    } else {
      alert("llene todos los campos...!!!");
    }
  };
  const handleDelete = (id) => {
    axios
      .delete(`${url}dogs/${id}`)
      .then((result) => {
        obtenerDogs();
        // console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getDog = (id) => {
    axios
      .get(`${url}dogs/${id}`)
      .then((result) => {
        setModifyDog(result.data);
        setIdM(result.data._id);
        setNombreM(result.data.name); // Actualiza el estado
        setEdadM(result.data.age); // Actualiza el estado
        setColorM(result.data.color); // Actualiza el estado
        setRazaM(result.data.breed); // Actualiza el estado
        setJugueteM(result.data.favoriteToy); // Actualiza el estado
        setPersoM(result.data.personality); // Actualiza el estado
        setDescM(result.data.bio); // Actualiza el estado
        setImageM(result.data.image); // Actualiza el estado
      })
      .catch((error) => {
        console.error("Error fetching dog:", error);
      });
  };
  const handleModify = (idM) => {
    axios
      .put(`${url}dogs/${idM}`, {
        age: edadM,
        bio: descM,
        breed: razaM,
        color: colorM,
        favoriteToy: jugueteM,
        image: imageM,
        name: nombreM,
        personality: persoM,
      })
      .then((result) => {
        // console.log(result);
        obtenerDogs();
        setModify(false);
      })
      .catch((error) => {
        console.error("Error fetching dog:", error);
      });
  };
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <button
          className="w-[40%] rounded-md text-lg bg-amber-900 p-4 text-lg font-bold text-white my-4 active:bg-amber-700"
          onClick={() => setCreate(true)}
        >
          CREAR PERRO
        </button>
        {create ? (
          <div className="w-full fixed h-[95vh] bg-gray-500 bg-opacity-55 flex justify-center items-center">
            <div className="w-[87%] bg-white h-[69%] rounded-md p-3 sm:w-[70%] md:w-[55%] lg:w-[40%] xl:w-[35%]">
              <button
                className="absolute right-[50px] text-lg font-bold cursor-pointer active:shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)] active:bg-none sm:right-[18%] md:right-[25%] lg:right-[32%] xl:right-[34%]"
                onClick={() => setCreate(false)}
              >
                X
              </button>
              <p className="text-center text-xl font-medium p-1">CREAR PERRO</p>
              <div className="h-1 bg-gray-400 w-[95%] mx-auto"></div>
              <div className="flex flex-col w-full items-center justify-center pt-3 gap-2">
                <input
                  className="w-[90%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  onChange={(e) => setNombre(e.target.value)}
                />
                <div className="flex gap-8 justify-center">
                  <input
                    className="w-[40%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                    type="text"
                    placeholder="Edad"
                    onChange={(e) => setEdad(e.target.value)}
                  />
                  <input
                    className="w-[40%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                    type="text"
                    placeholder="Color"
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
                <input
                  className="w-[90%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                  type="text"
                  placeholder="Link Imagen"
                  onChange={(e) => setImage(e.target.value)}
                />
                <input
                  className="w-[90%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                  type="text"
                  placeholder="Raza"
                  onChange={(e) => setRaza(e.target.value)}
                />
                <input
                  className="w-[90%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                  type="text"
                  placeholder="Juguete Favorito"
                  onChange={(e) => setJuguete(e.target.value)}
                />
                <input
                  className="w-[90%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                  type="text"
                  placeholder="Personalidad"
                  onChange={(e) => setPerso(e.target.value)}
                />
                <input
                  className="w-[90%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                  type="text"
                  placeholder="Descripcion"
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="w-full flex justify-center">
                <button
                  className="rounded-md text-lg bg-emerald-500 p-4 text-lg font-bold text-white mt-3 active:bg-emerald-700"
                  onClick={() => handleCreate()}
                >
                  CREAR
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="h-1 bg-gray-400 w-[95%] mx-auto"></div>
      {state ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 place-items-center sm:grid-cols-1 md:grid-cols-2 my-5 gap-12 md:px-8 lg:grid-cols-3 2xl:grid-cols-4">
          {dogs.map((dog) => (
            <div
              key={dog._id}
              className="bg-gray-200 w-72 h-auto flex flex-col justify-center py-5 px-3 rounded-md shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
            >
              <div className="w-full h-58 flex justify-center">
                <img className="w-[98%] rounded-md" src={dog.image} alt="" />
              </div>
              <div>
                <p className="text-center font-bold text-2xl my-2">
                  {dog.name.toUpperCase()}
                </p>
                <div className="flex justify-between mr-5">
                  <p>
                    <strong>Age: </strong>
                    {dog.age}
                  </p>
                  <p>
                    <strong>Color: </strong>
                    {dog.color}
                  </p>
                </div>
                <p>
                  <strong>Breed: </strong>
                  {dog.breed}
                </p>

                <p>
                  <strong>Favorite Toy: </strong>
                  {dog.favoriteToy}
                </p>
                <p>
                  <strong>Personality: </strong>
                  {dog.personality}
                </p>

                <p>
                  <strong>Description: </strong>
                  {dog.bio}
                </p>
                <div className="w-full flex justify-center gap-8">
                  <button
                    className="rounded-md text-lg bg-sky-600 p-4 text-sm font-bold text-white my-4 active:bg-sky-700"
                    onClick={() => {
                      setModify(true);
                      getDog(dog._id);
                    }}
                  >
                    Modificar
                  </button>
                  <button
                    className="rounded-md text-lg bg-red-500 p-4 text-sm font-bold text-white my-4 active:bg-red-700"
                    onClick={() => handleDelete(dog._id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
          {modify ? (
            // handleModify(dog._id)
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300/70">
              <div className="w-[87%] bg-white h-[69%] rounded-md p-3 sm:w-[70%] md:w-[55%] lg:w-[40%] xl:w-[35%]">
                <button
                  className="absolute right-[50px] text-lg font-bold cursor-pointer active:shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)] active:bg-none sm:right-[18%] md:right-[25%] lg:right-[32%] xl:right-[34%]"
                  onClick={() => setModify(false)}
                >
                  X
                </button>
                <p className="text-center text-xl font-medium p-1">
                  MODIFICAR PERRO
                </p>
                <div className="h-1 bg-gray-400 w-[95%] mx-auto"></div>
                <div className="flex flex-col w-full items-center justify-center pt-3 gap-2">
                  <input
                    className="w-[90%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                    type="text"
                    name="nombreM"
                    id="nomM"
                    value={nombreM}
                    placeholder="Nombre"
                    onChange={(e) => setNombreM(e.target.value)}
                  />
                  <div className="flex gap-8 justify-center">
                    <input
                      className="w-[40%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                      type="text"
                      name="edadM"
                      id="edM"
                      value={edadM}
                      placeholder="Edad"
                      onChange={(e) => setEdadM(e.target.value)}
                    />
                    <input
                      className="w-[40%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                      type="text"
                      name="colorM"
                      id="colM"
                      value={colorM}
                      placeholder="Color"
                      onChange={(e) => setColorM(e.target.value)}
                    />
                  </div>
                  <input
                    className="w-[90%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                    type="text"
                    name="imageM"
                    id="imM"
                    value={imageM}
                    placeholder="Link Imagen"
                    onChange={(e) => setImageM(e.target.value)}
                  />
                  <input
                    className="w-[90%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                    type="text"
                    name="razaM"
                    id="razM"
                    value={razaM}
                    placeholder="Raza"
                    onChange={(e) => setRazaM(e.target.value)}
                  />
                  <input
                    className="w-[90%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                    type="text"
                    name="jugueteM"
                    id="jugM"
                    value={jugueteM}
                    placeholder="Juguete Favorito"
                    onChange={(e) => setJugueteM(e.target.value)}
                  />
                  <input
                    className="w-[90%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                    type="text"
                    name="persoM"
                    id="perM"
                    value={persoM}
                    placeholder="Personalidad"
                    onChange={(e) => setPersoM(e.target.value)}
                  />
                  <input
                    className="w-[90%] p-2 text-lg rounded-md focus:shadow-lg shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
                    type="text"
                    name="descM"
                    id="deM"
                    value={descM}
                    placeholder="Descripcion"
                    onChange={(e) => setDescM(e.target.value)}
                  />
                </div>
                <div className="w-full flex justify-center">
                  <button
                    className="rounded-md text-lg bg-emerald-500 p-4 text-lg font-bold text-white mt-3 active:bg-emerald-700"
                    onClick={() => {
                      handleModify(idM);
                    }}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
}

export default AuthDogs;
