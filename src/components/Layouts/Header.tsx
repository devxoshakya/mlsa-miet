import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/logo.webp'
import NavBar from '../Nav/Navbar'

const Header = () => {
  return (
    <header className="relative z-50 flex items-center justify-between min-w-full bg-black">
      <Link
        href={'/'}
        className="absolute left-4 h-16 w-24 md:left-10  md:p-0"
      >
        <Image src={Logo} alt='logo' height={200} width={100}  className="mb-16 w-[5rem] md:w-full fill-current" />
      </Link>
      <NavBar />
    </header>
  )
}

export default Header
