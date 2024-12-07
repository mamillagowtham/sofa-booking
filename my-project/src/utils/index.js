import axios from "axios";

const productionURL = 'https://strapi-store-server.onrender.com/api';
export const customFetch = axios.create({
 baseURL:productionURL,
})

export const formatPrice =(price)=>{
    const  IndianAmount = new Intl.NumberFormat("en-IN",{
        style:"currency",
        currency:"INR"
    }).format((price/100).toFixed(2));

    return IndianAmount;
}