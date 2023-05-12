import logo from './logo.svg';
import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react'
import './App.css';
import Clock from './components/Clock';

import {Routes, Route} from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <>
    <Navbar />

    <Routes >
      <Route path="/" element={ <Home /> } />
      <Route path="/blog" element={ <Blog /> } />
      <Route path="/team" element={ <Team /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/services" element={ <Services /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
    </>
  );
}


// function App() {
//   const [time, setTime] = React.useState('');

//   useEffect(()=>{
//     setInterval(()=>{ let nwDate = new Date(); setTime(nwDate)}, 1000);
//   },[])

//   return (
//     <div className="App">
//       <h1>{time.toString()}</h1>
//     </div>
//   );
// }

// class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = { hello: "World!", time: new Date() }
//   }

//   componentWillMount() {
//     console.log("componentWillMount()")
//   }

//   componentDidMount() {
//     console.log("componentDidMount()")
//   }

//   changeState() {
//     this.setState({ hello: "Cogent!" })
//     this.setState({time: new Date()})
//   }

//   render() {
//     return (
//       <div>
//         <h1>Cogent.org, Hello {this.state.hello}</h1>
//         <h2>
//           <a onClick={this.changeState.bind(this)}>Press Here!</a>
//         </h2>
//         <h1>Current Time:</h1>
//         <Clock hour={this.state.time.getHours()} minute={this.state.time.getMinutes()} second={this.state.time.getSeconds()}></Clock>
//       </div>
//     );
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate()")
//     var d = new Date()
//     if(d.getSeconds() == this.state.time.getSeconds()) {
//       if(d.getMinutes() == this.state.time.getMinutes()) {
//         if(d.getHours() == this.state.time.getHours()) {
//           return false
//         }
//       }
//     }
//     return true
//   }

//   componentWillUpdate() {
//     console.log("componentWillUpdate()")
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate()")
//   }
// }

// function App() {
//   const[name, setName] = useState("Ryan")
//   const changeName = () => {
//     setName("Anudeep")
//   }

//   return (
//     <div>
//       <p>My name is {name}</p>
//       <button onClick={changeName}>Click Me</button>
//     </div>
//   )

  // var d = new Date()

  // return (
  //   <div>
  //     <h1>Current Time:</h1>
  //     <Clock hour={d.getHours()} minute={d.getMinutes()} second={d.getSeconds()}></Clock>
  //   </div>
  // )
// }

export default App;
