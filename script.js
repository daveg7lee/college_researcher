const submitButton = document.getElementById("submitBtn");
const inputs = document.getElementsByTagName("input");

function jsonToCSV(json_data) {
  const json_array = json_data;

  let csv_string = "";

  const titles = Object.keys(json_array[0]);

  titles.forEach((title, index) => {
    csv_string += index !== titles.length - 1 ? `${title},` : `${title}\r\n`;
  });

  json_array.forEach((content, index) => {
    let row = "";

    for (let title in content) {
      row += row === "" ? `${content[title]}` : `,${content[title]}`;
    }

    csv_string += index !== json_array.length - 1 ? `${row}\r\n` : `${row}`;
  });

  return csv_string;
}

const onClickSubmitBtn = async () => {
  submitButton.innerText = "Loading...";

  const data = [];

  for (let i = 0; i < 10; i++) {
    const input = inputs.item(i);
    if (input.value) {
      const response = await fetch(`http://localhost:3000/${input.value}`);
      const json = await response.json();
      data.push(json);
    }
  }

  const csv_data = jsonToCSV(data);

  let uri = "data:text/csv;charset=utf-8,\uFEFF" + encodeURI(csv_data);
  let link = document.createElement("a");
  link.href = uri;
  link.style = "visibility:hidden";
  link.download = "college_data.csv";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  submitButton.innerText = "Submit";
};

submitButton.addEventListener("click", onClickSubmitBtn);
