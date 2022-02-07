# Lezhin Coding Interview

## 개발 환경 구성, 확인 방법

1. [Node.js](https://nodejs.org/ko/download/)를 다운로드합니다.

2. package를 설치합니다.

   ```bash
   npm install
   ```

3. 개발서버를 실행합니다.

   ```bash
   npm run dev
   ```

4. [http://localhost:3000/comics/romance](http://localhost:3000/comics/romance) 주소로 접속합니다.

## 개발 환경 적용한 이유

- 빠른 세팅을 위해 **Create Next App**으로 개발 환경을 세팅했습니다.

  ```bash
  npx create-next-app --use-npm --example "https://github.com/vercel/next.js/tree/canary/examples/with-redux" .
  ```

  - Next.js: api server와 client 환경을 동시에 구축하고 실행하기 위해 사용하였습니다.

  - Redux Toolkit: Redux 개발사에서 공식적으로 지원하고, Redux의 Best Practice를 하기 위해 사용하였습니다.

- Prettier: 코드 스타일 통일성을 위해 사용하였습니다.

- husky and lint-staged: Git Hook으로 Prettier를 적용하기 위해 사용하였습니다.

- Axios: 익숙하고 손쉽게 api 통신하고 json data 형태로 파싱 하기 위해 사용하였습니다.

- Font Awesome: 아이콘을 적용하기 위해 사용하였습니다.
