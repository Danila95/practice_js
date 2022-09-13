import './App.css';
import {useState} from 'react'
import Forma from './Form';
import dataContext from './context'

const {Provider} = dataContext

function App() {
  const [data, setData] = useState({
    mail: 'name@example.com',
    text: 'some text',
    forseChangeMail: forseChangeMail
  })

  function forseChangeMail() {
    setData({...data, mail: 'test@gmail.com'})
  }

  return (
    <Provider value={data}>
      <Forma text={data.text} />
        <button
          onClick={() => setData({
            mail: 'second@example.com',
            text: 'another text',
            forseChangeMail: forseChangeMail
          })}>
          Click me
        </button>
    </Provider>
  );
}

export default App;
