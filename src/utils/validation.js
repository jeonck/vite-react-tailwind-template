/**
 * 이메일 주소 유효성 검사 함수
 * @param {string} email - 이메일 주소
 * @returns {boolean} 유효성 여부
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * 비밀번호 강도 검사 함수
 * @param {string} password - 비밀번호
 * @returns {Object} 비밀번호 강도 정보
 */
export const validatePassword = (password) => {
  if (!password) {
    return {
      isValid: false,
      message: '비밀번호를 입력해주세요.',
      strength: 0,
    };
  }

  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const checks = [
    hasMinLength,
    hasUpperCase,
    hasLowerCase,
    hasNumbers,
    hasSpecialChars,
  ];
  
  const strength = checks.filter(Boolean).length;

  let message = '';
  let isValid = false;

  if (strength < 2) {
    message = '매우 약함: 더 복잡한 비밀번호를 사용하세요.';
  } else if (strength < 3) {
    message = '약함: 대문자, 소문자, 숫자, 특수문자를 조합하세요.';
  } else if (strength < 4) {
    message = '보통: 좋습니다. 더 강화하려면 다양한 문자를 조합하세요.';
    isValid = true;
  } else if (strength < 5) {
    message = '강함: 잘 했습니다.';
    isValid = true;
  } else {
    message = '매우 강함: 완벽한 비밀번호입니다.';
    isValid = true;
  }

  return {
    isValid,
    message,
    strength,
    details: {
      hasMinLength,
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSpecialChars,
    },
  };
};

/**
 * 폼 입력값 유효성 검사 함수
 * @param {Object} values - 폼 입력값 객체
 * @param {Object} rules - 유효성 검사 규칙 객체
 * @returns {Object} 유효성 검사 결과
 */
export const validateForm = (values, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const fieldRules = rules[field];
    const value = values[field];

    // 필수 입력 검사
    if (fieldRules.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
      errors[field] = fieldRules.message || '필수 입력 항목입니다.';
      return;
    }

    // 값이 없는 경우 더 이상 검사하지 않음
    if (value === undefined || value === null || value === '') {
      return;
    }

    // 최소 길이 검사
    if (fieldRules.minLength && value.length < fieldRules.minLength) {
      errors[field] = fieldRules.message || `최소 ${fieldRules.minLength}자 이상 입력해주세요.`;
      return;
    }

    // 최대 길이 검사
    if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
      errors[field] = fieldRules.message || `최대 ${fieldRules.maxLength}자까지 입력 가능합니다.`;
      return;
    }

    // 패턴 검사
    if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
      errors[field] = fieldRules.message || '형식에 맞지 않습니다.';
      return;
    }

    // 이메일 검사
    if (fieldRules.email && !isValidEmail(value)) {
      errors[field] = fieldRules.message || '유효한 이메일 주소를 입력해주세요.';
      return;
    }

    // 커스텀 유효성 검사
    if (fieldRules.validate && typeof fieldRules.validate === 'function') {
      const validateResult = fieldRules.validate(value, values);
      if (validateResult !== true) {
        errors[field] = validateResult || fieldRules.message || '유효하지 않은 값입니다.';
        return;
      }
    }
  });

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

/**
 * 숫자만 입력되었는지 확인하는 함수
 * @param {string} value - 검사할 값
 * @returns {boolean} 유효성 여부
 */
export const isNumeric = (value) => {
  return /^[0-9]+$/.test(value);
};

/**
 * 한글만 입력되었는지 확인하는 함수
 * @param {string} value - 검사할 값
 * @returns {boolean} 유효성 여부
 */
export const isKorean = (value) => {
  return /^[ㄱ-ㅎ가-힣]+$/.test(value);
};