import axios from "axios";
import footer from "../component/footer";
import header from "../component/header";
import { useEffect, useState } from "../lib/router";

const home = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(" http://localhost:3000/profile")
      .then(({ data }) => setdata(data));
  }, []);

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
              <h1>Hi , I'am ${data.map((cur) => cur.name)}</h1>
              <p class="Job">FrontEnd Developer</p>
              <p class="advice">Kinh nghiệm cấp cao về kiến thức thiết kế
              <br>
               và phát triển web, tạo ra chất lượng
              <br>
              công việc</p>
              <div class="to-contact">
              <a href="./img/main.png" download="">Dowload CV <i class="fa-solid fa-cloud-arrow-down"></i></a>
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
    <div class="About">
      <div class="About-title">
        <h1>About</h1>
      </div>
      <div class="About-Myself">
        <div class="About-Myselfimg">
          <img src="img/myself.jpg" alt="">
        </div>
        <div class="About-Myself-content">
          <div class="About-Myself-takevalue">
            <div class="gt">
              <h1>Giới thiệu</h1>
              <p>
                Hiện tại, mình đang là sinh viên kì 5 tại trường FPT Polytechnic. Mình bắt đầu học lập trình từ tháng 10 năm ngoái và phần lớn thời gian trong ngày mình đều ngồi học code. Ngoài việc học tập trên trường thì mình thường xuyên học thêm trên F8 Fullstack và trên các kênh Youtube như evondev, easy frontend, ...
       <br>
        Mình thực sự thích code và thử thách bản thân học được nhiều cái mới vào mỗi ngày mới. Mục tiêu hiện tại của mình là trở thành một lập trình viên Frontend.
              </p>
            </div>
            <div class="address">
              <h1>Thông tin</h1>
              <div class="address-content">
                ${data.map((cur, index) => {
                  return `
                    <div class="address-content1">
                  <p>Họ tên : <span class="ht">${cur.name}</span></p>
                  <p>Học vấn : <span>${cur.school}</span></p>
                  <p>Email : <span class="tt">${cur.email}</span></p>
                </div>
                <div class="address-content2">
                  <p>Số điện thoại : <span>${cur.sdt}</span></p>
                  <p>Địa chỉ : <span class="dc">${cur.address}</span></p>
                  <p>Nghề nghiệp  : <span>${cur.job}</span></p>
                </div>
                    `;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="skills">
      <div class="title-skills">
        <h1>Skills</h1>
      </div>
      <div class="language">
        <div class="language-1">
          <div class="language-title">
            <h3><i class="fa-sharp fa-solid fa-code"></i> FrontEnd Developer</h3>
          </div>
          <div class="languages">
            <div class="languages-khung1">
              <div class="languaes-js">
                <div class="position-js">
                  <h2>65%</h2>
                </div>
                <div class="languaes-js-border">
                  <img src="img/logo-javascript.svg" alt="">
                </div>
                <div class="languaes-js-content">
                  <h3>Javascript</h3>
                  <p>intermediate</p>
                </div>
              </div>
              <div class="languaes-css">
                <div class="position-css">
                  <h2>90%</h2>
                </div>
                <div class="languaes-css-border">
                  <img src="img/css-3.svg" alt="">
                </div>
                <div class="languaes-css-content">
                  <h3>CSS</h3>
                  <p>Advanced</p>
                </div>
              </div>
              <div class="languaes-html">
                <div class="position-html">
                  <h2>90%</h2>
                </div>
                <div class="languaes-html-border">
                  <img src="img/html-1.svg" alt="">
                </div>
                <div class="languaes-html-content">
                  <h3>HTML</h3>
                  <p>intermediate</p>
                </div>
              </div>
            </div>
            <div class="languages-khung2">
              <div class="languaes-react">
                <div class="position-react">
                  <h2>2%</h2>
                </div>
                <div class="languaes-react-border">
                  <img src="img/react-2.svg" alt="">
                </div>
                <div class="languaes-react-content">
                  <h3>React</h3>
                  <p>Base</p>
                </div>
              </div>
              <div class="languaes-git">
                <div class="position-git">
                  <h2>45%</h2>
                </div>
                <div class="languaes-git-border">
                  <img src="img/git-icon.svg" alt="">
                </div>
                <div class="languaes-git-content">
                  <h3>GIT</h3>
                  <p>Base</p>
                </div>
              </div>
              <div class="languaes-none">
                
              </div>
            </div>
          </div>
        </div>
        <div class="language-design">
          <div class="language-design-title">
            <h3><i class="fa-solid fa-feather"></i> Web Designer</h3>
          </div>
          <div class="language-design-logo">
            <div class="language-design-khung1">
              <div class="language-design-figma">
                <div class="language-design-figma-border">
                  <img src="img/figma-1.svg" alt="">
                </div>
                <div class="language-design-figma-content">
                  <h3>Figma</h3>
                  <p>Advanced</p>
                </div>
              </div>
              <div class="language-design-Adobe">
                <div class="language-design-Adobe-border">
                  <img src="img/adobe-xd-1.svg" alt="">
                </div>
                <div class="language-design-Adobe-content">
                  <h3>Adobe XD</h3>
                  <p>Intermediate</p>
                </div>
              </div>
              <div class="language-design-sketch">
                <div class="language-design-sketch-border">
                  <img src="img/sketch-2.svg" alt="">
                </div>
                <div class="language-design-sketch-content">
                  <h3>Sketch</h3>
                  <p>Base</p>
                </div>
              </div>
            </div>
            <div class="language-design-khung2">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  ${footer()}
    `;
};

export default home;
