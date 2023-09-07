import './Dictionary.css'

const Dictionary = () => {
  return (
    <main className="main">
      <input type="text" placeholder='Type the word' className='input' />

      <div className="word-area">
        <h2 className="word">Keyboard</h2>
        <h4 className="pronunciation">/lorem/</h4>

        <div className="meaning-area">
          <div className="class-word">
            <p className='class'>noun</p>
            <hr className='side-line' />
          </div>
          <p className='meaning'>Meaning</p>



          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum totam expedita corporis tenetur suscipit quidem quia labore. Nulla, iste.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum totam expedita corporis tenetur suscipit quidem quia labore. Nulla, iste.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum totam expedita corporis tenetur suscipit quidem quia labore. Nulla, iste.</li>
          </ul>

          <div className="class-word">
            <p className='class'>verb</p>
            <hr className='side-line' />
          </div>
          <p className='meaning'>Meaning</p>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum totam expedita corporis tenetur suscipit quidem quia labore. Nulla, iste.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum totam expedita corporis tenetur suscipit quidem quia labore. Nulla, iste.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum totam expedita corporis tenetur suscipit quidem quia labore. Nulla, iste.</li>
          </ul>
        </div>

        <p className='source'>Source <a href="https://pt.wikipedia.org/wiki/Sacr%C3%A1rio">https://pt.wikipedia.org/wiki/Sacr%C3%A1rio</a></p>
      </div>
    </main>
  )
}

export default Dictionary