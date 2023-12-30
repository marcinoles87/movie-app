import Movie from './components/Movie';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data , setData] = useState();
  const [error , setError] = useState();

  useEffect( () => {

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then( (response) => response.json())
    .then( (actualDta) => console.log(actualDta))
  }, [])
  return (
    <div className="App">
     
     <Movie></Movie>
    </div>
  );
}

export default App;
