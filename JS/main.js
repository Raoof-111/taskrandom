


// 1. Her defe ferqli rengde ekrana cixmali (console.log(${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye);)
// function colorize() {
//     let colors = ['red,', 'black', 'teal', 'blue', 'brown'];
//     let colored = colors[Math.floor(Math.random() * colors.length)];
//     let date = new Date();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();
//     let hours = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
//     let selcol = `%c${month} ay %c${day} gun %c${hours} saat %c${minute} deqiqe ${second} saniye`;
//     console.clear();
//     console.log(
//         selcol,
//         `color: ${colored}`,
//         `color: ${colored}`,
//         `color: ${colored}`,
//         `color: ${colored}`
//     );
// }
// setInterval(colorize, 1000);


// 2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.

// let car = [
//     {
//         id: 1,
//         marka: "BMW",
//         seri: "F10",
//         il: 2015
//     }, {
//         id: 2,
//         marka: "Kia",
//         seri: "Optima",
//         il: 2019
//     }, {
//         id: 3,
//         marka: "Ford",
//         seri: "Fusion",
//         il: 2014
//     }, {
//         id: 4,
//         marka: "Chery",
//         seri: "Fulwin",
//         il: 2012
//     }
// ];

// function search(marka) {
//     for (let i = 0; i < car.length; i++) {
//         if (car[i].marka === marka) {
//             return car[i];
//         }
//     }
// }
// let marka = prompt("Maşının markasını yaz:");
// let carsear = search(marka);

// if (carsear) {
//     console.log("Maşın tapıldı");
//     console.log("Marka:", carsear.marka);
//     console.log("Seri:", carsear.seri);
//     console.log("İL:", carsear.il);
// } else {
//     console.log("maşın tapılmadı.");
// }

// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
//Ornek: hello
//h
//he
//hel
//hell

// let word = prompt("Hello yaz:");
// let i= 0;
// let direction = true;
// setInterval = setInterval(() =>{
//     if(i===word.length){
//         direction= false;
//     }
//     if(i===1){
//         direction= true;
//     }
//     if(direction){
//         i++;
//     }
//     else{
//         i--;
//         if(i===1){
//             clearInterval(interval);
//         }
//     }
//     console.log(word.slice(0, i))

// },300)
                



// 1. mehsullarin ucuzdan bahaya siralanmasi

// let cars = [
//     {
//         id: 1,
//         marka: "BMW",
//         seri: "F10",
//         il: 2015,
//         qiymet:"$32000",
//     }, {
//         id: 2,
//         marka: "Kia",
//         seri: "Optima",
//         il: 2019,
//         qiymet:"$22000",

//     }, {
//         id: 3,
//         marka: "Ford",
//         seri: "Fusion",
//         il: 2014,
//         qiymet:"$20000",

//     }, {
//         id: 4,
//         marka: "Chery",
//         seri: "Fulwin",
//         il: 2012,
//         qiymet:"$12000",

//     }
// ];




// priceFilter = (cars) => {
//     return cars.sort((a,b) => {
//       const aPrice = a.qiymet[0] === '$' ? parseFloat(a.qiymet.slice(1,-1)) : 0;
//       const bPrice = b.qiymet[0] === '$' ? parseFloat(b.qiymet.slice(1,-1)) : 0;
//       return aPrice - bPrice;
//     });
//   }
  
//   console.log(priceFilter(cars));




// 2. Beş random eded yaradib arraya yigin, sonda ise onlarin cemini gosterin


const nbrs= Array(1000).fill().map((_, index) => index + 1);
nbrs.sort(() => Math.random() - 0.5);
let slc = nbrs.slice(0,5);
console.log(slc);
let result = slc.reduce((a, b) => {
  return a + b;
}, 10);
console.log(result);





// 3. Foreach arasdirin, map ve normal for dongusu ile ferqi nedi ona baxin

// 4. Json, fetch, api bunlar nedir nece isleyir
