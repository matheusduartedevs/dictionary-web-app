import { useEffect, useState } from 'react'
import './Dictionary.css'

const Dictionary = () => {
  const [userWord, setUserWord] = useState('')
  const [word, setWord] = useState('')
  const [phonetics, setPhonectis] = useState('')
  const [partsOfSpeechNoun, setPartsOfSpeechNoun] = useState([])
  const [partsOfSpeechVerb, setPartsOfSpeechVerb] = useState([])
  const [definitionNoun, setDefinitionNoun] = useState([])
  const [definitionVerb, setDefinitionVerb] = useState([])
  const [source, setSource] = useState('')

  const fetchData = async () => {
    try {
      await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`)
        .then(res => res.json())
        .then(data => {
          setWord(data[0].word)
          setPhonectis(data[0].phonetics[1].text)
          setPartsOfSpeechNoun(data[0].meanings[0].partOfSpeech)
          setPartsOfSpeechVerb(data[0].meanings[1].partOfSpeech)
          setDefinitionNoun(data[0].meanings[0].definitions[0].definition)
          setDefinitionVerb(data[0].meanings[1].definitions[0].definition)
          setSource(data[0].sourceUrls)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className="main">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Type the word' className='input' value={userWord} onChange={(e) => setUserWord(e.target.value)} />
      </form>

      <div className="word-area">
        <h2 className="word">{word}</h2>
        <h4 className="pronunciation">/{phonetics}/</h4>

        <div className="meaning-area">
          <div className="class-word">
            <p className='class'>{partsOfSpeechNoun}</p>
            <hr className='side-line' />
          </div>
          <p className='meaning'>Meaning</p>

          <ul>
            {definitionNoun}
          </ul>

          <div className="class-word">
            <p className='class'>{partsOfSpeechVerb}</p>
            <hr className='side-line' />
          </div>
          <p className='meaning'>Meaning</p>
          <ul>
            <li>{definitionVerb}</li>
          </ul>
        </div>

        <p className='source'>Source <a href={source}>{source}</a></p>
      </div>
    </main>
  )
}

export default Dictionary