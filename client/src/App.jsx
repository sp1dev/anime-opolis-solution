import { useState, useEffect } from 'react'
import './App.css'
import { AnimeBlock } from './AnimeBlock'

function App() {
  const [animeData, setAnimeData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/animes");
      const parsedRes = await res.json();
      setAnimeData(parsedRes);
    }
    fetchData();
  }, [])
  return (
    <div>
      {animeData.map((anime, i) => (
        <AnimeBlock key={i} name={anime.name} numberOfEps={anime.numberOfEps} genre={anime.genre} />
      ))}
    </div>
  )
}

export default App
