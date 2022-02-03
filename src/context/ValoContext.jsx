import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ValoContext = createContext();


export const ValoProvider = ({ children }) => {
    const [agents, setAgents] = useState([]);
    const [language, setLanguage] = useState("en-US");

    const [ranks, setRanks] = useState([]);

    useEffect(() => {
        axios.get(`https://valorant-api.com/v1/agents?language=${language}`)
            .then(response => setAgents(response.data.data))
            .catch(e => console.log(e))
        axios.get(`https://valorant-api.com/v1/competitivetiers?language=${language}`)
            .then(response => setRanks(response.data.data[3].tiers))

    }, [language]);


    const values = {
        agents,
        setLanguage,
        ranks
    }

    return <ValoContext.Provider value={values} >{children}</ValoContext.Provider>
}

export const useValoContext = () => useContext(ValoContext);