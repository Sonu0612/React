import React from "react";
import ReactDOM from "react-dom/client"; 

// const Title = ()=><h1>This is Title</h1>
// const Heading =()=>(
//     <>
//     <Title></Title>
// <h1 id="headings">Hello World!!</h1>
// </>
// );
const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
            <img className="logo" src= "https://th.bing.com/th/id/OIP.LEbh4ht26jR7unbmULmNkAHaHa?w=1600&h=1600&rs=1&pid=ImgDetMain" alt="no image" width= "50px" height="30px"/>
            </div>
            <div className="nav-items">
                <ul >
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const AppLayout =() =>{

    return (
        <div className="App">
            <Header></Header>
        </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);
 