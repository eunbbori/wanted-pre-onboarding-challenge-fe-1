## wanted-pre-onboarding-challenge-fe-1

## 전체 구현 Preview
<img src="https://user-images.githubusercontent.com/112812483/215269690-3db7fff4-ecfa-4f7a-b675-231d936c8f91.gif" width="100%" height="30%">

## 실행 방법
### 설치 및 환경세팅
```
git clone https://github.com/eunbbori/wanted-pre-onboarding-challenge-fe-1.git
yarn
```
### 실행
#### client
```
port: 3000
cd client
yarn start
```
#### server
```
port: 8080
cd server
yarn start
```

## 클라이언트 구현 과제 
### Assignment 1 - Login / SignUp
- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - 이메일 조건 : 최소 @, . 포함
  - 비밀번호 조건 : 8자 이상 입력
  - 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### Assignment 2 - Todo List
- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - 목록 / 상세 영역으로 나누어 구현해주세요
  - Todo 목록을 볼 수 있습니다.
  - Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## 사용한 라이브러리 
```javascript
// client/package.json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "@mui/material": "^5.11.4", // mui를 이용하여 빠르고 간단한 Dialog UI 생성
    "@mui/styled-engine-sc": "^5.11.0",
    "@reduxjs/toolkit": "^1.9.1",
    "@tanstack/react-query": "^4.22.0", // server state 관리 
    "@tanstack/react-query-devtools": "^4.22.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.11",
    "@types/react": "^18.0.26",
    "@types/react-dom": "^18.0.10",
    "@types/react-redux": "^7.1.25", // React-query 전환 전에 RTK-query로 server state 관리 
    "axios": "^1.2.1",
    "eslint": "^8.31.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.41.3", // 회원가입,로그인,TODO 추가 등 여러개의 input을 한 번에 관리
    "react-icons": "^4.7.1",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.4.5",
    "react-scripts": "5.0.1",
    "styled-components": "^5.3.6",
    "styled-reset": "^4.4.4",
    "typescript": "^4.9.4",
    "web-vitals": "^2.1.4"
  },
   "devDependencies": {
    "@types/styled-components": "^5.1.26",
    "@typescript-eslint/eslint-plugin": "^5.47.1",
    "@typescript-eslint/parser": "^5.47.1",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jsx-a11y": "^6.6.1",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.31.11",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-simple-import-sort": "^8.0.0",
    "prettier": "^2.8.1"
  }
}
```
## 폴더 구조 
|폴더|용도|
|------|---|
|**api**|테스트2|
|**components**|테스트2|
|**context**|테스트2|
|**hook**|테스트2|
|**pages**|테스트2|
|**styles**|테스트2|
|**type**|테스트2|
|**utils**|테스트2|

```
📦src
 ┣ 📂api
 ┃ ┗ 📜axios.ts
 ┣ 📂components
 ┃ ┣ 📂AppAlertModal
 ┃ ┃ ┣ 📜AppAlertModal.tsx
 ┃ ┃ ┗ 📜AppAlertModalStyle.tsx
 ┃ ┣ 📂AppButton
 ┃ ┃ ┣ 📜AppButton.tsx
 ┃ ┃ ┗ 📜AppButtonStyle.tsx
 ┃ ┣ 📂AppDialog
 ┃ ┃ ┗ 📜AppAlertDialog.tsx
 ┃ ┗ 📂AppLabel
 ┃ ┃ ┣ 📜AppLabel.tsx
 ┃ ┃ ┗ 📜AppLabelStyle.tsx
 ┣ 📂context
 ┃ ┣ 📜TokenContext.ts
 ┃ ┗ 📜TokenProvider.tsx
 ┣ 📂hook
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜useLogin.ts
 ┃ ┃ ┗ 📜useSignUp.ts
 ┃ ┗ 📂todo
 ┃ ┃ ┣ 📜useAddTodo.ts
 ┃ ┃ ┣ 📜useDeleteTodo.ts
 ┃ ┃ ┣ 📜useGetAllTodo.ts
 ┃ ┃ ┣ 📜useGetDetailTodo.ts
 ┃ ┃ ┗ 📜useUpdateTodo.ts
 ┣ 📂pages
 ┃ ┣ 📂Auth
 ┃ ┃ ┣ 📂Login
 ┃ ┃ ┃ ┣ 📜Login.tsx
 ┃ ┃ ┃ ┗ 📜LoginStyle.tsx
 ┃ ┃ ┗ 📂Register
 ┃ ┃ ┃ ┣ 📜Register.tsx
 ┃ ┃ ┃ ┗ 📜RegisterStyle.tsx
 ┃ ┗ 📂Todo
 ┃ ┃ ┣ 📂AddTodo
 ┃ ┃ ┃ ┣ 📜AddTodo.tsx
 ┃ ┃ ┃ ┗ 📜AddTodoStyle.tsx
 ┃ ┃ ┗ 📂MainTodo
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜DetailTodo.tsx
 ┃ ┃ ┃ ┃ ┣ 📜DetailTodoStyle.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ItemTodo.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ItemTodoStyle.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ListTodo.tsx
 ┃ ┃ ┃ ┃ ┗ 📜ListTodoStyle.tsx
 ┃ ┃ ┃ ┣ 📜MainTodo.tsx
 ┃ ┃ ┃ ┗ 📜MainTodoStyle.tsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.ts
 ┃ ┣ 📜style.d.ts
 ┃ ┗ 📜Theme.ts
 ┣ 📂type
 ┃ ┣ 📜todoInfo.ts
 ┃ ┗ 📜userInfo.ts
 ┣ 📂utils
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜usePreventLeave.ts
 ┃ ┣ 📜DB_DOMAIN_URL.ts
 ┃ ┣ 📜EMAIL_VALIDATION.ts
 ┃ ┣ 📜queryKeys.ts
 ┃ ┗ 📜TOKEN.ts
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx

```
## 기능별 구현 화면 
### AUTH - Login / SignUp
1) SignUp ( 회원가입 )
<img src="https://user-images.githubusercontent.com/112812483/215271521-29ef4739-089e-4fa3-85df-a74e000c62d2.gif" width="100%" height="30%">

2) Login ( 로그인 ) 
<img src="https://user-images.githubusercontent.com/112812483/215309298-53b78a15-3b0a-4ec8-bd51-8a6ad261f63c.gif" width="100%" height="30%">

3) Logout ( 로그아웃 )
<img src="https://user-images.githubusercontent.com/112812483/215310009-ec1bcba2-fe72-4222-967e-8640d1f5480b.gif" width="100%" height="30%">

### TODO - CRUD

1) Todo 추가 
<img src="https://user-images.githubusercontent.com/112812483/215309475-41c0fd9f-f6b2-49b3-bfab-9d19b1632d02.gif" width="100%" height="30%">

2) Todo List / Detail 조회

<img src="https://user-images.githubusercontent.com/112812483/215309655-5df984b0-2c7f-42ab-b12f-5cbed6de71ed.gif" width="100%" height="30%">

3) Todo 삭제 

<img src="https://user-images.githubusercontent.com/112812483/215309740-e6b35ba5-3b8a-4f88-8595-041187f9b679.gif" width="100%" height="30%">

4) Todo 수정

<img src="https://user-images.githubusercontent.com/112812483/215309922-12497b6e-8695-4853-bdd7-7e037193477d.gif" width="100%" height="30%">

