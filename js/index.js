// imtihon
// 1-masala
// const str = "1234567";
// let res = str.split("");
// let result = [];
// function teskariAlmashtirish(str) {
//   for (let i = 1; i <= res.length; i++) {
//     result.unshift(i);
//   }
//   return result;
// }
// console.log(teskariAlmashtirish(str));

// 2-usul
const str = "1234567";
let res = str.split("");
function teskariAlmashtirish(str) {
  return res.reverse();
}
console.log(teskariAlmashtirish(str));

// 2-masala
// == bu  biz bergan  qiymatga tengligini tekshiradi holo u taypini string yoki number ekanini tekshirmaydi
// === bu esa uni "type" gacha tekshiradi
// misol

// let son = 123;
// let result;
// if (son == 0) {
//   result = son;
// } else if (son === 123) {
//   result = son;
// } else {
//   result = "son xato";
// }
// console.log(result);

// 3-masala
// let son = 10;
// let res = [];
// for (let i = 1; i <= son; i++) {
//   res.push(i);
// }
// console.log(res);

// 4-masala
// const son = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let resultju = 0;
// let resultto = 0;
// function jufttoqlari(son) {
//   for (let i = 0; i < son.length; i++) {
//     if (son[i] % 2 == 0) {
//       resultju += son[i];
//     } else {
//       resultto += son[i];
//     }
//   }
//   return (res = [resultju, resultto]);
// }
// console.log(jufttoqlari(son));

// 5-masala
// const str = "as!s!a!l!o!m";
// function belgilarniOLish(str) {
//   let res = str.split("");
//   let result = [];
//   for (let i = 0; i < res.length; i++) {
//     if (res[i] !== "!") {
//       result.push(res[i]);
//     }
//   }

//   return result.join("");
// }
// console.log(belgilarniOLish(str));

// 6-masala
// const son1 = [2, 3, 4, 6];
// const son2 = [2, 3, 1];
// function elementlsrniqoshish(son1, son2) {
//   let res = 0;
//   for (let i = 0; i < son1.length; i++) {
//     res += son1[i];
//   }
//   for (let i = 0; i < son2.length; i++) {
//     res += son2[i];
//   }
//   return res;
// }
// console.log(elementlsrniqoshish(son1, son2));

// 7-masala
// const str = "ssalomm";
// function ochirish(str) {
//   let res = str.split("");
//   res.shift();
//   res.pop();
//   return res.join("");
// }
// console.log(ochirish(str));

// 8-masala
// const son = [2, 3, 4, 5, 78, 43, 6];
// function engkichiginitopish(son) {
//   let res = [];
//   let result;
//   for (let i = 0; i < son.length; i++) {
//     res.unshift(son[i]);
//   }
//   return res;
// }
// console.log(engkichiginitopish(son));

// 9-masala
// let str = "12334567500";
// function ochirish(str) {
//   let res = str.split("");
//   let resul = [];
//   // (// boshqa usul
//   // // for (let i = 0; i < res.length; i++) {
//   // //   if (res[i] != 0) {
//   // //     resul.push(res[i]);
//   // //   }
//   // // })
//   let result = res.filter(function (value) {
//     return value != 0;
//   });
//   return result.join("");
// }
// console.log(ochirish(str));

// 10-masala
// const son = [2, 3, 4, 5, 6, 78, 43, 6];
// function engkichiginitopish(son) {
//   let res = son[0];
//   let result;
//   for (let i = 0; i < son.length; i++) {
//     if (son[i] > res) {
//       result = res;
//     }
//   }
//   return result ** 4;
// }
// console.log(engkichiginitopish(son));
