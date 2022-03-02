import './App.css';
import Video from './components/Video'
import react,{useState} from 'react';
import Modal from './components/Modal'
// import ErrorBoundary from './components/ErrorBoundary';


function App() {
  const [isOpen,setIsOpen]=useState(false);
  const[play,setPlay]=useState(true);
  let prev=isOpen;
  return (
    // <ErrorBoundary>
    <div className="App">

         

        <button className="primaryBtn" onClick={() =>{ setIsOpen(true); setPlay(false)}}>
        
        Open Modal
      </button>
      <button className='primaryBtn' onClick={()=>{
        prev=true;
      setIsOpen(false);
      setPlay(true)
      

      
      }}>Play Video</button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      {play && <Video/>}
      
      

        
    </div>
    // </ErrorBoundary>
  );
}

export default App;
