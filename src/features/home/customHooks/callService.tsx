import React, {useEffect, useState} from "react";
import {callStarWarsApi} from "../services/service";

export const useStarWarsApi = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const callStarWars = async () => {
            setData(await callStarWarsApi());
        };
        callStarWars();
    }, []);
    return data;
};