import {createContext ,useState} from "react";

export const SongContext = createContext()

export const SongContextProvider = ({children})=>{
    const [song, setSong] = useState({
  "url": "https://ik.imagekit.io/rg5md0acx/cohort-2/modify/songs/Dhop__From__Game_Changer____Hindi__Y378eB8esZ.mp3",
  "posterUrl": "https://ik.imagekit.io/rg5md0acx/cohort-2/modify/posters/Dhop__From__Game_Changer____Hindi__AYYuGbyQE.jpeg",
  "title": "Dhop (From \"Game Changer\") (Hindi)",
  "mood": "sad",
})

const [loading, setLoading] = useState(false)

return(
    <SongContext.Provider value={{loading,setLoading,song,setSong}}>
        {children}
    </SongContext.Provider>
)

}