import axios from "axios";
import { useEffect, useState } from "../../lib/router";

const show_project = () => {
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
    <div class="body-home">
    <div class="in4-khung">
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
        <td><a href="/admin/fixproject/${cur.id}" class="fix">Sửa</a></td>
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
    `;
};

export default show_project;
