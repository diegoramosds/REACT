import { useState, useEffect } from "react";



//4- custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // 5- refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //6- loading
    const [loading, setLoading] = useState(false);

    //7- erros
    const [error, setError] = useState(null);

    //8 - desafio 6
    const [itemId, setItemId] = useState(null);



    const httpConfig = (data, method) => {

        if(method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method);

        } else if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-type" : "application/json"
                }
            })
            setMethod(method);
            setItemId(data);
        }
    }

    useEffect (() => {
        
        const fetchData = async () => {
            // 6-
            setLoading(true)

            try {
                
            const res = await fetch(url);

            const json = await res.json();

            setData(json);
            } catch (error) {
                setError("Houve algumerro ao carregar o dados!");
            }


            setLoading(false)

        };

        fetchData();

    }, [url, callFetch]);

    // 5  
    useEffect (() => {
        let json
       
         const httpRequest = async () => {
            if(method === "POST") {
            let fetchOpitions = [url, config]
       

            const res = await fetch(...fetchOpitions);

             json = await res.json();

            
        }
            else if (method === "DELETE") {
                const deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config)

            json = await res.json() 
            }
            setCallFetch(json);
    };

        httpRequest();

    }, [config, method, url])


    return {data, httpConfig, loading, error};
}