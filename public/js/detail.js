const cartIn = (id) => {
  axios({
    method: "post",
    url: `/cart/set/${id}`,
  })
    .then((res) => {
      Swal.fire("장바구니에 추가되었습니다!", "", "warning");
      console.log("성공!");
    })
    .catch((e) => {
      console.log(e, "dsa");
    });
};
const moveMain = () => {
  window.location.href = "/";
};

const moveCart = () => {
  window.location.href = "/cart/all";
};
const ready = () => {
  Swal.fire("준비중입니다!", "", "warning");
};
