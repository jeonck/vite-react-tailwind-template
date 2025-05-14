import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop.jsx';

const Footer = () => {
  const scrollToTop = useScrollToTop();
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4" onClick={scrollToTop}>
              <img
                className="h-8 w-auto"
                src="/vite.svg"
                alt="Logo"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">React 템플릿</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Vite, React, 그리고 Tailwind CSS를 사용하여 구축된 모던 프론트엔드 템플릿입니다.
              빠르고 반응형이며 확장 가능한 웹 애플리케이션을 개발하세요.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">메뉴</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-600 transition" onClick={scrollToTop}>
                  홈
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-600 transition">
                  소개
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">리소스</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://vitejs.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition"
                >
                  Vite
                </a>
              </li>
              <li>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition"
                >
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-600">
            &copy; {year} React 템플릿. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;