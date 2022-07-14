// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react"
// import ReactDOM from "react-dom"

// const navbar = (
//   <nav>
//     <h1>BabzeezTechHub</h1>
//     <ul>
//       <li>Menu</li>
//       <li>Service</li>
//       <li>Home Page</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// )

// const page = (
//   <div>
//     <h1>My awesome website in React!</h1>
//     <h3>Reason why i love react to build my page</h3>
//     <ol>It's composible!</ol>
//     <ol>It's declearative!</ol>
//     <ol>It's a hireable to skill to learn!</ol>
//     <ol>It's very actively maintained by skilled people!</ol>
//     <ol>I love working around react than any other framework!</ol>
//   </div>
// )
// ReactDOM.render(page,document.getElementById("root1"))
// ReactDOM.render(navbar,document.getElementById("root"))

// import React from "react"
// import ReactDOM from "react-dom"

// const page = (
//   <div>
//     <h1>My awesome website in React!</h1>
//     <h3>Reason why i love react to build my page</h3>
//     <ol>It's composible!</ol>
//     <ol>It's declearative!</ol>
//     <ol>It's a hireable to skill to learn!</ol>
//     <ol>It's very actively maintained by skilled people!</ol>
//     <ol>I love working around react than any other framework!</ol>
//   </div>
// )
// ReactDOM.render(page,document.getElementById("root1"))
// document.getElementById("root").append(JSON.stringify(page))

// import React from "react"
// import ReactDOM from "react-dom"

// const NewPage = (
//     <nav>
//       <img src="./react-logo.svg" width="50px" />
//       <h1>LOGO</h1>
//       <h1>Fun facts about React!</h1>
//       <ul>
//         <li>Was first release in year 2013</li>
//         <li>Was originally created by Jordan walker</li>
//         <li>Has well over 100k starts on Github</li>
//         <li>Is maintain by facebook</li>
//         <li>Powers thousands of enterprise apps,including mobile.</li>
//       </ul>
//     </nav>
// )
// console.log(NewPage);
// ReactDOM.render(NewPage,document.getElementById("root"))

// import React from "react"
// import ReactDOM from "react-dom"

// function Page() {
//   return (
//     <nav>
//           <img src="./react-logo.svg" width="50px" />
//            <h1>LOGO</h1>
//            <h1>Fun facts about React!</h1>
//            <ul>
//              <li>Was first release in year 2013</li>
//              <li>Was originally created by Jordan walker</li>
//              <li>Has well over 100k starts on Github</li>
//              <li>Is maintain by facebook</li>
//             <li>Powers thousands of enterprise apps,including mobile.</li>
//            </ul>
//          </nav>
//   )
// }
// ReactDOM.render(<Page />,document.getElementById("root"))


// import React from "react"
// import ReactDOM from "react-dom"

// function AnotherPage() {
//   return (
//     <div>
//       <header>
//         <nav>
//         <img src="./image/react.png" width="100px" alt="logo" />
//         </nav>
//       </header>
//       <body>
//       <h1>10 Reason i want to learn React</h1>
//       <ol>
//         <li>I love coding</li>
//         <li>I love react because it make my UI easy</li>
//         <li>React is so much easy to learn</li>
//         <li>I love it beacause i want to earn</li>
//         <li>I need another source of income</li>
//         <li>I want to become a freelance </li>
//         <li>After i learn react, the next thing is to know about backend too</li>
//         <li>I want to become a fullstack developer</li>
//         <li>I want to become financial independent</li>
//       </ol>
//       </body>
//       <footer>
//       <small>"@ 2022 by BabzeezTech_Hub. all right reserved"</small>
//       </footer>
//       </div>
//   )
// }
// ReactDOM.render(<AnotherPage />, document.getElementById("root"))

//Creating parent and child component.
import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Header from "./Header";
import MainComponent from "./MainComponent";
import Footer from "./Footer";




function MyComponent(){
  return (
    
    <div>
    <Header />
    <MainComponent />
    <Footer />
    </div>
  )
}
ReactDOM.render(<MyComponent />, document.getElementById("root"))