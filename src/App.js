import './App.css';
import axios from 'axios'

function App() {


  const handleClick = () => {
    axios({
      method: "GET",
      url: "/fnk"
    })
      .then(res => console.log(res))
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click me to get some JSON!</button>
    </div>
  );
}

export default App;
