import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // 로컬 스토리지에서 값을 가져오는 함수
  const getStorageValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  // 상태 초기화
  const [storedValue, setStoredValue] = useState(getStorageValue);

  // 상태를 업데이트하고 로컬 스토리지에도 반영하는 함수
  const setValue = (value) => {
    try {
      // 함수일 경우 함수를 실행한 결과값 사용
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // 상태 업데이트
      setStoredValue(valueToStore);
      
      // 로컬 스토리지에 저장
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // 다른 탭이나 창에서 로컬 스토리지가 변경된 경우 동기화
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key) {
        try {
          setStoredValue(e.newValue ? JSON.parse(e.newValue) : initialValue);
        } catch (error) {
          console.error(`Error handling storage change for key "${key}":`, error);
        }
      }
    };

    // 이벤트 리스너 등록
    window.addEventListener('storage', handleStorageChange);

    // 클린업 함수
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, initialValue]);

  return [storedValue, setValue];
};

export default useLocalStorage;