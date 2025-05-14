import { useCallback } from 'react';

/**
 * 페이지 최상단으로 스크롤하는 함수를 반환하는 커스텀 훅
 * @param {Object} options 스크롤 옵션
 * @param {('auto'|'smooth')} options.behavior 스크롤 동작 방식
 * @returns {Function} 페이지 최상단으로 스크롤하는 함수
 */
const useScrollToTop = (options = { behavior: 'smooth' }) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, ...options });
  }, [options]);

  return scrollToTop;
};

export default useScrollToTop;