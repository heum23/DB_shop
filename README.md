
# DB_Shop


<br>

## 🔗 목차

1. [기술스택](#-기술-스택)
2. [기획의도](#-기획-의도)
3. [전체 UI](#-전체-ui)
4. [주요 기능](#-주요-기능들)

   <br>
   <br>

## 🛠 기술 스택

<br>
<br>

<div style="display: flex; gap: 30px; align-items: center;">
  <img src="https://img.shields.io/badge/html5-E34F26?&style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/css3-1572B6?&style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/javascript-F7DF1E?&style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/mysql-4479A1?&style=for-the-badge&logo=mysql&logoColor=white" />
</div>

<br>
<br>

## 📚 기획 의도

<br>
<br>

<div>전에 만들었던 페이지를 로컬에 저장하는게 아닌 DB에 저장하는 방식으로 만들어보기 위해 시작했습니다.</div>

<br>
<br>

## 📐 전체 UI

<br>
<br>

<div style="display: flex; gap: 10px; align-items: center;">
 
![Image](https://github.com/user-attachments/assets/5cee100f-f52f-4cdd-8ef6-d09f4e86b7dc)
 
![Image](https://github.com/user-attachments/assets/029e3791-2584-4931-9050-bb03685c6094)

![Image](https://github.com/user-attachments/assets/85bb4d36-a2ef-4d5b-8cd9-bf7274cefc39)
 
![Image](https://github.com/user-attachments/assets/a6bf6ffa-42af-4ec0-bf1c-05b7d05f95fc)

</div>

<br>

## 💡 주요 기능들

<br>

### 🧡물품 등록

- 로컬 스토리지에 등록된 아이디와 비교 후 중복 확인
- 물품이 등록되면 데이터가 로컬 스토리지에 저장
- 데이터 저장하면 물품등록 테이블 추가 생성

<br>

![Image](https://github.com/user-attachments/assets/3066c005-4a7a-4b1e-a3b8-6c70cd192f4e)

<br>

### 🧡등록 물품 수정 & 삭제

- 등록된 물품의 내옹을 수정하거나 삭제
- 수정 또는 삭제 시 로컬 스토리지의 데이터도 수정 또는 삭제

<br>

![Image](https://github.com/user-attachments/assets/2837d2cb-760a-4458-9381-7032e11ddd18)

<br>

### 💚등록 물품 상품 페이지

- 로컬 스토리지에 등록된 물품 판매 시 필요정보 표시
- 각 물품의 상세페이지는 쿼리문 사용

<br>

![Image](https://github.com/user-attachments/assets/95fd8c6d-43a3-4488-8a64-5d9e9b42d558)

<br>

### 💙장바구니 담기

- 장바구니 담기 버튼 온클릭 시 로컬스토리지2에 저장
- 로컬스토리지2에 저장된 후 장바구니 갯수 카운트 업

<br>

![Image](https://github.com/user-attachments/assets/395bcb83-bcbd-4d8d-95ce-12aa9316308e)

<br>

### 💙장바구니 물품 삭제 & 전체 삭제

- 장바구니 담긴 물품 삭제 또는 전체 삭제 시 로컬 스토리지2의 데이터도 수정

<br>

![Image](https://github.com/user-attachments/assets/0723a7c2-3728-43c4-bdaa-03c4e38a8ad5)

<br>

### 💙장바구니 수량 증가 & 감소

- 장바구니의 담긴 물품의 수량 + - 버튼 온클릭 시 카운트 데이터 +1 또는 -1
- 중복된 물품 한번 더 담을 시 카운트 업

<br>

![Image](https://github.com/user-attachments/assets/f8a68c86-062a-4063-b8cb-16e127bce20e)

<br>

### 🧡반응형 웹

- 1024px, 768px, 480px 각각의 요소 크기 조절

<br>

![Image](https://github.com/user-attachments/assets/e5b6bff6-c43b-4c73-8f70-4728837067d1)

<br>
