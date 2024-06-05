import Axios from "axios";
import storage from "./storage";

let body = {};

body.changeBackground = (cn) => {
  const elem = document.querySelector(".body");

  if (elem) {
    elem.classList.add(cn);
  }
};

body.dismissBackground = (cn) => {
  const elem = document.querySelector(".body");

  if (elem) {
    elem.classList.remove(cn);
  }
};

body.formatStatus = (val) => {
  let flag = {};

  if (val === "ended") {
    flag = { bg: "[#FFD8D8]", col: "[#FF0000]" };
  } else if (val === "active") {
    flag = { bg: "[#D3FCDC]", col: "[#2CB742]" };
  }
  return flag;
};

body.deleteData = async (data, route, id) => {
  const filteredUsers = data.filter((u) => u._id !== id);
  const resp = await Axios.delete(
    `${process.env.REACT_APP_BASE_URL}/${route}/${id}`
  );
};

body.formatCurrency = (currency) => {
  const result = new Intl.NumberFormat("en-NG", {
    currency: "NGN",
    style: "currency",
  });

  return result.format(currency);
};

body.isObjectEmpty = (obj) => {
  return Object.getOwnPropertyNames(obj).length === 0 ? true : false;
};

export default body;
