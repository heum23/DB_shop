let main = document.querySelector(".main");
let allId = "";
axios({
  method: "get",
  url: "/cart/allId",
})
  .then((res) => {
    allId = res.data;

    // 첫 번째 요청이 성공적으로 끝난 후에 두 번째 요청 실행
    return axios({
      method: "post",
      url: "/cart/cartData",
      data: { allId },
    });
  })
  .then((res) => {
    const data = res.data.cart;
    console.log(data);
    data.map((item) => {
      main.innerHTML += `
      <div><img src="/uploads/${item.img}" /></div>
      <div>${item.name}</div>
      <div>${item.price.toLocaleString()}원</div>
      <button class="del" onclick="delData(${item.userId})">삭제</button>
      `;
    });
  })
  .catch((e) => {
    console.log(e, "sadas");
  });
const moveMain = () => {
  window.location.href = "/";
};

const moveCart = () => {
  window.location.href = "/cart/all";
};
const delData = (id) => {
  axios({
    method: "delete",
    url: `/cart/delete/${id}`,
  })
    .then((res) => {
      alert("삭제 완료");
      window.location.reload();
    })
    .catch((e) => {
      console.log("error", e);
    });
};
const delAllData = () => {
  axios({
    method: "delete",
    url: "/cart/delAll",
  })
    .then((res) => {
      window.location.reload();
    })
    .catch((e) => {
      console.log(e, "error");
    });
};
const ready = () => {
  Swal.fire("준비중입니다!", "", "warning");
};
