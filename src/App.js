import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas'


function App() {

const [Linea1, setLinea1] = useState('');
const [Linea2, setLinea2] = useState('');
const [Imagen, setImagen] = useState('');

const onChange1= function(evento){
  
  setLinea1(evento.target.value);
}

const onChange2= function(evento){
  
  setLinea2(evento.target.value);
}

const onChangeImg= function(evento){
  
  setImagen(evento.target.value);
}

const onClickExportar = function (evento) {

  html2canvas(document.querySelector("#meme")).then(canvas => {
    var img = canvas.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = 'meme.png';
    link.href = img;
    link.click();
  });
}



  return (
    <div className="App">

     {/*Select Picker Meme*/}
      <select onChange={onChangeImg}>
        <option value='housefire'>Casa En llamas</option>
        <option value='futurama'>Futurama</option>
        <option value='history'>History Channel</option>
        <option value='matrix'>Matrix</option>
        <option value='smart'>Hombre Inteligente</option>
       <option value='philosoraptor'>philosoraptor</option>
      </select><br/>


      {/* // input text First line */}
      <input onChange={onChange1} type="text" placeholder='Linea 1'/><br/>

     {/* //input text second line */}
     <input onChange={onChange2} type="text" placeholder='Linea 2'/><br/>

      {/* //button export */}

      <button onClick={onClickExportar}>Exportar</button>


      {/*Meme Estructure */}

      <div className='meme' id= 'meme'>
        <span>{Linea1}</span> <br/>
        <span>{Linea2}</span><br/>
        <img src={'/img/'+ Imagen +'.jpg'} />
      </div>
     
    </div>
  );
}

export default App;
