import { useState }  from 'react'
import './App.css'

const Greeting = ({ phrase, name }) => (
  <h1 className="box">{phrase}, {name}!</h1>
)

const App = () => {
  console.log("Rendering App")
  const [name, setName] = useState('John')
  const [phrase, setPhrase] = useState('Hi')

  const handleNameChange = (event) => {
    console.log("handleNameChange, received event: ", event)
    setName(event.target.value)
  }

  const handlePhraseChange = (event) => {
    console.log("handlePhraseChange, received event: ", event)
    setPhrase(event.target.value)
  }

  return (
    <div>
      <input value={phrase} onChange={handlePhraseChange} />
      <input value={name} onChange={handleNameChange} />
      <Greeting phrase={phrase} name={name} />
    </div>
  )
}

export default App
