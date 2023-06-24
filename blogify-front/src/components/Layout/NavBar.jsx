import { useContext, useState } from 'react';
import logo from '../../assets/quill.svg'
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import CategoryContext from '../../contexts/CategoryContext';

export default function NavBar(){
    const [navOpen, setNavOpen] = useState(false);
	const navigate = useNavigate();
	const { userData } = useContext(UserContext);
	const { categories } = useContext(CategoryContext);
	const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
       <>
        <nav className="relative w-full px-5 py-4 flex justify-between items-center bg-white h-20">
		<a className="text-3xl font-bold leading-none" href="/">
			<img className='h-10' src={logo} alt="logo"></img>
		</a>
		<div className="lg:hidden">
			<button onClick={()=> setNavOpen(!navOpen)} className="navbar-burger flex items-center text-black p-3">
				<svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
			<li><a className="text-base text-black hover:text-gray-500 font-open-sans" href="/">HOME</a></li>
			<li className="text-gray-300"></li>
			<li><a className="text-base text-black hover:text-gray-500 font-open-sans" href="/all">ALL</a></li>
            <li className="text-gray-300"></li>

			<li className='relative'>
				<a onMouseEnter={() => setDropdownOpen(true)} 
				className="text-base text-black hover:text-gray-500 font-open-sans" href="#">CATEGORIES</a>
			</li>
		</ul>

		{dropdownOpen && (
				<div onMouseLeave={() => setDropdownOpen(false)} 
				className="hidden md:block absolute top-11 left-1/2 transform -translate-x-1/2 py-2 mt-2 bg-white rounded shadow-lg max-w-screen-md w-full">
					<div className="md:flex md:flex-wrap">
						{categories?.map((category) => (
						<div key={category.id} className="w-1/2 md:w-1/4">
							<a
							className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
							href={`/category/${category.id}`}
							>
							{category.name}
							</a>
						</div>
						))}
					</div>
				</div>
			)}
		




		{userData?.user ? <p onClick={()=> navigate('/me')} className='hidden cursor-pointer lg:inline-block lg:ml-auto text-base text-black text-bold font-lora'>{userData.user.username}</p> : 
			<>
				<a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 hover:text-beige-600 hover:border-beige-600 text-sm text-beige-700 font-bold transition duration-200 border-solid border border-beige-700" href="/sign-in">SIGN IN</a>
		<a className="hidden lg:inline-block py-2 px-6 bg-beige-700 hover:bg-beige-600 text-sm text-white font-bold transition duration-200" href="/sign-up">SIGN-UP</a>
			</>
		}
		
	</nav>
	<div className={`navbar-menu z-50 relative ${navOpen ? '' : 'hidden'}`}>
		<div onClick={()=> setNavOpen(!navOpen)} className={`navbar-backdrop fixed inset-0 bg-gray-800 opacity-25`}></div>
		<nav className={`fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto ease-in-out duration-1000 ${navOpen ? "translate-x-0 " : "translate-x-full"}`}>
			<div className="flex items-center mb-8">
				<a className="mr-auto text-3xl font-bold leading-none" href="#">
                    
				</a>
				<button onClick={()=> setNavOpen(!navOpen)} className="navbar-close">
					<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-beige-500 hover:text-white rounded" href="/">Home</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-beige-500 hover:text-white rounded" href="/all">All</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-beige-500 hover:text-white rounded" href="#">Categories</a>
					</li>
	
				</ul>
			</div>
			<div className="mt-auto">
				{userData?.user ? 
					<p className='text-base mb-4 text-center text-gray-500'>Logged in as: <span className='cursor-pointer font-lora font-semibold' onClick={()=> navigate('/me')}>{userData.user.username}</span></p>
				: 
					<div className="pt-6">
						<a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  hover:text-beige-600 hover:border-beige-600 text-beige-700 transition duration-200 border-solid border border-beige-700" href="/sign-in">SIGN IN</a>
						<a className="block px-4 py-3 mb-2 leading-loose text-xs text-center bg-beige-700 hover:bg-beige-600 text-white font-bold transition duration-200" href="/sign-up">SIGN UP</a>
					</div>
				}
				<p className="my-4 text-xs text-center text-gray-400">
					<span>Copyright © 2023</span>
				</p>
			</div>
		</nav>
	</div>
       </>
    );
}