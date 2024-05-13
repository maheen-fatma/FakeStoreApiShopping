import { useEffect, useState } from "react";

interface Des{
    itemId : number,
    onClose: () => void
}
interface Product { //had to create an interface to specify the type of data that the static variable 'data' will hold since we are working with typescript so it id necessary
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}
function Description({itemId, onClose}:Des) {
    const [data, setData] = useState<Product | null>(null);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+itemId)
            .then(res=>res.json())
            .then(json=> setData(json))
    },[data])
        
  return (
    <>
    
    <div className="p-12 text-3xl bg-white">
    <button className=" border border-solid p-1 rounded bg-red-600 hover:bg-red-400 text-white mb-3" onClick={onClose}>Close</button>
    <div className="flex flex-row  items-center">

    
    <div> <img className=" pr-16" src={data?.image} alt="" />
        </div>
        <div> 
    <h1>Title: {data?.title} </h1>
    <h2>Price: {data?.price}</h2>
    <p>Description: {data?.description}</p>
    <h3>Category: {data?.category}</h3>
    <h4>Stock: {data?.rating.count}</h4>
    <h4>Rating: {data?.rating.rate}/5</h4>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Description
