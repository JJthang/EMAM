import axios from "axios";
import { useEffect, useState } from "../lib/router";

const header = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(" http://localhost:3000/profile")
      .then(({ data }) => setdata(data));
  }, []);
  return `
    <header>
    <div class="header-nav">
      <div class="header-name-self">
        <p>${data.map((cur) => cur.name)}</p>
      </div>
      <div class="header-nav-a">
        <a href="/home">Home</a>
        <a href="">About</a>
        <a href="">Skills</a>
        <a href="/project">Projects</a>
        <a href="">Contact</a>
      </div>
    </div>
</header>
    `;
};

export default header;
