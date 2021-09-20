import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">    
<ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return(
    <div>
      <h2>External Users</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
return(
  <div className="counter">
      <h2>Name: {props.name}</h2>
  <h4>Email: {props.email}</h4>
  </div>
)

}

export default App;






















// .................practice 01................//

// function App() {
//   return (

//     <div className="App">
//       <a href="https://www.google.com">Google</a>
//         <Person name="Mosarraf Korim" profession="Actor"> </Person>
//         <Person name="Shakib Al Hasan" profession="Crickter" ></Person>
//         <Person name="Bill Gatas" founder="Microsoft"></Person>
//         <Person></Person>
//         <Person></Person>
//         <Person></Person>



//     </div>
//   );
// }

// function Person(props) {
//   console.log(props)
//  return(
//    <div  className="person">
//   <h1>Name: {props.name}</h1>
// <h3>Profession: {props.profession}</h3>
// <h4>Founder: {props.founder}</h4>
//    </div>
//  )
// }

// export default App;




// practice modile 45.5........////




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const companys = ['microsoft', 'google', 'facebook', 'amazon', 'apple'];
//   const laptops =[
//     {price: 50000,
//     brand: 'dell',
//     name:'insprion'
//     }
//   ]
//   return (

//     <div className="App">
//       <ul>
//         {
//  companys.map(company => <li>{company}</li>)
//         }
//       </ul>
// {
// laptops.map(laptop =>  <Laptop name={laptop.name} price={laptop.price} brand={laptop.brand}></Laptop>
// )
// }
     

      


//     </div>
//   );
// }

// function Laptop(props) {
  
//  return(
//    <div  className="person">
//   <h1>Name: {props.name}</h1>
// <h3>Price: {props.price}</h3>
// <h4>Founder: {props.brand}</h4>
//    </div>
//  )
// }

// export default App;





// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {

//   return (
//     <div className="App">    
// <Counter></Counter>
// <Counterr></Counterr>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
// const handleIncrease = () => {
// const newCount = count + 1;
// setCount(newCount);
// };
//   return(
//     <div className="counter">
//       <h1>Count: {count}</h1>
//       <button onClick={handleIncrease} className="button">Increase</button>
//     </div>
//   )
// }

// function Counterr() {

//     const [count, setCount] = useState(10);
//     const handleDecrease = () => setCount( count - 1);
//     const handleIncrease = () => setCount( count + 1);
  
//   return(
//     <div className="counter">
//       <h1>Count: {count}</h1>
//       <button onClick={handleDecrease} className="button">Decrease</button>
//       <button onClick={handleIncrease} className="button">Increase</button>

//     </div>
//   )
// }

// export default App;








