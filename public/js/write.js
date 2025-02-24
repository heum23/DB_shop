const moveMain = () => {
  window.location.href = "/";
};

const moveCart = () => {
  window.location.href = "/cart/all";
};

const updataData = (id) => {
  const name = document.querySelector(".name").value;
  const editorContent = editor.getMarkdown();
  const data = {
    id: id,
    name: name,
    detail: editorContent,
  };
  axios({
    method: "post",
    url: "/shop/update/:id",
    data: { data },
  })
    .then((res) => {
      alert("수정완료!");
      window.location.href = "/shop/set";
    })
    .catch((e) => {
      console.log("error");
    });
};
const ready = () => {
  Swal.fire("준비중입니다!", "", "warning");
};
