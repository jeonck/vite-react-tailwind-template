const AboutHeader = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
        프로젝트 소개
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Vite, React, Tailwind CSS를 기반으로 한 모던 프론트엔드 템플릿을 소개합니다.
        빠른 개발 경험과 확장 가능한 구조로 효율적인 웹 개발을 시작하세요.
      </p>
      <div className="w-24 h-1 bg-primary-600 mx-auto mt-8"></div>
    </div>
  );
};

export default AboutHeader;