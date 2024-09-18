import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

export default function Price (props){
    // our api key from coinapi.io
    const apiKey = "08D1FB88-BD70-4E4B-AE79-7810B6063400";
    //grabbing the currency symbol from the url params
    const params = useParams();
    const symbol = params.symbol;
    // using the other two variables to create our url
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    //state to hold the coin data
    const [coin, setCoin] = useState("null");

    // function to fetch coin data
    const getCoin = async () => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            setCoin(data);
        }catch(e){
            console.error(e)
        }
    };
    //useEffect to run getcoin when component mounts
    useEffect(() =>{
        getCoin();
    }, []);
    
    // loaded function for when data is fetched
    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        );
    };


// function for when data doesn't exist
const loading = () => {
    return <h1>Loading...</h1>
};

// if coin has data, run the loaded function: otherwise, run loading
return coin && coin.rate ? loaded() : loading();

};