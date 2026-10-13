# Git/GitHub (1) <br> <br> 

## 1. Git / GitHub
### Git & GitHub를 사용해야하는 이유
체계적인 버전 관리, 효율적인 협업, 그리고 안전한 백업을 위해서 꼭 필요하다. 언제, 누가, 무엇을 바꿨는지 알 수 있고 필요하면 과거 상태로 되돌릴 수 있다.
### Git과 GitHub의 차이
- git <br>
버전 관리를 위한 도구 (프로그램) <br>
내 컴퓨터에서 동작함

- github <br>
git 저장소를 올려두는 웹 서비스 <br>
코드 공유 및 협업 플랫폼
-> git은 버전 관리 엔진, github는 협업과 공유를 위한 서비스이다.

### Repository
레포지토리는 파일과 그 변경 이력을 함께 관리하는 저장소로, 프로젝트 전체와 모든 버전 기록이 들어있음
- 로컬 저장소: 내 컴퓨터에 있는 저장소
- 원격 저장소: 깃허브 같은 서버에 있는 저장소

### Commit
커밋은 변경사항을 하나의 기록으로 저장하는 단위(=하나의 버전)
커밋 생성시 메시지에 무엇을 왜 바꾸었는지 남김 <br>
**git commit -m "메시지 입력"**  <br>
-m을 하지 않는 경우 vim에서 메시지 작성

### Branch
브랜치는 독립적으로 작업할 수 있는 작업 공간임
- 기존 코드를 건드리지 않고 기능 개발 가능
- 여러 기능을 동시에 개발할 수 있음
- 작업이 끝난 후 맘에 들면 병함(merge)함

**git branch feat/login** -> 브랜치 생성호 <br>
**git switch feat/login** -> 브랜치 전환

<br><br>

## 2.  git 기본 명령어
### git config
git의 기본 동작을 설정하는 명령어
- 전역 설정: 모든 저장소에 적용<br>
**git config --global user.name "홍시윤"** <br>
**git config --global user.email "zxc@zxc.com"**

- 로컬 설정: 특정 저장소에만 적용, 프로젝트나 다른계정이나 역할을 써야할 때 사용 (회사용 개인용 구분) <br>
**git config user.name "홍길동"**  <br>
**git config user.email "zxc@zxc.com"**

### git init
현재 폴더를 git 레포지토리로 초기화하며, .git 폴더가 생성되며, 현재 폴더를 기준으로 버전관리 시작함 <br>
**git init**

### git status
현재 레포지토리의 상태를 확인하며, 수정된 파일, 스테이징 여부, 커밋 가능한 변경 사항을 확인함 <br>
**git status**

### git add
변경된 파일을 Staging Area로 올리는 명령어 <br>
커밋에 포함할 변경 사항을 선택하는 단계<br>
아직 커밋이 생성된 것은 아님<br>
**git add 파일명**

### git commit
Staging Area에 있는 변경사항을 하나의 버전으로 기록하며, 되돌릴 수 있는 기준점 역할을 함. 게임에서 save point 같은 것 <br>
**git commit -m "메시지 입력"**

### git push
로컬 커밋을 원격 저장소로 올림
**git push origin main**  

### git pull
원격 저장소에 있는 변경사항을 내려받아 로컬에 반영
**git pull**

<br><br>

## 3. Branch
### git branch 명령어
**git branch** -> 브랜치 목록 확인 <br>
**git branch feat/login** -> 브랜치 생성 <br>
**git switch feat/login** -> 브랜치 전환 <br>

### 브랜치 관리(main, develop, feature, hotfix, release)
브랜치 관리 전략은 어떻게 브랜치를 나누고 합칠지에 대한 약속임
- main: 배포 가능한 안정 버전
- dev: 개발 중인 기능을 테스트하는 버전
- feature/* : 기능 개발
- hotfix/*: 긴급 수정

### Fast-forward
merge 시 단순히 커밋 포인터만 이동하며, 브랜치가 직선으로 이어짐

### 3-way merge (Merge conflict)
브랜치가 갈라졌다가 다시 merge하는 경우 새로운 병합 커밋이 생성됨 <br>
- 자동병합이 가능한 경우 -> 자동으로 병합커밋 생성하여 merge됨
- 자동병합이 불가능한 경우 -> conflict 발생 -> 사용자가 충돌 파일 확인 후 충돌 코드를 직접 수정함 -> 새로운 커밋 생성
