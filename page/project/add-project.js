import axios from "axios";
import footer from "../../component/footer";
import header from "../../component/header";
import { router, useEffect, useState } from "../../lib/router";

const add_project = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const takeimg = [];
    document.querySelector("#img").addEventListener("change", (e) => {
      if (window.File && window.FileReader && window.FileList && window.Blob) {
        const file = e.target.files;
        for (let index = 0; index < file.length; index++) {
          if (!file[index].type.match("image")) {
            continue;
          } else {
            const picreader = new FileReader();
            picreader.addEventListener("load", function (params) {
              const picFile = params.target;
              takeimg.push(picFile.result);
            });
            picreader.readAsDataURL(file[index]);
          }
        }
      }
    });
    const takeform = document.querySelector("#form_add");
    const name = document.querySelector("#name");
    const langues = document.querySelector("#langues");
    const github = document.querySelector("#github");
    const frameword = document.querySelector("#frameword");
    takeform.addEventListener("submit", (e) => {
      const formdata = {
        name: name.value,
        langues: langues.value,
        github: github.value,
        frameword: frameword.value,
        img: takeimg,
      };
      e.preventDefault();
      axios
        .post("http://localhost:3000/project", formdata)
        .then(() => router.navigate("/admin/show_project"));
    });
  });

  return `
    ${header()}

    <div class="body-home">
    <div class="body-home">
    <div class="body-home-accproject">
      <div class="body-home-acc1project">
        <img src="img/well.jpg" alt="">
      </div>
      <div class="body-home-acc2project">
        <div class="body-home-acc2-gtproject">
          <h1>Thêm Project</h1>
        </div>
        <div class="body-home-acc2-formproject">
          <div class="loginproject">
            <form action="" id="form_add">
              <div class="nhap1project">
                <div class="infor1project">
                  <div class="infor1-allproject">
                    <input type="text" id="name" placeholder="Tên project :">
                  </div>
                  <div class="infor1-allproject">
                    <input type="text" id="langues" placeholder="Ngôn ngữ : ">
                  </div>
                </div>
                <div class="infor2project">
                  <div class="infor1-allproject">
                    <input type="text" id="github" placeholder="link git : ">
                  </div>
                  <div class="infor1-allproject">
                    <input type="text" id="frameword" placeholder="Frame Work : ">
                  </div>
                </div>
              </div>
              <div class="img-khung">
              <input type="file" multiple="multiple" name="" id="img">
              </div>
              <div class="subproject">
                <button class="btnproject">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    ${footer()}
    `;
};

export default add_project;
