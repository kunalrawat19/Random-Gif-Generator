import { useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {
  console.log(API_KEY);
  
  const [tag, setTag] = useState("yoga");
  const [gifUrl, setGifUrl] = useState("https://media.giphy.com/media/Y1AbxHLC5k3KCvMswB/giphy.gif");

  async function RandomGeneratorHandler() {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${tag}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
      const randomIndex = Math.floor(Math.random() * response.data.data.length);
      setGifUrl(response.data.data[randomIndex].images.original.url);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
  }

  return (
    <div className="bg-green-500 p-4 rounded shadow-lg text-center">
      <p className="text-xl font-semibold mb-4">Search by Tag</p>
      <img src={gifUrl} alt="GIF by Tag" className="w-full h-auto rounded mb-4" />
      <input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full mb-4"
        placeholder="Enter a tag (e.g., 'funny')"
      />
      <button onClick={RandomGeneratorHandler} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        Generate
      </button>
    </div>
  );
}
