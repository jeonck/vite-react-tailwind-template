import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-600 opacity-90"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Vite + React + Tailwind CSS 템플릿으로 효율적이고 빠른 개발 경험을 즐기세요.
            최신 웹 기술을 활용한 모던 프론트엔드 프로젝트를 쉽게 시작할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/jeonck/vite-react-tailwind-template"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-white text-primary-600 font-semibold shadow-lg hover:bg-gray-100 transition duration-200"
            >
              GitHub에서 보기
            </a>
            <Link
              to="/about"
              className="px-6 py-3 rounded-lg bg-primary-700 bg-opacity-50 text-white font-semibold border border-white/30 hover:bg-opacity-70 transition duration-200"
            >
              자세히 알아보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;