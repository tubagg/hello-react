
import "./App.css";
import User from"./components/User";

const friends = 
[
  {
    id:1,
    name:"Emir",
  },
  {
    id:2,
    name:"Ayşe",
  },
  {
    id:3,
    name:"Beyza",
  },
  {
    id:4,
    name:"Esra",
  },
];


function App(){
  return( 
  <>
  <User 
  //name = "Tugba" 
  surname ="Bozkurt" 
  age = {22} 
  isLoggedIn = {true} 
  friends = {friends}
  adress = {{
    title: 'Ataşehir/İstanbul',
    zip: 34750
  }}
   />
  </>
);
}
export default App;
