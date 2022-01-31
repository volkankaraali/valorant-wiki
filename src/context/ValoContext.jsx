import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ValoContext = createContext();


export const ValoProvider = ({ children }) => {
    const [agents, setAgents] = useState([]);
    const [language, setLanguage] = useState("en-US");

    useEffect(() => {
        axios.get(`https://valorant-api.com/v1/agents?language=${language}`)
            .then(response => setAgents(response.data.data))
            .catch(e => console.log(e))
    }, [language]);


    const values = {
        agents,
        setLanguage
    }

    return <ValoContext.Provider value={values} >{children}</ValoContext.Provider>
}

export const useValoContext = () => useContext(ValoContext);