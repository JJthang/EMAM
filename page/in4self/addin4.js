import axios from "axios";
import footer from "../../component/footer";
import header from "../../component/header";
import { router, useEffect } from "../../lib/router";

const addin4 = () => {
  useEffect(() => {
    const takeform = document.querySelector("#form_add");
    const name = document.querySelector("#name");
    const school = document.querySelector("#school");
    const email = document.querySelector("#email");
    const sdt = document.querySelector("#sdt");
    const address = document.querySelector("#address");
    const job = document.querySelector("#job");
    takeform.addEventListener("submit", (e) => {
      e.preventDefault();
      const formdata = {
        name: name.value,
        school: school.value,
        email: email.value,
        sdt: sdt.value,
        address: address.value,
        job: job.value,
      };
      if (
        formdata.name == "" ||
        formdata.school == "" ||
        formdata.email == "" ||
        formdata.sdt == "" ||
        formdata.address == "" ||
        formdata.job == ""
      ) {
        alert("xin vui lòng nhập lại ");
      } else {
        axios
          .post("http://localhost:3000/profile", formdata)
          .then(() => router.navigate("/admin/infomation/fix"))
          .then(() => alert("Thêm thành công"))
          .catch(() => alert("Error "));
      }
    });
  });
  // else if (!check) {
  //   alert("xin vui Lòng nhập lại Email");
  // } else if (isNaN(formdata.sdt.value)) {
  //   alert("Xin vui lòng nhập lại SĐT");
  // }
  return `
  ${header()}
  <div class="body-home">
  <div class="body-home">
  <div class="body-home-acc">
    <div class="body-home-acc1">
      <img src="img/well.jpg" alt="">
    </div>
    <div class="body-home-acc2">
      <div class="body-home-acc2-gt">
        <h1>Đăng ký</h1>
      </div>
      <div class="body-home-acc2-form">
        <div class="login">
          <form action="" id="form_add">
            <div class="nhap1">
              <div class="infor1">
                <div class="infor1-all">
                  <input type="text" id="name" placeholder="Họ tên :">
                </div>
                <div class="infor1-all">
                  <input type="text" id="school" placeholder="Học vấn : ">
                </div>
                <div class="infor1-all">
                  <input type="text" id="email" placeholder="Email : ">
                </div>
              </div>
              <div class="infor2">
                <div class="infor1-all">
                  <input type="text" id="sdt" placeholder="Số điện thoại : ">
                </div>
                <div class="infor1-all">
                  <input type="text" id="address" placeholder="Địa chỉ : ">
                </div>
                <div class="infor1-all">
                  <input type="text" id="job" placeholder="Nghề Nhiệp">
                </div>
              </div>
            </div>
            <div class="sub">
              <button class="btn">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  ${footer()}
  `;
};

export default addin4;
