
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center flex-wrap  m-4 md:mx-8'>
  <div className='flex justify-center items-center'>
    <Link to={"/"}>
      <img src="/public/images/logo.png" alt="logo" className='w-8 h-6 md:w-10 md:h-8' />
    </Link>
    <h1 className='text-xl md:text-3xl font-bold'>
    asy<span style={{color:'#00BD5F'}}>Paisa</span>
    </h1>
  </div>

  <div className='flex justify-center items-center gap-2 md:gap-4 mt-2'>
    <button className='capitalize hover:bg-[#ffffff] hover:text-black px-3 py-1 md:px-4 md:py-2 rounded-full border'>
      <Link to={"/signin"}>signIn</Link>
    </button>
    <button className='capitalize px-3 py-1 md:px-4 md:py-2 rounded-full bg-[#FF8081] hover:bg-[#db5c5c]'>
      <Link to={"/signup"}>signUp</Link>
    </button>
  </div>
</div>

            
  )
}

export default Navbar;