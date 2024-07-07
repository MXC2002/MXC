import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { useState } from 'react';
import AuthModal from './AuthModal';

export default function Header() {

  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='flex md:text-xl text-lg self-center whitespace-nowrap font-bold dark:text-white ml-2'>
        <img src={logo} alt="logo" className='mr-1 h-10 rounded-full object-contain' />
        <span className='self-center'>MXC</span>
      </Link>
      <form>
        <TextInput type='text' placeholder='Tìm kiếm...' rightIcon={AiOutlineSearch} className='hidden lg:inline' />
      </form>
      <Button className='w-12 h-10 lg:hidden' color="gray" pill>
        <AiOutlineSearch className='self-center' />
      </Button>
      <div className='flex gap-5 mr-2'>
        <Button className='w-12 h-10 hidden sm:inline' color="gray" pill>
          <FaMoon />
        </Button>
        <div className="relative text-3xl self-center mr-1 cursor-pointer">
          <IoCartOutline />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-center" >
            <p className='text-sm'>0</p>
          </div>
        </div>
        <Button gradientDuoTone="purpleToBlue" outline onClick={() => setShowAuthModal(true)}>
          Đăng nhập
        </Button>
      </div>
      {
        showAuthModal && (
          <AuthModal show={showAuthModal} onClose={() => setShowAuthModal(false)} />
        )
      }
    </Navbar>
  )
}
