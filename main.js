const jsonForm = document.querySelector("#jsonform");
const csvForm = document.querySelector("#csvform");
const bConvert = document.querySelector("#bConvert");
const bLoad = document.querySelector("#bLoad");
// const inpLoad = document.querySelector("#inpLoad");

const jsonData = bConvert.addEventListener("click", (e) => {
  convertJSONtoCSV();
  console.log(jsonForm);
});

function convertJSONtoCSV() {
  let json;
  let keys = [];
  let values = [];

  try {
    json = JSON.parse(jsonForm.value);
  } catch (err) {
    console.log("formato incorrecto", err);
  }

  if (Array.isArray(json)) {
    json.forEach((item) => {
      const nkeys = Object.keys(item);
      if (keys.length === 0) {
        keys = [...nkeys];
      } else {
        if (nkeys.length !== keys.length) {
          throw new Error("number of keys are diferent");
        } else {
          // console.log("ok", nkeys);
        }
      }
      console.log(keys);
      const row = keys.map((k) => {
        return item[k];
      });
      values.push(row);
    });
    console.log(keys, values);
    values.unshift(keys);
    console.log(values);
    const text = values.map((v) => v.join(",")).join("\n");
    csvForm.value = text;
  } else {
    alert("no es un arreglo de objetos");
  }
}
