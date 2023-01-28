## wanted-pre-onboarding-challenge-fe-1

## 전체 구현 Preview
<img src="https://user-images.githubusercontent.com/112812483/215269690-3db7fff4-ecfa-4f7a-b675-231d936c8f91.gif" width="100%" height="30%">

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

## 기능별 구현 화면 
### AUTH - Login / SignUp
1) SignUp ( 회원가입 )
<img src="https://user-images.githubusercontent.com/112812483/215271521-29ef4739-089e-4fa3-85df-a74e000c62d2.gif" width="100%" height="30%">

2) Login ( 로그인 ) 

<img src="https://user-images.githubusercontent.com/112812483/211202468-f937ef88-1e00-4c64-a855-70fe3117df90.gif" width="60%" height="30%">

### TODO - CRUD

1) Todo 추가 
<img src="https://user-images.githubusercontent.com/112812483/211202943-5a096f32-5f36-4a15-9d46-66d378247547.gif" width="60%" height="30%">

2) Todo List / Detail 조회

<img src="https://user-images.githubusercontent.com/112812483/211203022-d9cc4b19-e3ef-442c-acc3-389de5bce0c6.gif" width="60%" height="30%">

3) Todo 삭제 

<img src="https://user-images.githubusercontent.com/112812483/211203062-57f00c42-f185-4537-8259-8917be5a519c.gif" width="60%" height="30%">

4) Todo 수정

<img src="https://user-images.githubusercontent.com/112812483/211203112-9b1a6c88-06f1-4ac4-b57d-7369b62baa2f.gif" width="60%" height="30%">

