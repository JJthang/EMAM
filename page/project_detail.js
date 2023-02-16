import axios from "axios";
import footer from "../component/footer";
import header from "../component/header";
import { useEffect, useState } from "../lib/router";

const project_detail = ({ id }) => {
  const [project, setproject] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then(({ data }) => setproject(data));
  }, []);
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/project/" + id)
      .then(({ data }) => setdata(data));
  }, []);
  useEffect(() => {
    document.querySelectorAll("");
  });
  return `
    ${header()}
    <div class="body-home">
      <div class="khung-home">
       <div class="detail-img">
         <div class="detail-container">
           <div class="detail-slide">
              <div class="detail-item" style="background-image: url(../img/project1.jpg)">
              </div>
              <div class="detail-item" style="background-image: url(../img/project2.jpg)">
              </div>
              <div class="detail-item" style="background-image: url(../img/project3.jpg)">
              </div>
           </div>
           <div class="detail-buttom">
           <button id="prev"><i class="fa-solid fa-arrow-left"></i></button>
           <button id="next"><i class="fa-solid fa-arrow-right"></i></button>
           </div>
         </div>
       </div>
      <div class="detail-info">
        
      </div>
    </div>
    </div>
  ${footer()}
    `;
};

export default project_detail;
