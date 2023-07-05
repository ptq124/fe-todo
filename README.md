# fe-todo

### 기능요구사항

- todo리스트 출력
  - 전체 todo리스트 출력
  - 상태(todo, doing, done)에 따른 todo리스트 출력
- todo 추가
  - 새로운 todo를 입력받아 기존의 todo리스트에 저장
  - 새로운 todo입력시 상태 표시가능(기본값: todo)
- todo 삭제
  - id를 입력받아 todo 목록 삭제
- todo 수정
  - id를 입력받아 todo 목록 업데이트
- 지원하는 명령어 유형: show add delete update

### 디렉토리 구조

- todo.js (todo 데이터)
- grade.js (명령어를 입력받는 곳)
- command
  - addTodos.js (todo 목록에 새로운 todo를 추가)
  - updateTodos.js (todo 목록에 특정 todo 업데이트)
  - deleteTodos.js (todo 목록에 특정 todo 삭제)
  - showTodos.js (status에 따라서 현재 상태 출력)
- utils
  - util.js
  - todoPrint.js (현재상태출력, 상태리스트출력)

### 명령어 입력 유형

- show/’status’
- add/’name’/’tags’/’status’
  - add의 status 값의 기본값은 ‘todo’ (예외사항: 사용자가 doing, done을 입력할 수 있음)
  - id값은 랜덤하게 생성.
- delete는 id값만 필요함 delete/’id’
- update/’id’/’status’

### todo 데이터 타입

**{**

**'name': '자바스크립트 공부하기' ,**

**'tags': ['programming', 'javascript']**

**'status': 'todo'**

**'id' : 12123123**

**}**
