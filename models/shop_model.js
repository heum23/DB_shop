const mysql = require("mysql2/promise");

//DB 연결
const pool = mysql.createPool({
  host: "localhost", //DB가 설치된 호스트 IP주소
  user: "root", // DB접속 유저이름
  password: "wlstnsgma1!", // DB 접속 비밀번호
  database: "shop", // DB 이름
});

const allItem = async () => {
  const query = "SELECT * FROM items";
  const [rows] = await pool.query(query);
  return rows;
};

const itemSet = async (data) => {
  const query = `INSERT INTO items (userId, name, price, detail, img) VALUES (?, ?, ?, ?, ?)`;
  const values = [data.userId, data.name, data.price, data.detail, data.img];
  try {
    await pool.query(query, values);
    console.log("DB에 데이터가 추가되었습니다.");
  } catch (e) {
    console.log("수정 실패", e); // 에러 메시지 추가
  }
};
// 수정페이지 넘어가기
const getItembyid = async (id) => {
  const query = "SELECT * FROM items WHERE id = ?";
  const values = [id];
  const [rows] = await pool.query(query, values);
  return rows;
};
//수정 데이터 업데이트
const dataUpdate = async (data) => {
  const query = "UPDATE items SET name = ?, detail= ? WHERE id = ?";
  const values = [data.name, data.detail, Number(data.id)];
  try {
    await pool.query(query, values);
  } catch (e) {
    console.log("수정실패", e);
  }
};
//데이터 삭제
const delData = async (id) => {
  const query = "DELETE FROM items where userId = ? ";
  const values = [Number(id)];
  try {
    await pool.query(query, values);
  } catch (e) {
    console.log("삭제실패");
  }
};
module.exports = { allItem, itemSet, getItembyid, dataUpdate, delData };
