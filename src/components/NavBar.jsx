import burgerMenu from '../assets/img/burgerMenu.png'

export const NavBar = () => {
    return (
        <>
            <ul className='bg-zinc-300 hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center'>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About Me</a>
                </li>
                <li>
                    <a href='#'>Projects</a>
                </li>
                <li>
                    <a href='#'>Contact</a>
                </li>
            </ul>
            <img className='w-20 h-10 cursor-pointer sm:hidden' src={burgerMenu} alt='Menu Hamburguesa' />
        </>
    )
}

