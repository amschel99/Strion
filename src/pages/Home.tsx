import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home= ()=>{
    return <>
   <Navbar/>
    <Outlet/>
    <footer>Footer</footer>
    
    </>
}
export default Home;