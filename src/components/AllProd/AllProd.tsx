import { useEffect, useState } from "react"
import Description from "../Description/Description";
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
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [data,setData]= useState<Product[]>([])
    const [selectedProduct, setSelectedProduct] = useState(0)
    useEffect(()=>{
      const lim= 6 * page                             // for infinite scrolling
        fetch(`https://fakestoreapi.com/products?limit=${lim}`)
            .then(res=>res.json())
            .then((res: Product[]) => setData(res))
    },[page])
    const handleScroll = () => {
     
      
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight)
      {
        setPage((prev) => prev+1);  
      }
    }
    useEffect(()=>{
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    },[])

    const handleClick= (product:number) => {
      setSelectedProduct(product)
      document.documentElement.scrollTop=0
      
    }

    return (
      <>
      <div className="px-20 py-5">
      <input type="text" name="" id="" value={search} onChange={(e)=> setSearch(e.target.value)} className=" text-2xl w-full py-2 px-4 border border-gray-300 rounded-md hover:border-gray-600"  placeholder= "Search by name or description" />
      </div>
      <div>
      {
          (selectedProduct!=0) && (
          
            <Description itemId={selectedProduct} onClose={()=>setSelectedProduct(0)} />
          )
        }
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 pt-5 px-20">
        
        { 
            data.filter((item)=>{
              return search.toLowerCase() === '' ? item :  (
                (item.description.toLowerCase().includes(search.toLowerCase())) ||
                (item.title.toLowerCase().includes(search.toLowerCase())) 
              )
              
            })
            .map((item)=>
              
              <div key={item.id} onClick={()=>handleClick(item.id)}>
                  <Card  key={item.id} title={item.title} price={item.price} rate={item.rating.rate} image={item.image} />
              </div>
              
            )
        }
        
        
        
      </div>
      </>
    )
  }
  
  export default AllProd;
