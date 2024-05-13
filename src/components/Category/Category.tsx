import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
interface Product { 
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
function Category() {

    const {cat}= useParams() //this cat variable store the category
    const apiUrl= 'https://fakestoreapi.com/products/category/'+cat
    const [data,setData]= useState<Product[]>([])
    useEffect(()=>{
        
        fetch(apiUrl)
            .then(res=>res.json())
            .then((res: Product[]) => setData(res))
    },[cat])
    return (
      <>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-5 px-20">
        
        {
            data.map((item)=>
              <Card key={item.id} title={item.title} price={item.price} rate={item.rating.rate} image={item.image} />
            )
        }
      
        
      </div>
      
      </>
    )
  }
  
  export default Category;