import { useState, useEffect } from "react";
import axios from "axios";

export default function Random() {
  const [id, setId] = useState("5TBp5Oyg7XBCOKwCMRFBOvpmcPONwQZ2");
  const [click, setClick] = useState(false);

  // Fetch a random GIF whenever "Generate" is clicked
  useEffect(() => {
    async function RandomGeneratorHandler() {
      try {
        const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
        const response = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
        setId(response.data.data.id);
      } catch (error) {
        console.error("Error fetching random GIF:", error);
      }
    }

    if (click) {
      RandomGeneratorHandler();
    }
  }, [click]);

  return (
    <div className="bg-green-500 p-4 rounded shadow-lg text-center">
      <p className="text-xl font-semibold mb-4">A RANDOM GIF</p>
      {id && <img src={`https://media.giphy.com/media/${id}/giphy.gif`} alt="Random GIF" className="w-full h-auto rounded mb-4" />}
      <button onClick={() => setClick(prev => !prev)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        Generate
      </button>
    </div>
  );
}
