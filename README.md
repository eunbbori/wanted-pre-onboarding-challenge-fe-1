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
|**api**|axios 인스턴스 및 api|
|**components**|Button,Dialog 등 전역적으로 사용되는 tsx파일|
|**context**|token과 같이 전역적으로 관리돼야할 상태|
|**hook**|해당 컴포넌트 내에서 쓰이는 로직 관련한 커스텀 훅|
|**pages**|최종적으로 화면에 나타나는 페이지 및 폴더 보관. 특정 페이지 내에서만 사용되는 component는 따로 분리|
|**styles**|font 및 global theme 색상|
|**type**|typescript interface|
|**utils**|특정 기능에 종속되지 않거나 전역적인 1~2줄의 간단한 hook 및 상수|

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

## COMMIT 기록
### react-hook-form 라이브러리를 활용해 form 유효성 검사 

- 이전에 진행했던 프로젝트 중 게시판 글쓰기 페이지( [코드 보기](https://github.com/eunbbori/TripMatch/blob/main/client/src/pages/MatchPostWrite/MatchPostWrite.tsx) )에서 useRef를 활용해 비제어 컴포넌트로 폼을 다뤘습니다. 

- 그럴 수 있었던 이유는 
  - 첫째로 사용자가 입력한 값과 저장되는 값이 실시간으로 동기화 될 이유가 없었습니다. 
  - 둘째로 인원수가 최소 1명이거나, 모든 input에 값이 필수로 입력돼야하는 것 이외에 유효성 검사가 크게 필요한 페이지는 아니었습니다. 
 
- 만약 이 form의 약 10개 가량의 input 값들이 실시간으로 검증되고 관리돼야한다면 코드가 굉장히 길어질 수 밖에 없겠다는 생각을 하고 약간의 안도감(?)을 느꼈습니다. 

- 그래서 이번 회원가입 form을 구현할 때 **너무 많은 state와 함수가 담기지 않고 컴포넌트의 랜더링 횟수도 최소화 할 수 있는 방법을 찾아보다가** react-hook-form 라이브러리를 활용하게 됐습니다.    
- [커밋보기](e963194)

### React-Query 적용 

- RTK-query 와 React-query 의 공통점 
  - 서버의 데이터를 받아와 효율적으로 캐싱하는 서버 데이터 상태관리 라이브러리
  - 서버와의 통신 과정에서 로딩 상태, 에러 여부 등을 관련 컴포넌트 내부에서 직접 상태를 작성해 관리하지 않아도 된다
  - 자동 데이터 캐싱을 통해 서버의 부담을 줄일 수 있다
  - 일정 시간이 지나거나 데이터 변동이 생겼을 때 자동으로 캐시된 데이터를 제거하고 다시 받아와 유저에게 최신 데이터를 보여줄 수 있다 

- 초반에 RTK-query 도입 이유 
  - API 요청부터 데이터를 받아서 바로 Store에 저장하는 단계를 쭉 이어서 처리하기 때문에 Redux에 비해 훨씬 적은 양의 코드로 처리하여 상태 관리를 할 수 있다.
  - HTTP 클라이언트로 기본 제공되는fetchBaseQuery를 사용하여 코드를 더욱 간단하게 작성할 수 있다
  - 전체 API를 보통 한곳에 정의하기 때문에 여러개의 커스텀 hooks들이 다른 파일들에 있는 것 보다 한곳에 위치하는게 요청, 캐시 무효화, 공통 앱 설정을 관리하기가 더욱 쉽다 [(공식문서)](https://junsangyu.gitbook.io/rtk-query/tutorial)
 
- React-query 전환 이유 
  - RTK-query 보다 참고자료가 많다 
  - 리덕스 기반이 아니기 때문에 Boilerplate 양이 현저히 적었다  [(RTK쿼리 적용 커밋)](4095d9d21c75c8606d59b37cd0bae8d4b962eb35) 
    - 불필요한 작업이 필요없어짐과 동시에 소스코드의 복잡성을 낮추어 유지보수의 용이성을 높였다
  - API 상태와 관련된 다양한 데이터를 제공하여 복잡한 구현과 설계 없이도 개발자가 효율적으로 화면을 구성할 수 있게 도와준다
    - isError,isFetched,isLoading,isRefetching,isStale 등 
- [React쿼리 적용 커밋](d4b50c57e5facc94e9e1327866030ad04e6cbe5e)

### TokenContext 통해 Token 상태 전역 관리 
- 기존 react-query 만으로는 로그인 토큰이 전역으로 관리되지 못해 캐싱이 무효화되지 않는 문제 발생했다.
  - 로그인 후에 새로고침을 해야만 todolist CRUD 에 대한 권한 부여 받음
- contextAPI로 token을 전역 관리 후 문제를 해결했다.
- [커밋 보기](https://github.com/eunbbori/wanted-pre-onboarding-challenge-fe-1/commit/b2306296007e303df3076b9984bc760fe5b9b7cb)

### 삭제/제출에 대한 확인 처리

- 파괴적 버튼
  - 로그아웃,삭제 등 되돌리기 어렵거나 불가능한 경우에 AlertDialog 띄웠습니다.
  - [커밋보기](cb3465114c46c49b1a81891dcd8591d4b253c885)
- onbeforeunload 
  - 입력이 많은 form(회원가입,할일 추가 등) 페이지에서 사용자가 입력 중일때 실수로 창을 끄거나 새로고침 동작을 할 경우 정말로 페이지를 이동할 지에 대한 경고창 띄웠습니다.
  - [커밋보기](f0f1b04acd20632affc165ff0fd644307579206a)

## 프로젝트 진행 시 주안점 
다른 사람이 보더라도 쉽게 읽히고 이해가 가는 가독성에 주안점을 두고 코드를 작성하려했습니다. 또한 처음으로 React-Query를 학습해봄으로써 CRUD 기본 응용을 오류 없이 완성하는 것이 목표였습니다.

## 한계점 및 개선 사항 
- 유저 인터페이스(View)와 비즈니스(Business, Domain) 로직을 분리하여 코드를 리팩토링 할 것 
- 리액트 쿼리가 제공하는 다양한 데이터들을 50% 이상 활용할 것 
- 현재는 React Query의 onError만을 사용하여 간단한 오류 메시지를 alert 하지만, Error Boundaries를 학습해 Error Handling 설계 및 적용할 것 [(공식문서)](https://tkdodo.eu/blog/react-query-error-handling)
- suspense를 통한 로딩 처리 
