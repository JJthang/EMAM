import axios from "axios";
import { useEffect, useState } from "../../lib/router";

const fixin4 = () => {
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
          <td><a href="/admin/infomation/${
            cur.id
          }/show" class="fix">Sửa</a></td>
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
    `;
};

export default fixin4;
