#!/usr/bin/env bash

# 스크립트가 있는 디렉토리로 이동
cd "$(dirname "$0")"

# 노드 모듈 삭제 (필요한 경우)
if [ "$1" == "clean" ]; then
  echo "기존 node_modules 삭제 중..."
  rm -rf node_modules
  rm -rf package-lock.json
  rm -rf yarn.lock
  rm -rf pnpm-lock.yaml
fi

# 패키지 설치 및 자동 취약점 수정
echo "패키지 설치 중..."
npm install --legacy-peer-deps

# 누락된 babel 패키지 확인 및 설치
if [ ! -d "node_modules/@babel/plugin-transform-react-jsx" ]; then
  echo "@babel/plugin-transform-react-jsx 패키지가 누락되었습니다. 설치 중..."
  npm install --legacy-peer-deps @babel/core @babel/plugin-transform-react-jsx
fi

# 완료 메시지 출력
echo "설치 완료! 이제 'npm run dev'로 개발 서버를 시작할 수 있습니다."