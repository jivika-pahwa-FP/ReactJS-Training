import { Component } from "react";
import { BrowserRouter,Route,Link, Routes } from "react-router-dom";

export default class FirstSPAComponen extends Component{
        render(){
            return(
                <>
                    <BrowserRouter>
                    <div>
                    <HeaderComponent></HeaderComponent>
                    <FooterComponent></FooterComponent>
                    </div>
                    </BrowserRouter>
                </>
            )
        }
}


function Home(){
    
    return <h1>This is Home </h1>
}


function About(){
    
    return <h1>This is About </h1>
}


function Contact(){
    
    return <h1>This is Contact </h1>
}

function HeaderComponent(){
    return(
        <>
        <center>
             <Link to="/"> Home </Link>
             <Link to="/about"> AboutUs </Link>
             <Link to="/contact"> ContactUs </Link>
            <MainComponent></MainComponent>
            </center>
      </>

    )
}


function MainComponent(){
    
    return(
    <>
    <div style={{border: "4px solid red", padding: "10px", margin: "10px", height: "200px"}}>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    </div>
    </>
    )
}

function FooterComponent(){
    
    return <h1>Footer Component</h1>
}
