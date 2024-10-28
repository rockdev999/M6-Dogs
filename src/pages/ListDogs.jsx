import axios from "axios";
import { StateGlobal } from "../context/StateGlobal";
import { useContext, useEffect, useState } from "react";

function ListDogs() {
  const { url, dogs, setDogs } = useContext(StateGlobal);
  const [state, setState] = useState(true);
  useEffect(() => {
    axios
      .get(`${url}dogs`)
      .then((result) => {
        setDogs(result.data);
        console.log(dogs);
        setState(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {state ? (
        <div>cargando...!!!!</div>
      ) : (
        <div className="w-full flex flex-col items-center my-5 gap-5">
          {dogs.map((dog) => (
            <div
              key={dog._id}
              className="bg-gray-200 w-72 flex flex-col py-5 px-3 rounded-md shadow-[10px_10px_35px_1px_rgba(0,0,0,0.5)]"
            >
              <div className="w-full h-58 flex justify-center">
                <img className="w-[98%] rounded-md" src={dog.image} alt="" />
              </div>
              <div>
                <p className="text-center font-bold text-2xl my-2">
                  {dog.name.toUpperCase()}
                </p>
                <div className="flex justify-between">
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
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ListDogs;
