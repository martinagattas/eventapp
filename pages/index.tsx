import { NextPage } from "next";
import Body from "eventapp/components/home/Body"
import Navbar from "eventapp/components/home/Navbar";
import Footer from "eventapp/components/home/Footer";




const Home: NextPage = () => {
    return(
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
            <Navbar></Navbar>
                <p>Contenido aquí</p>
                <Footer></Footer>
                </div>
        </>   
                
    )
}

export default Home;