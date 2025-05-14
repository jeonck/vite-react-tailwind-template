import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // 윈도우 크기를 가져오는 함수
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // 초기 윈도우 크기 설정
    handleResize();

    // 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 클린업 함수
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;