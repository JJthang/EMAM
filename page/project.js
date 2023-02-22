import axios from "axios";
import footer from "../component/footer";
import header from "../component/header";
import { router, useEffect, useState } from "../lib/router";

const project = () => {
  const [project, setproject] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then(({ data }) => setproject(data));
  }, []);
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/project")
      .then(({ data }) => setdata(data));
  }, []);
  useEffect(() => {
    document.getElementById("next").onclick = function () {
      let lists = document.querySelectorAll(".item");
      document.getElementById("slide").appendChild(lists[0]);
    };
    document.getElementById("prev").onclick = function () {
      let lists = document.querySelectorAll(".item");
      document.getElementById("slide").prepend(lists[lists.length - 1]);
    };
  });
  useEffect(() => {
    const search = document.querySelector("#search");
    const form_search = document.querySelector("#btn-search");
    const buttom = document.querySelector(".search-btn");
    // buttom.addEventListener("click", (e) => {
    //   if (search == "") {
    //     alert("Xin vui Lòng nhập lại !");
    //   }
    // });
    form_search.addEventListener("change", (e) => {
      e.preventDefault();
      if (e == "" || search == "") {
        alert("Xin vui nhập lại !");
      } else {
        const newdata = data.filter((e) => e.name == search.value);
        router.navigate(`/project/${newdata[0]?.id || ""}`);
      }
    });
  });
  return `
    ${header()}
    <div class="body-home">
    <div class="khung-home">
      <div class="social-media">
        <a class="github" href="https://github.com/"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100042965676129" class="face"><i class="fa-brands fa-facebook"></i></a>
        <a class="ins" href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
      </div>
      <div class="About-My_self">
        <div class="About-My_self-content">
          <div class="About-My_self-content-center">
              <h1>Hi , I'am ${project.map((cur) => cur.name)}</h1>
              <p class="Job">FrontEnd Developer</p>
              <p class="advice">Kinh nghiệm cấp cao về kiến thức thiết kế
              <br>
               và phát triển web, tạo ra chất lượng
              <br>
              công việc</p>
              <div class="to-contact">
                <a href="/contact">Contact me  <i class="fa-regular fa-address-book"></i></a>
              </div>
          </div>
        </div>
        <div class="About-My_self-img">
          <div class="background-img">
            <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                  <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
              </mask>
              <g mask="url(#mask0)">
                  <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                  <image class="ee" href="./img/pexels-photo-8090137.jpeg"/>
              </g>
          </svg>
          
          </div>
        </div>
      </div>
    </div>

    <div class="project">
    <div class="container">
        <h1 style = "padding-bottom: 30px;">
            Hiển thị Projects
        </h1>
        <form action="" id="btn-search" class="form-search">
            <input type="text" placeholder="Tìm kiếm" id="search">
            <button class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <div id="slide">
            ${data.map((cur) => {
              return `
              <div class="item" style="background-image: url(${cur.img[0]})">
              <div class="content">
                  <div class="from"><a href="/project/${cur.id}">Xem thêm</a></div>
              </div>
          </div>
              `;
            })}
        </div>
        <div class="buttons">
            <button id="prev"><i class="fa-solid fa-arrow-left"></i></button>
            <button id="next"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
  </div>
  ${footer()}
    `;
};

export default project;
