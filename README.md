# 영화 추천 웹페이지 제작
## 1. 개발 목표
- 현재 영화 랭킹 및 개인별 선호하는 장르의 영화를 추천하는 기능의 웹페이지를 제작한다.
- API : https://www.themoviedb.org/documentation/api

## 2. 개발 현황
- 제작한 웹페이지 사진
![image](https://user-images.githubusercontent.com/102304870/205879415-2dd5379a-053d-434e-9443-8b230c544434.png)
![image](https://user-images.githubusercontent.com/102304870/205879432-ec039f66-0c07-4181-aece-ec85582c2779.png)
![image](https://user-images.githubusercontent.com/102304870/205879445-abcb6525-232b-4438-b435-d24dd053a986.png)
![image](https://user-images.githubusercontent.com/102304870/205879461-52ed7cf9-8b6c-4a96-8e78-aab18f7490c2.png)

## 3. 웹페이지 접속 링크
http://43.200.84.35:5000 [12월 10일까지 접속 가능]

## 4. 참고 오픈소스 목록
1. https://github.com/YusunPark/Jaram_workshop [웹페이지 기본 구조 관련]
2. https://github.com/pahkey[회원가입 관련]

## 5. 참고 사이트
https://wikidocs.net/81039 [jump to flask]

## 6. 플라스크 설치 및 실행방법
1. 파이썬 설치.
2. 가상환경 진입.
```C
sudo apt install python3-venv
mkdir projects
mkdir venvs
cd venvs
python3 -m venv myproject
```
3. 설치
```C
pip install wheel
pip install flask
pip install flask-migrate
pip install flask-wtf
pip install email_validator
pip install flask-markdown
```
4. 플라스크 실행
```C
export FLASK_APP=pybo
export FLASK_DEBUG=true
flask run
```
- 플라스크가 이미 설치되었다면 3번에서 없는 것만 설치하고 4을 입력한다.
