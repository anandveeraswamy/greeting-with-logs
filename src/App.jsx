import { useState }  from 'react'
import './App.css'

// add default values for phrase and name to handle case when props might be missing
// However, the useState hook can also include a default value, so this is not strictly necessary
const Greeting = ({ phrase = "Hello", name = "Stranger"}) => (
  <h1 className="box">{phrase}, {name}!</h1>
)

const App = () => {
  console.log("Rendering App")
  const [name, setName] = useState('') // removed the default value to test the default value in Greeting
  const [phrase, setPhrase] = useState('') // removed the default value to test the default value in Greeting

  // These functions are no longer needed since we have included the functionality directnly within the event handlers
  /*const handleNameChange = (event) => {
    console.log("handleNameChange, received event: ", event)
    setName(event.target.value)
  }

  const handlePhraseChange = (event) => {
    console.log("handlePhraseChange, received event: ", event)
    setPhrase(event.target.value)
  }*/

  const resetFields = () => {
    setName('Stranger');
    setPhrase('Hi');
  }

  return (
    <div>
      Greeting: <input value={phrase} onChange={(e) => setPhrase(e.target.value)} />
      <p>Phrase length: {phrase.length} characters</p>

      Name: <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Name length: {name.length} characters</p>

      <button onClick={resetFields}>Reset Fields</button>
      {/* Check to see if name or phrase are empty */}
      {name && phrase ? (
          <Greeting phrase={phrase} name={name} />

      ) : (
        <p>Please fill out both fields!</p>
      )}

    </div>
  )
}

export default App
