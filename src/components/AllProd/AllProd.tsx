import { useEffect, useState } from "react"
import Card from "../Card/Card";
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

function AllProd() {
  
    const [data,setData]= useState<Product[]>([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then((res: Product[]) => setData(res))
    },[])

    return (
      <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 px-20">
        {
            data.map((item)=>
              <Card title={item.title} price={item.price} rate={item.rating.rate} image={item.image} />
            )
        }
        
        
      </div>
      </>
    )
  }
  
  export default AllProd;