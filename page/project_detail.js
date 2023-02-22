import axios from "axios";
import footer from "../component/footer";
import header from "../component/header";
import { useEffect, useState } from "../lib/router";

const ProducDetail = ({ id }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/project/" + id)
      .then(({ data }) => setdata(data));
  }, []);
  useEffect(() => {
    document.querySelector("#next").addEventListener("click", (e) => {
      const lists = document.querySelectorAll(".detail-item");
      document.querySelector(".detail-slide").appendChild(lists[0]);
    });
    document.querySelector("#prev").addEventListener("click", () => {
      const lists = document.querySelectorAll(".detail-item");
      document.querySelector(".detail-slide").prepend(lists[lists.length - 1]);
    });
  });

  const renderItemImage = () => {
    return (data?.img || []).map(
      (e) =>
        `<div class="detail-item" style="background-image: url(${e})"></div>`
    );
  };

  return `
    ${header()}
    <div class="body-home">
      <div class="khung-home">
       <div class="detail-img">
         <div class="detail-container">
           <div class="detail-slide">
            ${renderItemImage()}
           </div>
           <div class="detail-buttom">
           <button id="prev"><i class="fa-solid fa-arrow-left"></i></button>
           <button id="next"><i class="fa-solid fa-arrow-right"></i></button>
           </div>
         </div>
       </div>
      <div class="detail-info">
         <div class="detail-title">
         <h1>Thông tin Project</h1>
         </div>
         <div class="detail-infomation">
         <p>Tên Project : ${data?.name || ""} </p>
         <p>Ngôn ngữ sử dụng : ${data?.langues || ""}</p>
         <p>Link github : <a href="${data?.github || ""}">Xem thêm</a></p>
         <p>Freamwork Project : ${data?.frameword || ""}</p>
         </div>
      </div>
    </div>
    </div>
  ${footer()}
    `;
};

export default ProducDetail;
