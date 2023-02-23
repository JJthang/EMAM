import axios from "axios";
import footer from "../component/footer";
import header from "../component/header";
import { useEffect, useState } from "../lib/router";

const contact = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(" http://localhost:3000/profile")
      .then(({ data }) => setdata(data));
  }, []);
  useEffect(() => {
    var myEditor;
    ClassicEditor.create(document.querySelector("#text"))
      .then((e) => {
        console.log("Editor was initialized", e);
        myEditor = e;
      })
      .catch(() => {
        console.log("loi");
      });
    let btn = document.getElementById("form-btn");
    console.log(btn);
    btn.addEventListener("submit", (e) => {
      e.preventDefault();
      const hee = document.querySelector(
        ".reponsive .reponsive-content .reponsive-khung .reponsive-contact .reponsive-contact-khung .reponsive-contact-form form .mess p"
      );
      const name = document.querySelector("#sub-name").value;
      const emailone = document.querySelector("#sub-email").value;
      const text = document.querySelector("#text").value;
      // console.log(hee.textContent);
      const takevalue = myEditor.getData();
      const formdata = {
        from_name: name,
        email_id: emailone,
        message: takevalue,
      };
      if ((formdata.from_name, formdata.email_id, formdata.message == "")) {
        alert("Xin vui lòng nhập lại !");
      } else {
        emailjs
          .send("service_w9dfgqt", "template_x9zx3m3", formdata)
          .then(() => alert("gửi thành công!"));
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
    <div class="About" position: relative; style="width: 100%; height: 700px; filter: blur(3px); background-image: url(../img/pexels-photo-548084.jpeg);">

      </div>
      <div class= "reponsive">
        <div class= "reponsive-title">
              <h1>Contact</h1> 
        </div>
        <div class= "reponsive-content">
            <div class= "reponsive-khung">
               <div class= "reponsive-infomation">
                 ${data.map(
                   (e) => `
                 <div class= "reponsive-dress">
                   <div class= "reponsive-dress-icon">
                   <i class="fa-sharp fa-solid fa-location-dot"></i>
                   </div>
                   <div class= "reponsive-dress-content">
                      <h2> Address :  </h2>
                      <p> ${e.address} </p>
                   </div>
                 </div>
                 <div class= "reponsive-phone">
                   <div class= "reponsive-dress-icon">
                    <i class="fa-solid fa-phone"></i>
                   </div>
                 <div class= "reponsive-dress-content">
                    <h2> Phone : </h2>
                    <p> ${e.sdt} </p>
                 </div>
                 </div>
                 <div class= "reponsive-mail">
                 <div class= "reponsive-dress-icon">
                 <i class="fa-regular fa-envelope"></i>
                 </div>
                 <div class= "reponsive-dress-content">
                    <h2> Email :  </h2>
                    <p> ${e.email} </p>
                 </div>
                 </div>
                 `
                 )}
               </div>
               <div class= "reponsive-contact">
                 <div class= "reponsive-contact-khung">
                   <div class= "reponsive-contact-title">
                         <h1> Send Message </h1>
                   </div>
                   <div class= "reponsive-contact-form">
                     <form action="#" id="form-btn">
                        <div class = "full-name"> 
                         <p> Họ và Tên :  </p>
                         <input type="text" name="" placeholder="Nhập tên" id="sub-name">
                        </div>
                        <div class = "email"> 
                        <p> Email :  </p>
                        <input type="text" name="" placeholder="Nhập Mail" id="sub-email">
                        </div>
                        <div class = "mess"> 
                        <p> Tin nhắn :  </p>
                        <div class="khung-editor">
                          <div id="text">

                           </div>
                          </div>
                        </div>
                        <div class = "btn-click"> 
                        <button id="btn_sendmail">Send</button>
                        </div>
                     </form>
                   </div>
                 </div>
               </div>
            </div>
        </div>
      </div>
  </div>
  ${footer()}
    `;
};

export default contact;
