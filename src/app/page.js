import Counter from "@/Components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
       <h1 className=' text-2xl' > the next js app </h1> 
       <Counter></Counter>  
       <Link href='news/blog' >
       <button className=" btn btn-ghost mt-2" > about </button>
       </Link>    
    </div>
  );
};

export default HomePage;