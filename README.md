# Vite + React + Tailwind CSS 템플릿 프로젝트

## 프로젝트 소개
이 템플릿은 모던 프론트엔드 개발을 위한 기본 구조를 제공합니다. Vite, React, Tailwind CSS를 기반으로 하며 효율적인 개발 경험과 최적화된 빌드를 지원합니다.

## 장점 및 특징
- ⚡ **Vite**: 빠른 개발 서버와 최적화된 빌드
- ⚛️ **React 18**: 최신 React 기능 지원
- 🎨 **Tailwind CSS**: 직관적인 유틸리티 기반 CSS 프레임워크
- 📱 **반응형 디자인**: 모바일부터 데스크톱까지 모든 화면 크기 지원
- 🔄 **React Router**: 클라이언트 사이드 라우팅
- 📝 **ESLint**: 코드 품질 유지
- 🇰🇷 **한글 최적화**: Pretendard 및 Noto Sans KR 폰트 기본 지원
- 🧩 **모듈식 구조**: 확장 가능한 프로젝트 구조

## 기술 스택
- Vite v5.1.6+
- React v18.2.0+
- React Router DOM v6.22.2+
- Tailwind CSS v3.4.1+
- ESLint v8.57.0

## 설치 및 시작 방법

### 기본 설치
```bash
# 프로젝트 클론
git clone https://github.com/jeonck/vite-react-tailwind-template.git
cd vite-react-tailwind-template

# 의존성 설치
npm install --legacy-peer-deps
```

### setup.sh 스크립트 사용 (권장)
```bash
# 실행 권한 부여
chmod +x setup.sh

# 기본 설치
./setup.sh

# 클린 설치 (node_modules 완전 삭제 후 재설치)
./setup.sh clean
```

### 개발 서버 실행
```bash
npm run dev
```

## 알려진 문제 및 해결 방법

### Babel 플러그인 오류
간혹 Babel 관련 오류가 발생할 수 있습니다. 다음 명령으로 해결할 수 있습니다:
```bash
npm install --legacy-peer-deps @babel/core @babel/plugin-transform-react-jsx
```

### ESLint 버전 충돌
ESLint v9 알파 버전은 호환성 문제가 있으므로 v8.57.0을 사용하세요.

## 프로젝트 구조
```
/
├── public/              # 정적 파일
├── src/
│   ├── assets/          # 이미지, 폰트 등 에셋
│   ├── components/      # 재사용 가능한 컴포넌트
│   │   ├── navigation/  # 네비게이션 관련 컴포넌트
│   │   ├── home/        # 홈페이지 관련 컴포넌트
│   │   ├── about/       # 소개 페이지 관련 컴포넌트
│   ├── hooks/           # 커스텀 React 훅
│   ├── layouts/         # 레이아웃 컴포넌트
│   ├── pages/           # 페이지 컴포넌트
│   ├── utils/           # 유틸리티 함수
│   ├── App.jsx          # 앱의 루트 컴포넌트
│   ├── main.jsx         # 앱의 진입점
│   └── index.css        # 전역 스타일
└── [설정 파일들]
```

## 실행 예시
```bash
$ ./setup.sh


패키지 설치 중...  

added 403 packages in 19s  
설치 완료! 이제 'npm run dev'로 개발 서버를 시작할 수 있습니다.  
~/ws/claude-project/uplift-dev-method/vite-react-tailwind-template ❯ npm run dev                                

> vite-react-tailwind-template@0.1.0 dev  
> vite  

Port 5173 is in use, trying another one...  
Port 5174 is in use, trying another one...  
Port 5175 is in use, trying another one...  

  VITE v5.4.19  ready in 490 ms  

  ➜  Local:   http://localhost:5173/  
  ➜  Network: use --host to expose  
  ➜  press h + enter to show help  
```  

### 설명  
- 패키지 설치: ./setup.sh 명령어를 실행하여 필요한 패키지를 설치합니다. 설치가 완료되면, 다음 단계로 넘어갈 수 있습니다.  
- 개발 서버 시작: npm run dev 명령어를 사용하여 개발 서버를 시작합니다. 포트 5173이 사용 중일 경우, 다른 포트를 시도합니다.  
- 서버 준비 완료: 서버가 준비되면, 로컬 주소 http://localhost:5173/에서 애플리케이션에 접근할 수 있습니다.  

## 라이센스  
MIT License 
