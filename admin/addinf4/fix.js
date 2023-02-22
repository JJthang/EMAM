import axios from "axios";
import { router, useEffect, useState } from "../../lib/router";

const fix = ({ id }) => {
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
        .then(() => router.navigate("/adminmain/show"))
        .then(() => alert("Sửa thành công!"));
    });
  });
  return `
  <div id="wrap-add">
  <div class="khung-admin">
      <div class="nav-lef">
          <div class="nav-a">
              <div class="title-a">
                  <h2>Admin Portfolio</h2>
              </div>
              <div class="title-a-link">
                  <p>UI ELEMENT :</p>
                  <div class="go-a">
                      <div class="go-a1">
                          <div class="icon1">
                              <i class="fa-solid fa-user"></i>
                          </div>
                          <div class="nava">
                              <a href="/adminmain">Thêm thông tin</a>
                          </div>
                      </div>
                      <div class="go-a2">
                              <div class="icon1">
                                  <i class="fa-solid fa-circle-half-stroke"></i>
                              </div>
                              <div class="nava">
                                  <a href="/addproject">Thêm Project</a>
                              </div>
                      </div>
                      <div class="go-a3">
                          <div class="icon1">
                          <a href="/">Log Out</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="nav-right">
          <div class="nav-khung">
              <div class="title">
                  <h1>Xửa Thông tin</h1>
              </div>
              <div class="content">
                 <form action="" method="post" id = "form_add" >
                  <div class="name-khung">
                      <p>name : </p>
                      <input type="text" id="name" value="${data.name}">
                  </div>
                  <div class="school-khung">
                      <p>School : </p>
                      <input type="text" id="school" value="${data.school}">
                  </div>
                  <div class="email-khung">
                      <p>Email : </p>
                      <input type="text" id="email" value="${data.email}">
                  </div>
                  <div class="sdt-khung">
                      <p>Phone : </p>
                      <input type="text" id="sdt" value="${data.sdt}">
                  </div>
                  <div class="address-khung">
                      <p>Adress : </p>
                      <input type="text" id="address" value="${data.address}">
                  </div>
                  <div class="job-khung">
                      <p>Job : </p>
                      <input type="text" id="job" value="${data.job}">
                  </div>
                  <div class="butom-khung">
                      <button class="btn">SUBMIT</button>
                  </div>
                 </form>
              </div>
          </div>
      </div>
  </div>
</div>
    `;
};

export default fix;
