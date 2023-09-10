// ReactDOM.render(<h1>hello,everyone</h1>,document.getElementById("root"))
//render an <ul> with 2+ <li>s inside
// ReactDOM.render(<ul><li>NILESH</li> <li>BAHETI</li> </ul>,document.getElementById("root"))
//  function MainContent()
//  {
//     return(
//         <h1>I'm learning React!</h1>
//     )
//  }
//  ReactDOM.render(
//   <div>
//     <MainContent/>
//   </div>,
//   document.getElementById("root")
//  )
// const h1=document.createElement("h1");
// h1.textContent="This is an imperative way to program"
// h1.className="header"
// document.getElementById("root").append(h1)
//JSX
//  const page=
//  (
//     <div>
//     <h1>I m learning react</h1>
//     <p>I an learning DSA</p>
//     </div>
//  )
//  ReactDOM.render(
//     page,document.getElementById("root")
//  )
// const task=(
// <nav>
//     <h1>NILESH'S WEBSITE</h1>
//     <ul>
//         <li>Pricing</li>
//         <li>Contact</li>
//         <li>About</li>
//     </ul>
// </nav>
// )
// const page=(
//     <div>
//         <h1>My awesome Website in React</h1>
//         <h3>Reasons I love react</h3>
//         <ol>
//             <li>It's composable</li>
//             <li>It's declarative</li>
//             <li>It's aa hireable skill</li>
//             <li>It's very actively maaintained</li>
//         </ol>
//     </div>
// )
// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )
// document.getElementById("root").append(JSON.stringify(page)) it will return object as string
//first page off static
// const item=(
//     <div>
//     <div>
//         <img src="react.png"></img>
//     </div>
//     <h1>Fun facts about React</h1>
//     <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100k stars on Github</li>
//         <li>Is maintained by Facebook</li>
//     </ul>
// </div>
// )
// ReactDOM.render(
//     item,
//     document.getElementById("root")
// )
//why do we need to import React from "react" in our files?
//React is what defines JSX
//jsx should be nested under a single parent element
// function TemporaryName(){
//     return(
//         <div>
//             <div>
//                 <img src="react.png"></img>
//             </div>
//             <h1>Fun facts about React</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//              <li>Was originally created by Jordan Walke</li>
//              <li>Has well over 100k stars on Github</li>
//              <li>Is maintained by Facebook</li>
//          </ul>
//      </div>
//     )
// }
// ReactDOM.render(
//     <TemporaryName/>,
//     document.getElementById("root")
// )
//custom Component1----------
// function Happy(){
//     return(
//         <div>
//             <ol>
//                 <li>creative</li>
//                 <li>very exciting</li>
//                 <li>interesting</li>
//             </ol>
//         </div>
//     )
// }
// ReactDOM.render(
//     <Happy/>,
//     document.getElementById("root")
// )
//custom Component 2-----------
// function Page(){
//     return(
//         <div>
//         <header>
//             <nav>
//             <img src="react.png" width="80px"></img>
//             </nav>
//         </header>
//         <h1>I am excited to learn React</h1>
//         <ol>
//                 <li>creative</li>
//                 <li>very exciting</li>
//                 <li>interesting</li>
//        </ol>
//        <footer>
//          All rights reserved
//        </footer>
//         </div>
//     )
// }
// ReactDOM.render(
//     <Page/>,
//     document.getElementById("root")
// )
//React Component?
//a fucnction that returns React elements
//custom component 3---------
// function Header(){
//     return(
//         <header>
//             <nav>
//             <img src="react.png" width="80px"></img>
//             </nav>
//         </header>
//     )
// }
// function Footer(){
//     return(
//         <footer>
//         All rights reserved 
//       </footer>
//     )
// }
// function MainContent(){
//     return (
//         <div>
//         <h1>I am excited to learn React</h1>
//         <ol>
//                 <li>creative</li>
//                 <li>very exciting</li>
//                 <li>interesting</li>
//        </ol>
//         </div>
//     )
// }
// function Page(){
//     return(
//        <div>
//         <Header/>
//      <MainContent/>
//         <Footer/> 
//         </div>
//     )
// }
// ReactDOM.render(
//     <Page/>,
//     document.getElementById("root")
// )