import axios from "axios";
import { useEffect, useState } from "../../lib/router";

const show1 = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const takebuttoms = document.querySelectorAll("#deleteall");
    for (const iterator of takebuttoms) {
      iterator.addEventListener("click", function (params) {
        const id = this.dataset.id;
        if (confirm("Bạn chắc chắn muốn xóa chứ ? ") == true) {
          axios
            .delete(`http://localhost:3000/profile/${id}`)
            .then(() => setdata(data.filter((project) => project.id != id)));
        }
      });
    }
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then(({ data }) => setdata(data));
  }, []);
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
        <div class="khung-show">
        <table>
        <thead>
         <tr>
           <th>STT</th>
           <th>Tên</th>
           <th>Trường học</th>
           <th>Mail</th>
           <th>SĐT</th>
           <th>Địa chỉ</th>
           <th>Công việc</th>
           <th>Sửa</th>
           <th>Xóa</th>
         </tr>
        </thead>
          <tbody>
           ${data.map(
             (cur, index) => `
           <tr>
             <td>${index + 1}</td>
             <td>${cur.name}</td>
             <td>${cur.school}</td>
             <td>${cur.email}</td>
             <td>${cur.sdt}</td>
             <td>${cur.address}</td>
             <td>${cur.job}</td>
             <td><a href="/adminmain/fix/${cur.id}" class="fix">Sửa</a></td>
             <td><button data-id="${
               cur.id
             }" class="delete" id="deleteall">Xóa</button></td>
           </tr>
           `
           )}
          </tbody>
         </table>
        </div>
      </div>
  </div>
</div>
    `;
};

export default show1;
