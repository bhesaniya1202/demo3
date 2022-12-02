////////////////////////////using map mathods

// const fs = require("fs");

// const m1 = JSON.parse(fs.readFileSync("API.Json", "utf-8"));

// const moko = () =>
//   m1.map((x) => {
//     console.log(x.text + " | " + x.author);
//     console.log("----------------------------------------------");
//   });

// moko();

///////////////////////////////value append to jsonFile
// const M1 = JSON.stringify(m1);

// fs.appendFile("API.json", M1, (err) => {
//   if (err) throw err;
// });
///////////////////////////////////////////ReadJson values
// const fs = require("fs");

// const ReadJson = () => {
//   let moko = JSON.parse(fs.readFileSync("API.Json", "utf-8"));
//   console.log(moko[0]);
// };

// ReadJson();

// const quotes = document.getElementById("quotes");
// const author = document.getElementById("author");

// const getQuotes = async () => {
//   const API = "https://type.fit/api/quotes";
//   try {
//     let data = await fetch(API); //data fetch the API
//     realData = await data.json(); //data convert in to json
//     getNewQuotes();
//   } catch (error) {}
// };

// const getNewQuotes = () => {
//   let rnum = Math.floor(Math.random() * 10); //when do fire onclice then we get random quotes
//   quotes.innerText = `${realData[rnum].text}`;
//   author.innerText = `${realData[rnum].author}`;
// };
