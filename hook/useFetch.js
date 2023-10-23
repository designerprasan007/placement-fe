import { useState, useEffect } from "react";
import axios, { Axios  } from "axios";
// import {RAPID_API_KEY} from '@env'

// const rapidApiKey = RAPID_API_KEY;
const useFetch = (endPoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endPoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };


    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false )
        } catch (error) {
            setError(true)
            alert("something went wrong!")
        } finally {

        }
    }

    useEffect(() =>{
        fetchData()
    },[])

    const reFetch = () =>{
        setIsLoading(true);
        fetchData()
    }

    return {data, isLoading, error, reFetch}
}

export default useFetch