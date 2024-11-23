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
  console.log(dogs);
  return (
    <>
      {state ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
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
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ListDogs;
