import axios from "axios";
import { useEffect, useState } from "../../lib/router";

const showproject = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const takebuttom = document.querySelectorAll("#deleteall");
    for (const iterator of takebuttom) {
      iterator.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.dataset.id;
        if (confirm("Bạn chắc chắn muốn xóa chứ !")) {
          axios
            .delete("http://localhost:3000/project/" + id)
            .then(() => setdata(data.filter((data) => data.id != id)));
        }
      });
    }
  });
  useEffect(() => {
    axios
      .get("http://localhost:3000/project")
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
      <div class="nav-right" style="background-color: white;" >
        <div class="khung-show">
        <table>
        <thead>
         <tr>
           <th>STT</th>
           <th>Tên</th>
           <th>Trường học</th>
           <th>Mail</th>
           <th>SĐT</th>
           <th style="inline-size: 150px;">Địa chỉ</th>
           <th>Sửa</th>
           <th>Xóa</th>
         </tr>
        </thead>
          <tbody>
          ${data.map((cur, index) => {
            const fakeimg = [];
            fakeimg.push(cur.img);
            return `
         <tr>
           <td>${index + 1}</td>
           <td>${cur.name}</td>
           <td>${cur.langues}</td>
           <td>${cur.github}</td>
           <td>${cur.frameword}</td>
           <td>${fakeimg}</td>
           <td><a href="/fixproject/${cur.id}" class="fix">Sửa</a></td>
           <td><button data-id="${
             cur.id
           }" class="delete" id="deleteall">Xóa</button></td>
         </tr>
               `;
          })}
          </tbody>
         </table>
        </div>
      </div>
  </div>
</div>
    `;
};

export default showproject;
