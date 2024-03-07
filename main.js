const jsonForm = document.querySelector("#jsonform");
const csvForm = document.querySelector("#csvform");
const bConvert = document.querySelector("#bConvert");
const bLoad = document.querySelector("#bLoad");
// const inpLoad = document.querySelector("#inpLoad");

const jsonData = bConvert.addEventListener("click", (e) => {
  convertJSONtoCSV();
  console.log(jsonForm);
});

// inpLoad.addEventListener("change", (e) => {
//   const file = e.target.files[0];
//   if (!file) {
//     console.error("None file was selected.");
//     return;
//   }
//   const reader = new FileReader();
//   reader.onload = function (event) {
//     const content = event.target.result;
//     try {
//       const jsonData = JSON.parse(content);
//       console.log(jsonData);
//       jsonForm.textContent = jsonData;
//       console.log("ladfjk");
//     } catch (error) {
//       console.error("Error al analizar el archivo JSON", error);
//     }
//   };
//   reader.readAsText(file);
// });

function convertJSONtoCSV() {
  let json;
  let keys = [];
  let values = [];

  try {
    console.log(jsonForm.value);
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
          console.log("ok", nkeys);
        }
      }
      const row = keys.map((k) => {
        return item[k];
      });
      values.push(row);
    });
    console.log(keys, values);
  } else {
    alert("no es un arreglo de objetos");
  }
}
