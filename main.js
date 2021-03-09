function downloadWorkbook() {
  let workbook = new exceljs.Workbook();

  const imageSheet = workbook.addWorksheet("ImageSheet");
  const dataSheet = workbook.addWorksheet("DataSheet");

  rawDate.forEach((item, index) => {
    dataSheet.getColumn(index + 1).values = [item.header, ...item.data];
  });

  let promise = [];
  document.querySelectorAll(".plot-container").forEach((item, index) => {
    promise.push(
      html2canvas(item).then((c) => {
        let image = c.toDataURL();
        const imageId2 = workbook.addImage({
          base64: image,
          extension: "png",
        });

        imageSheet.addImage(imageId2, position[index]);
      })
    );
  });

  Promise.all(promise).then(() => {
    workbook.xlsx.writeBuffer().then((b) => {
      let a = new Blob([b]);
      let url = window.URL.createObjectURL(a);

      let elem = document.createElement("a");
      elem.href = url;
      elem.download = `${new Date().toString().replaceAll(" ", "")}.xlsx`;
      document.body.appendChild(elem);
      elem.style = "display: none";
      elem.click();
      elem.remove();
    });
  });

  return workbook;
}

createChart("chart01");
createChart("chart02");
createChart("chart03");

function createChart(id) {
  let elem = document.getElementById(id);
  if (elem) {
    Plotly.newPlot(
      elem,
      [
        {
          x: [1, 2, 3, 4],
          y: [10, 15, 13, 17],
          type: "scatter",
        },
        {
          x: [1, 2, 3, 4],
          y: [16, 5, 11, 9],
          type: "scatter",
        },
      ],
      { header: id }
    );
  }
}

let position = [
  {
    tl: { col: 1.5, row: 1.5 },
    br: { col: 3, row: 3 },
  },
  {
    tl: { col: 3, row: 3 },
    br: { col: 6, row: 6 },
  },
  {
    tl: { col: 6, row: 6 },
    br: { col: 9, row: 9 },
  },
];

let rawDate = [
  { header: "시도", data: ["서울", "서울", "서울", "서울", "서울", "서울", "서울", "서울", "서울", "서울"] },
  { header: "시군구", data: ["송파구", "송파구", "송파구", "송파구", "송파구", "송파구", "송파구", "서초구", "서초구", "서초구"] },
  { header: "사고유형", data: ["측면충돌", "추돌", "기타", "전도전복", "공작물충돌", "주/정차차량 충돌", "기타", "횡단중", "차도통행중", "길가장자리구역통행중"] },
];

if (document.getElementById("download")) document.getElementById("download").addEventListener("click", downloadWorkbook);
