import "./App.css";

const name = "Tugba";
const Surname = "Bozkurt";
const isLoggedIn = false;
function App(){
  return( <>
  <h1>
    {isLoggedIn ? `Benim adım ${name},soyadım ${Surname}`
    :"Giriş Yapmadınız."}
  </h1>
  </>
);
}
export default App;
