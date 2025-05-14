import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize.jsx';
import useScrollToTop from '../../hooks/useScrollToTop.jsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = useScrollToTop();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    scrollToTop();
    closeMenu();
  };

  const navLinkClass = ({ isActive }) => 
    `px-3 py-2 rounded-md transition hover:text-primary-600 ${
      isActive ? 'text-primary-600 font-medium' : 'text-gray-700'
    }`;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={handleHomeClick}>
              <img
                className="h-8 w-auto"
                src="/vite.svg"
                alt="Logo"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">React 템플릿</span>
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">메뉴 열기</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink to="/" className={navLinkClass} onClick={handleHomeClick}>홈</NavLink>
            <NavLink to="/about" className={navLinkClass}>소개</NavLink>
            <a 
              href="https://github.com/jeonck/vite-react-tailwind-template" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={navLinkClass({ isActive: false })}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive
                    ? 'bg-primary-100 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
              onClick={handleHomeClick}
            >
              홈
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive
                    ? 'bg-primary-100 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
              onClick={closeMenu}
            >
              소개
            </NavLink>
            <a
              href="https://github.com/jeonck/vite-react-tailwind-template"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={closeMenu}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;