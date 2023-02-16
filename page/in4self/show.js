import axios from "axios";
import footer from "../../component/footer";
import header from "../../component/header";
import { router, useEffect, useState } from "../../lib/router";

const show = ({ id }) => {
  const [data, setdata] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/profile/${id}`)
      .then(({ data }) => setdata(data));
  }, []);

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
      axios
        .put(`http://localhost:3000/profile/${id}`, formdata)
        .then(() => router.navigate("/admin/infomation/fix"))
        .then(() => alert("Sửa thành công!"));
    });
  });

  return `
    ${header()}
    <div class="body-home">
    <div class="body-home">
    <div class="body-home-acc">
      <div class="body-home-acc2" style= "transform: translateX(200px) ">
        <div class="body-home-acc2-gt">
          <h1>Sửa</h1>
        </div>
        <div class="body-home-acc2-form">
          <div class="login">
            <form action="" id="form_add">
              <div class="nhap1">
                <div class="infor1">
                  <div class="infor1-all">
                    <input type="text" id="name" value="${
                      data.name
                    }" placeholder="Họ tên :">
                  </div>
                  <div class="infor1-all">
                    <input type="text" id="school" value="${
                      data.school
                    }" placeholder="Học vấn : ">
                  </div>
                  <div class="infor1-all">
                    <input type="text" id="email" value="${
                      data.email
                    }" placeholder="Email : ">
                  </div>
                </div>
                <div class="infor2">
                  <div class="infor1-all">
                    <input type="text" id="sdt" value="${
                      data.sdt
                    }" placeholder="Số điện thoại : ">
                  </div>
                  <div class="infor1-all">
                    <input type="text" id="address" value="${
                      data.address
                    }" placeholder="Địa chỉ : ">
                  </div>
                  <div class="infor1-all">
                    <input type="text" id="job" value="${
                      data.job
                    }" placeholder="Nghề Nhiệp">
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

export default show;
