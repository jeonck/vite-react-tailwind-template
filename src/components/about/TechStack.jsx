const TechItem = ({ name, logo, description, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition"
    >
      <div className="text-4xl mb-4">{logo}</div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </a>
  );
};

const TechStack = () => {
  const technologies = [
    {
      name: 'Vite',
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 257"
        >
          <defs>
            <linearGradient id="logoVite" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
              <stop offset="0%" stopColor="#41D1FF" />
              <stop offset="100%" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
          <path
            fill="url(#logoVite)"
            d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
          />
        </svg>
      ),
      description: '빠른 개발 서버와 최적화된 빌드 도구',
      url: 'https://vitejs.dev',
    },
    {
      name: 'React',
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="#61DAFB"
        >
          <path d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 001.363 3.578l.101.213-.101.213a23.307 23.307 0 00-1.363 3.578l-.133.467zm5.992.75l-.213.016h-.021a.75.75 0 01-.02 0h-.004a11.094 11.094 0 01-2.32-.62.75.75 0 01-.154-.11 24.85 24.85 0 01-2.05-2.544.75.75 0 01-.048-.059c-.822-1.043-1.58-2.242-2.21-3.494-.63-1.252-1.136-2.468-1.508-3.56a.75.75 0 01-.034-.142A9.741 9.741 0 015.32 8.946a.75.75 0 01.025-.027c.137-.143.273-.287.411-.43l.016-.016a24.953 24.953 0 012.025-1.85.75.75 0 01.042-.035c.675-.53 1.32-.983 1.918-1.358l.278-.17a.75.75 0 01.168-.075c.21-.082.418-.155.62-.22h.01l.013-.003a.75.75 0 01.208-.026c.286-.028.576-.044.868-.044.292 0 .582.016.868.044a.75.75 0 01.208.026l.013.003h.01c.202.065.41.138.62.22a.75.75 0 01.168.075l.278.17c.598.375 1.243.828 1.918 1.357a.75.75 0 01.042.036 24.953 24.953 0 012.025 1.849l.016.016c.138.143.274.287.41.43a.75.75 0 01.026.027 9.741 9.741 0 014.448 3.454.75.75 0 01-.034.142c-.372 1.092-.877 2.308-1.508 3.56-.63 1.252-1.388 2.45-2.21 3.494a.75.75 0 01-.048.06 24.85 24.85 0 01-2.05 2.543.75.75 0 01-.154.11 11.094 11.094 0 01-2.32.62h-.004a.75.75 0 01-.02 0h-.021l-.213-.016z" />
        </svg>
      ),
      description: '강력한 UI 컴포넌트 라이브러리',
      url: 'https://reactjs.org',
    },
    {
      name: 'Tailwind CSS',
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="#06B6D4"
        >
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      ),
      description: '유틸리티 기반 CSS 프레임워크',
      url: 'https://tailwindcss.com',
    },
    {
      name: 'React Router',
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="#CA4245"
        >
          <path d="M12 9a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM12 4c2.2 0 4.3.4 6.14 1.54L12 22 5.86 5.54A13.89 13.89 0 0112 4zm0-2C7.3 2 3.2 4.13 1.44 7.49a1 1 0 00-.11.84l6.35 17.34a1 1 0 001.74.19l2.58-4.43 2.58 4.43a1 1 0 001.74-.19l6.35-17.34a1 1 0 00-.11-.84C20.8 4.13 16.7 2 12 2z" />
        </svg>
      ),
      description: '리액트 기반 라우팅 라이브러리',
      url: 'https://reactrouter.com',
    },
    {
      name: 'ESLint',
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="#4B32C3"
        >
          <path d="M7.257 9.132L12 6.475l4.743 2.657-4.743 2.657-4.743-2.657zm7.515 3.632l-2.772-1.542v6.239l5.143-2.857V8.336l-2.371 1.344v3.084zm-5.029-1.542l-2.772 1.542V11.68l-2.371-1.344v6.278l5.143 2.857V11.222zM19.714 6.7L12 2 4.286 6.7l7.714 4.699L19.714 6.7z" />
        </svg>
      ),
      description: '자바스크립트 코드 품질 도구',
      url: 'https://eslint.org',
    },
    {
      name: 'Babel',
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="#F9DC3E"
        >
          <path d="M15.794 10.296h1.428a1 1 0 110 2h-1.428a1 1 0 110-2zm-5 0h1.429a1 1 0 110 2h-1.429a1 1 0 110-2zm-5 0h1.429a1 1 0 110 2H5.794a1 1 0 110-2zm9.319-4.075l1.428.357a1 1 0 11-.485 1.94l-1.428-.357a1 1 0 01.485-1.94zm-7.214 1.8l1.429-.357a1 1 0 01.485 1.941l-1.429.357a1 1 0 11-.485-1.94zm11.198-2.1a12 12 0 00-20.994 8.002 1 1 0 01-1.982-.246A14 14 0 0116.597 3.938l.98 3.912a1 1 0 01-1.94.485L14.653 4.4a12.002 12.002 0 00-8.861 4.614 1 1 0 01-1.543-1.27 14.003 14.003 0 019.213-5.125 14 14 0 0118.312 11.122 1 1 0 01-1.983.246 12 12 0 00-5.45-9.066z" />
        </svg>
      ),
      description: '자바스크립트 컴파일러',
      url: 'https://babeljs.io',
    },
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">기술 스택</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          이 템플릿에 사용된 최신 웹 기술들을 살펴보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <TechItem
            key={index}
            name={tech.name}
            logo={tech.logo}
            description={tech.description}
            url={tech.url}
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack;