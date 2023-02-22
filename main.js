import addin4main from "./admin/addinf4/addin4";
import fix from "./admin/addinf4/fix";
import show1 from "./admin/addinf4/show";
import addproject from "./admin/project/addproject";
import fixproject from "./admin/project/fixproject";
import showproject from "./admin/project/showproject";
import { render, router } from "./lib/router";
import contact from "./page/contact";
import home from "./page/home";
import addin4 from "./page/in4self/addin4";
import fixin4 from "./page/in4self/fixin4";
import show from "./page/in4self/show";
import project from "./page/project";
import add_project from "./page/project/add-project";
import fix_project from "./page/project/fix-project";
import show_project from "./page/project/show-project";
import project_detail from "./page/project_detail";

const wrap = document.querySelector("#wrap");
// const khung_admin = document.querySelector("#wrap-add");

router.on("/adminmain", () => render(addin4main, wrap));
router.on("/adminmain/show", () => render(show1, wrap));
router.on("/adminmain/fix/:id", ({ data }) => render(() => fix(data), wrap));

//todo admin

//todo admin end

router.on("/", () => render(home, wrap));
router.on("/home", () => render(home, wrap));
router.on("/project", () => render(project, wrap));
router.on("/project/:id", ({ data }) =>
  render(() => project_detail(data), wrap)
);

//todo infomation start
// router.on("/admin/infomation", () => render(addin4, wrap));
// router.on("/admin/infomation/fix", () => render(fixin4, wrap));
// router.on("/admin/infomation/:id/show", ({ data }) =>
//   render(() => show(data), wrap)
// );
//todo infomation end

//todo showproject Start
router.on("/addproject", () => render(addproject, wrap));
router.on("/showproject", () => render(showproject, wrap));
router.on("/fixproject/:id", ({ data }) =>
  render(() => fixproject(data), wrap)
);

// router.on("/admin/add_project", () => render(add_project, wrap));
// router.on("/admin/show_project", () => render(show_project, wrap));
// router.on("/admin/fixproject/:id", ({ data }) =>
//   render(() => fix_project(data), wrap)
// );

//todo showproject end

//todo contact start

router.on("/contact", () => render(contact, wrap));

//todo contact end

router.notFound(() => alert("not Found Page"));
router.resolve();
