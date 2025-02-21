const mysql = require("mysql2/promise");

//DB 연결
const pool = mysql.createPool({
  host: "localhost", //DB가 설치된 호스트 IP주소
  user: "root", // DB접속 유저이름
  password: "wlstnsgma1!", // DB 접속 비밀번호
  database: "shop", // DB 이름
});

const allId = async () => {
  const query = "SELECT * FROM cart";
  const [rows] = await pool.query(query);
  return rows;
};

const cartData = async (data) => {
  // data.allId.all 배열에서 id 목록을 추출
  const ids = data.allId.all.map((item) => Number(item.userId)); // 여기서 item.id는 실제 id 값을 의미한다고 가정

  const query = "SELECT * FROM items WHERE userId IN (?)";
  const values = [ids]; // id 배열을 IN (?)에 전달

  try {
    const [rows] = await pool.query(query, values);
    return rows; // 쿼리 결과
  } catch (e) {
    console.log("조회 실패:", e);
  }
};

const itemSet = async (data) => {
  const query = "INSERT INTO cart (userId) VALUES (?)";
  const values = [Number(data)]; // data를 배열로 감쌈
  try {
    await pool.query(query, values); // 쿼리 실행
    console.log("데이터 삽입 성공");
  } catch (e) {
    console.log("삽입 실패:", e);
  }
};
const delData = async (id) => {
  const query = "DELETE FROM cart where userId = ? ";
  const values = [Number(id)];
  try {
    await pool.query(query, values);
  } catch (e) {
    console.log("삭제실패");
  }
};
module.exports = { allId, cartData, itemSet, delData };
