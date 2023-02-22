import axios from "axios";
import footer from "../../component/footer";
import header from "../../component/header";
import { router, useEffect, useState } from "../../lib/router";

const add_project = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const takeform = document.querySelector("#form_add");
    const name = document.querySelector("#name");
    const langues = document.querySelector("#langues");
    const github = document.querySelector("#github");
    const img = document.querySelector("#img");
    const frameword = document.querySelector("#frameword");

    takeform.addEventListener("submit", async (e) => {
      e.preventDefault();
      const url = await uploadFiles(img.files);
      const formdata = {
        name: name.value,
        langues: langues.value,
        github: github.value,
        frameword: frameword.value,
        img: url,
      };
      axios
        .post("http://localhost:3000/project", formdata)
        .then(() => alert("Thêm thành công !"))
        .then(() => router.navigate("/admin/show_project"));
    });
  });
  const uploadFiles = async (files) => {
    if (files) {
      const cloud_name = "dsbiugddk";
      const preset_name = "demo-ECMA";
      const urls = [];
      const FOLDER_NAME = "Upload_ECMA";
      const api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
      const formData = new FormData();

      formData.append("upload_preset", preset_name);
      formData.append("folder", FOLDER_NAME);

      for (const file of files) {
        formData.append("file", file);
        const respon = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        urls.push(respon.data.secure_url);
      }
      return urls;
    }
  };
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
