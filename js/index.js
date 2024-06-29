let salom = ["assalomu", "alekum", "yaxshimisz"];
function boshxarfbilan(salom) {
  let result = salom.map(function (value) {
    return value[0].toUpperCase() + value.slice(1);
  });
  return result;
}
console.log(boshxarfbilan(salom));
