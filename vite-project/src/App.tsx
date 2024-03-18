import { useState } from 'react';
import './App.css'

function App() {
  const [answer, setAnswer] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const getAnswer = async () => {
    const response = await fetch('./.netlify/functions/yesno');
    const data = await response.json();
    console.log(data);
    setAnswer(data.answer);
    setImage(data.image)
  }

  return (
    <div className="App">
      <div className="appHeaderContainer">
        <h1>Yes or No?</h1>
        <button onClick={getAnswer}>Get Answer!</button>
      </div>

      <div className='answerContainer'>
        {image && <img src={image} alt="Image" style={{ width: '350px' }} />}
        <h3>{answer}</h3>
      </div>

    </div>
  )
}

export default App