import axios from "axios";
import footer from "../../component/footer";
import header from "../../component/header";
import { router, useEffect, useState } from "../../lib/router";

const fix_project = ({ id }) => {
  const [data, setdata] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3000/project/" + id)
      .then(({ data }) => setdata(data));
  }, []);

  useEffect(() => {
    const takeform = document.querySelector("#form_add");
    const name = document.querySelector("#name");
    const langues = document.querySelector("#langues");
    const github = document.querySelector("#github");
    const frameword = document.querySelector("#frameword");
    const takeimg = document.querySelector("#img");
    takeform.addEventListener("submit", (e) => {
      const formdata = {
        name: name.value,
        langues: langues.value,
        github: github.value,
        frameword: frameword.value,
        img: takeimg.value,
      };
      e.preventDefault();
      axios
        .put("http://localhost:3000/project/" + id, formdata)
        .then(({ data }) => setdata(data))
        .then(() => alert("Xửa thành công!"))
        .then(() => router.navigate("/admin/show_project"));
    });
  });

  return `
  ${header()}

  <div class="body-home">
  <div class="body-home">
  <div class="body-home-accproject">
    <div class="body-home-acc2project" style= "transform: translateX(200px)"  >
      <div class="body-home-acc2-gtproject">
        <h1>Thêm Project</h1>
      </div>
      <div class="body-home-acc2-formproject">
        <div class="loginproject">
          <form action="" id="form_add">
            <div class="nhap1project">
              <div class="infor1project">
                <div class="infor1-allproject">
                  <input type="text" id="name" value ="${
                    data.name
                  }" placeholder="Tên project :">
                </div>
                <div class="infor1-allproject">
                  <input type="text" id="langues" value ="${
                    data.langues
                  }" placeholder="Ngôn ngữ : ">
                </div>
              </div>
              <div class="infor2project">
                <div class="infor1-allproject">
                  <input type="text" id="github" value ="${
                    data.github
                  }" placeholder="link git : ">
                </div>
                <div class="infor1-allproject">
                  <input type="text" id="frameword" value ="${
                    data.frameword
                  }" placeholder="Frame Work : ">
                </div>
              </div>
            </div>
            <div class="img-khung">
            <input type="file" multiple="multiple" value ="${
              data.img
            }" name="" id="img">
            <div id ="takeimg">
            
            </div>
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
export default fix_project;
