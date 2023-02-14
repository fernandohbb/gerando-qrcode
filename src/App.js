import './App.css';
import { useState} from "react"
import QRCode from 'react-qr-code';

function App() {

  const [link, setLink] = useState('');  
  
  
  function handQrCode(e){
    setLink(e.target.value)
  }


  return (
    <div className="App">
    <div className="contanier">
        <QRCode
        size={180}
        value={link}
         />

     <input
     className='input'
     placeholder='digite seu link...'
     value={link}
     onChange={(e) => handQrCode(e)}
     />

    </div>
    </div>
  );
}

export default App;
