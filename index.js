/* FS READ/WRITE
const { error } = require("console");
const fs = require("fs");
//read
const text = fs.readFileSync("./file.txt", { encoding: "utf-8" });

console.log(text);

const text2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum`;

//write
fs.writeFileSync("./file2.txt", text2);

const text3 = fs.readFile(
  "./file2.txt",

  { encoding: "utf-8" },
  (error, data) => {
    console.log(data);
  }
);

console.log("here");
*/
const extractor = require("node-email-extractor").default;
const { error } = require("console");
const fs = require("fs");
const { exitCode } = require("process");

//get the proxy list before just ..
//const ProxyAgent = require('proxy-agent'); 
//we select a random proxy from the list for each http request IP:PORT from the json file 
//and then we proceed with the code 


const names = [
  "Ethan",
  "Michael",
  "Jacob",
  "Logan",
  "Alexander",
  "Daniel",
  "Matthew",
  "Joseph",
  "Caleb",
  "William",
  "Jayden",
  "Joshua",
  "Andrew",
  "Christopher",
  "James",
  "Anthony",
  "Jonathan",
  "David",
  "Dylan",
  "Christian",
  "Nathan",
  "Gabriel",
  "Jackson",
  "Samuel",
  "Owen",
  "Benjamin",
  "Elijah",
  "Isaac",
  "Lincoln",
  "Oliver",
  "Ethan",
  "Lucas",
];

const speciality = [
  "Software Engineer",
  "Front-end Developer",
  "Full-stack Developer",
  "Back-end Developer",
  "DevOps Engineer",
  "UX Designer",
  "Product Manager",
  "Data Scientist",
  "Machine Learning Engineer",
  "Cybersecurity Specialist",
  "Digital Marketing Specialist",
  "Project Manager",
  "Software Architect",
  "Data Analyst",
  "Business Analyst",
  "QA Engineer",
  "Mobile Developer",
  "Database Administrator",
  "Data Engineer",
  "UI/UX Designer",
];

let list = [];
const fetchgoogle = async function (callback) {
  for (special in speciality) {
    console.log(speciality[special]);
    for (namef in names) {
      console.log(names[namef]);
      const res = await fetch(
        `https://www.google.com/search?q=${names[namef]}+${speciality[special]}+email+address`
      );
      const HTML = await res.text();

     res.status == 429 ?  console.log("FAILED DUE TO TOO MANY REQUESTS.") : console.log(res.status)

      const emails = await extractor.text(HTML);

      for (email in emails) {
        console.log(emails[email]);

        list.push(emails[email]);
      }

      console.log(emails);
    }
  }

  callback();
};

fetchgoogle(savedata);

function savedata() {
  fs.writeFile("emails.txt", list.join("\n"), "utf-8", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("saved to emails.txt");
    }
  });
}
