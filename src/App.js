import './App.css';
import {useState} from 'react'

import Controls from './components/Controls/Controls'
import About from './components/About/About'

function App() {

  let [wpm, setWpm] = useState(120)
  let [words, setWords] = useState('')
  let [wordsArray, setWordsArray] = useState([])
  let [wordIndex, setWordIndex] = useState(0)
  let [word, setWord] = useState('Waiting...')
  let [isReading, setIsReading] = useState(false)
  let [timeOutArray, setTimeOutArray] = useState([])

  let [showAbout, setShowAbout] = useState(true)

  let toggleAbout = (event) => {
    let target = event.target.id
    if (target === 'about-close-button' || target === 'about-close-icon' || target === 'about-open-button' || target === 'about-container'){
      let current = showAbout
      setShowAbout(!current)
    }
  }


  let increment = (words, index) => {
    setWord(words[index]);
    setWordIndex(index);

    if(words.length - 1 === index){
      setIsReading(false)
      setWordIndex(0);
      setWordsArray([])
    }
  }

  let clearTimeouts = () => {
    let clearedTimeouts = timeOutArray
    for( let t = 0; t < wordsArray.length; t++){
      clearTimeout(clearedTimeouts[t])
    }
    setTimeOutArray(clearedTimeouts)
  }

  let onPause = () => {
    clearTimeouts()
    setWordsArray(wordsArray.slice(wordIndex))
    setIsReading(false)
  }

  let playPausePressed = () => {
    console.log("isReading: " + isReading)
    if (isReading) {
      onPause()
    } else {
      setIsReading(true)
      startReading()
    }
  }

  let resetPressed = () => {
    console.log("reset")
    clearTimeouts()
    setIsReading(false)
    setWordsArray([])
    setWord('Waiting...')
  }

  let startReading = () => {
    let readWords = wordsArray

    if(readWords.length === 0){
      readWords = words.trim().split(" ").join(',').split(".").join(',').split("!").join(',').split("?").join(',').split('\n').join(',').split(',')
      setWordsArray(readWords);
    }

    if (readWords.length === 1){
      setWordsArray([])
    } 

    console.log(readWords)
    if (readWords.length !== 0){
      let timeOuts = []
      for(let index = 0; index < readWords.length; index++){
        timeOuts.push(setTimeout( () => increment(readWords, index) , (60000 / wpm) * index));
      }
      setTimeOutArray(timeOuts)
    }
  }

  return (
    <div className="reader">
      <Controls 
        key={wordIndex}
        wpm={wpm} 
        setWpm={setWpm} 
        word={word} 
        isReading={isReading}
        playPausePressed={playPausePressed}
        resetPressed={resetPressed} 
        toggleAbout={toggleAbout}
      />

      <div className="reader-input">
        <h2> Text to be Read: </h2>
        <textarea className="text-input" value={words} onChange={(event) => setWords(event.target.value)} rows="27" cols="72" placeholder="Paste Text Here..."/>
      </div>
      
      {showAbout && <About toggleAbout={toggleAbout} /> }
    </div>
  );
}

export default App;
