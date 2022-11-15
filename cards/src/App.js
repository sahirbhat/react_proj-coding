
import './App.css';

import Example from './Componets/Example'
import Data from './Componets/Data';
import Data2 from './Componets/Data2';
import Data3 from './Componets/Data3';



function App(props) {
  return (
   <>
    <div class="container ">
    <div class="row mt-2">
      <Example/>
      </div>
    <div class="row m-3">
          
          <div class="col-4 text-justify"><Data/></div>
          <div class=" col-4 text-justify"><Data2/></div>
          <div class=" col-4 text-justify"> <Data3/></div>
          
      </div>
      
      
  



  
   </div>
 


    </>
  );
}

export default App;
