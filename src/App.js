import uno from './images/messi.jpg';
import dos from './images/neymar.jpg';
import tres from './images/vinivius.jpg';
import three from './images/incognito.jpg';

import './App.css';

function App() {
  let nombres=["messi","neymar","vini"];
  
  const cambiarimagen = (e)=>{
   if(e.target.src.includes("incognito")){
    e.target.style.visibility="hidden";

   }else{
    e.target.src=three;
  }

  }


  const cambiartexto = (e)=>{
     if(e.target.innerHTML=="visto"){
      e.target.innerHTML="";
     }else{
      e.target.innerHTML="visto";
     }
  }
  return (
    <>
        <div className="contenedor">
        <div className="caja">
        <img onClick={cambiarimagen}  src={uno}/>
        <div onClick={cambiartexto} className="nombre"> {nombres[0]}</div>
        </div>
        <div className="caja">
        <img onClick={cambiarimagen} src={dos}/>
        <div onClick={cambiartexto} className="nombre"> {nombres[1]}</div>
        </div>
        <div className="caja">
        <img onClick={cambiarimagen} src={tres}/>
        <div onClick={cambiartexto} className="nombre"> {nombres[2]}</div>
        </div>
        
</div>

    </>
      
  );
}

export default App;
