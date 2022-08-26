
// import { useEffect,useState} from 'react';
import Todo from "./Todo"
import Weather from "./weatherProject/Weather"
// import './App.css';

function App() {
   return <Weather/>
   // <Todo/>
//  const [users,setUsers]=useState([]);

//  const getApi= async ()=>{
//   //  let response =await fetch("https://jsonplaceholder.typicode.com/users");
//    let response =await fetch("https://jsonplaceholder.typicode.com/posts");
//   setUsers( await response.json());
//  }
//  useEffect(()=>{
//    getApi();
//  },[]);
 

//   return (
//    <> <h1>API Calling</h1>
//    <div className="container">


//      {
//       users.map((user)=>(

//         <div className="box">
//       {/* <div>Name:<span>{user.name}</span></div>
//       <div>Email:<span>{user.email}</span></div> */}

//       <div>Title:<span>{user.title.substr(0,10)}</span><span><a href='#'> see more...</a></span></div>
//       <div>Body:<span>{user.body.substr(0,20)}</span><span>...</span></div>

//     </div>
//       ) )
        
        
//      }
//     {/* <div className="box">
//       <div>Name:<span>ved</span></div>
//       <div>Email:<span>ved@gmail.com</span></div>

//     </div> */}
    
//    </div>
//    </>
//   );
}

export default App;
