import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-500 to-secondary-600 py-20 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 to-secondary-600/30 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Vite + React + Tailwind CSS
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
            빠르고 모던한 웹 개발을 위한 최적의 프론트엔드 템플릿으로 시작하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="px-6 py-3 rounded-lg bg-white text-primary-600 font-semibold shadow-lg hover:bg-gray-100 transition duration-200"
            >
              더 알아보기
            </Link>
            <a
              href="https://github.com/jeonck/vite-react-tailwind-template"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-primary-700 bg-opacity-50 text-white font-semibold border border-white/30 hover:bg-opacity-70 transition duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;