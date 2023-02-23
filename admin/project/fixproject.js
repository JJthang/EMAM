import axios from "axios";
import { useEffect, useState } from "../../lib/router";

const fixproject = ({ id }) => {
  const [data, setdata] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3000/project/" + id)
      .then(({ data }) => setdata(data));
  }, []);

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

  useEffect(() => {
    const takeform = document.querySelector("#form_add");
    const name = document.querySelector("#name");
    const langues = document.querySelector("#langues");
    const github = document.querySelector("#github");
    const frameword = document.querySelector("#frameword");
    const takeimg = document.querySelector("#img");
    console.log(uploadFiles(takeimg.files));
    takeform.addEventListener("submit", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      //   uploadFiles(takeimg.files).then((res) => {
      //     console.log(res);
      //   });
      //   console.log(uploadFiles(takeimg.files));
      const formdata = {
        name: name.value,
        langues: langues.value,
        github: github.value,
        frameword: frameword.value,
        img: await uploadFiles(takeimg.files),
      };
      e.preventDefault();
      axios
        .put("http://localhost:3000/project/" + id, formdata)
        .then(({ data }) => setdata(data));
      // .then(() => alert("Xửa thành công!"))
      // .then(() => router.navigate("/admin/show_project"));
    });
  });
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
        <div class="nav-right">
            <div class="nav-khung">
                <div class="title">
                    <h1>Thêm Thông tin</h1>
                </div>
                <div class="content">
                   <form action="" method="post" id="form_add">
                    <div class="name-khung">
                        <p>name Project : </p>
                        <input type="text" value ="${data.name}" id="name">
                    </div>
                    <div class="email-khung">
                        <p>Langues : </p>
                        <input type="text" value ="${data.langues}" id="langues">
                    </div>
                    <div class="sdt-khung">
                        <p>Link git : </p>
                        <input type="text" value ="${data.github}" id="github">
                    </div>
                    <div class="address-khung">
                        <p>Frame Work : : </p>
                        <input type="text" value ="${data.frameword}" id="frameword">
                    </div>
                    <div class="school-img">
                    <p>Img : </p>
                    <input type="file" multiple="multiple" name="" id="img">
                    </div>
                    <div class="butom-khung">
                        <button class="btn">SUBMIT</button>
                        <a href="/adminmain/show">List </a>
                    </div>
                   </form>
                </div>
            </div>
        </div>
    </div>
  </div>
      `;
};

export default fixproject;
