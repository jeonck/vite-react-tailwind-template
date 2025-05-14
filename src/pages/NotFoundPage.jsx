import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] flex-col px-4">
      <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
      <h2 className="text-2xl mb-6 text-center">페이지를 찾을 수 없습니다</h2>
      <p className="mb-8 text-center text-gray-600 max-w-lg">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <Link 
        to="/" 
        className="btn btn-primary"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFoundPage;