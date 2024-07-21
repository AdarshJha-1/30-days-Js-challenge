// Activity 1: Selecting and Manipulating Elements

// Task 1
const myName = document.getElementById("my_name");
myName.style.color = "#FE4900";

// Task 2
const myAge = document.getElementsByClassName("my_age")[0];
myAge.style.backgroundColor = "#A0EE48";

// Activity 2: Creating and Appending Elements

// Task 3
const newDiv = document.createElement("div");
newDiv.className = "my_intro";
newDiv.textContent = `Hello my name is ${myName.textContent} and i am ${myAge.textContent} years old.`;
document.body.appendChild(newDiv);

// Task 4
const existingUl = document.getElementById("existing_ul");
const newLi = document.createElement("li");
newLi.textContent = "New li";
existingUl.appendChild(newLi);

// Activity 3: Removing Elements

// Task 5
const my_age = document.getElementsByClassName("my_age")[0];
my_age.remove();

// Task 6
const contactInfo = document.getElementById("contact_info");
contactInfo.lastElementChild.remove();

// Activity 4: Modifying Attributes and Classes

// Task 7
const githubImg = document.getElementById("github_img");
console.log(githubImg.attributes.src.value);
githubImg.attributes.src.value =
  "https://avatars.githubusercontent.com/u/136787356?v=4";

// Task 8
const info = document.getElementsByClassName("info")[0];
info.classList.remove("info");
info.setAttribute("class", "info_text_blue");

// Activity 5: Event Handling

// Task 9
const btn = document.getElementById("btn");
const rogerWords = document.getElementsByClassName("roger_words")[0];
btn.addEventListener("click", () => {
  rogerWords.textContent = "The One Piece Is Real";
});

// Task 10
btn.addEventListener("mouseover", () => {
  btn.style.border = "2px solid red";
});

btn.addEventListener("mouseleave", () => {
  btn.style.border = "";
});
