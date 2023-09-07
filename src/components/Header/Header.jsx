import { PiBookBookmarkThin } from 'react-icons/pi'
import { BsMoon } from 'react-icons/bs'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className="left">
        <PiBookBookmarkThin className='icon book' />
      </div>

      <div className="right">
        <label>
          <input type="checkbox" className='toggle' />
        </label>
        <BsMoon className='icon moon' />
      </div>
    </header>
  )
}

export default Header