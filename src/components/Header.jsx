import { NavBar } from "./NavBar"
import logosc from '../assets/img/logosc.png'

export const Header = () => {
  return (
    <header className='flex place-content-between items-center'>
        <img className='w-[200px] h-[200px]' src={logosc} alt="Logo SC" />
        <NavBar/>
    </header>
  )
}