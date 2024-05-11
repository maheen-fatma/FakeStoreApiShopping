interface CardProps{
    title: string;
    price: number;
    rate: number;
    image: string;
}
function Card({title,price,rate, image} : CardProps) {


    return (
      <>
       <div className=" flex flex-col items-center p-6 max-w-sm rounded overflow-hidden shadow-inner bg-white h-[500px]  hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 group">
         <img className=" mb-3 h-2/5 " src={image} />
        
          <div className="px-6 py-4">
            <div className="font-bold text-xl mt-2 mb-2">{title}</div> <hr />
            <div className=" my-4 font-medium text-lg group-hover:text-2xl transition duration-1000 ease-in-out transform group-hover:-translate-y-1 group">${price}</div> <hr />
            <div className="my-4">Rating: <span className=" text-yellow-500">{rate}</span> / 5</div>
         </div>

</div>
      </>
    )
  }
  
  export default Card;