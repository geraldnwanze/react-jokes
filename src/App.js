import { useState } from 'react';
import './App.css';
import Joke from './Joke';
import jokesData from "./jokes.json";

function App() {
  const [jokes, setJokes] = useState(jokesData);

  const joke = jokes.map(joke => (
    <Joke key={joke.id} joke={joke} toggle={() => toggle(joke.id)} />
  ))

  function toggle(id) {
    setJokes(prevJokes => (
      prevJokes.map(joke => (
        joke.id === id ? {...joke, isShown: !joke.isShown} : joke
      ))
    ))
  }

  return (
    <div className="App">
      {joke}
    </div>
  );
}

export default App;
