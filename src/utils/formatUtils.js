/**
 * 날짜 포맷팅 함수
 * @param {Date|string|number} date - 포맷팅할 날짜 객체, 문자열 또는 타임스탬프
 * @param {string} format - 날짜 포맷 (기본값: YYYY-MM-DD)
 * @returns {string} 포맷팅된 날짜 문자열
 */
export const formatDate = (date, format = 'YYYY-MM-DD') => {
  const d = date instanceof Date ? date : new Date(date);
  
  if (isNaN(d.getTime())) {
    console.error('Invalid date:', date);
    return 'Invalid date';
  }

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');

  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
};

/**
 * 숫자를 통화 형식으로 포맷팅하는 함수
 * @param {number} value - 포맷팅할 숫자
 * @param {string} locale - 로케일 (기본값: ko-KR)
 * @param {string} currency - 통화 코드 (기본값: KRW)
 * @returns {string} 포맷팅된 통화 문자열
 */
export const formatCurrency = (value, locale = 'ko-KR', currency = 'KRW') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

/**
 * 텍스트를 주어진 길이로 자르고 말줄임표를 추가하는 함수
 * @param {string} text - 자를 텍스트
 * @param {number} maxLength - 최대 길이
 * @returns {string} 잘린 텍스트
 */
export const truncateText = (text, maxLength) => {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * 두 날짜 사이의 일수를 계산하는 함수
 * @param {Date|string|number} startDate - 시작 날짜
 * @param {Date|string|number} endDate - 종료 날짜
 * @returns {number} 일수
 */
export const getDaysBetween = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

/**
 * 숫자에 천 단위 구분자를 추가하는 함수
 * @param {number} number - 포맷팅할 숫자
 * @returns {string} 포맷팅된 숫자 문자열
 */
export const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};