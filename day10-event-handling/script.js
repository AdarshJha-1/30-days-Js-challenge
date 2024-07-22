// Activity 1: Basic Event Handling

// Task 1
const para = document.querySelector("#para");
const t1Btn = document.getElementById("t1-btn");
t1Btn.addEventListener("click", () => {
  para.textContent = "Yoo!.. Text changed";
});

// Task 2
const t2Img = document.getElementById("t2-img");
t2Img.addEventListener("dblclick", () => {
  //   if (t2Img.style.display === "none") {
  //     t2Img.style.display = "block";
  //   } else {
  //     t2Img.style.display = "none";
  //   }
  t2Img.style.display === "none"
    ? (t2Img.style.display = "block")
    : (t2Img.style.display = "none");
});

// Activity 2: Mouse Events

// Task 3
const t3Box = document.getElementsByClassName("t3-box")[0];
t3Box.addEventListener("mouseover", () => {
  t3Box.style.backgroundColor = "blue";
  t3Box.textContent = "Background Color: Blue";
});

// Task 4
t3Box.addEventListener("mouseout", () => {
  t3Box.style.backgroundColor = "red";
  t3Box.textContent = "Background Color: Red";
});

// Activity 3:  Keyboard Events

// Task 5
const t5Inpt = document.getElementById("t5-inpt");
t5Inpt.addEventListener("keydown", (e) => {
  console.log(e.key);
});

// Task 6
const t5Para = document.getElementById("t5-para");
t5Inpt.addEventListener("keyup", () => {
  t5Para.textContent = t5Inpt.value;
});

// Activity 4: Form Events

// Task 7
const t7Form = document.getElementById("t7-from");
t7Form.addEventListener("submit", (e) => {
  e.preventDefault();

  formData = {
    username: e.target[0].value,
    email: e.target[1].value,
  };

  console.log(formData);
});

// Task 8
const t8Fruits = document.getElementById("t8-fruit");
const t8FruitsSelectedValue = document.getElementById("t8-fruit-value");

t8Fruits.addEventListener("change", (e) => {
  t8FruitsSelectedValue.textContent = e.target.value;
});

// Activity 5: Event Delegation

// Task 9
const t9Names = document.getElementById("t9-names");

t9Names.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    const clickedItem = e.target;
    console.log("Clicked item:", clickedItem.textContent);
  }
});

// Task 10
t10Box = document.getElementsByClassName("t10-box")[0];

t10Box.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    const clickedChild = e.target;
    console.log(clickedChild.textContent);
  }
});

const addChild = (text) => {
  const newChild = document.createElement("li");
  newChild.textContent = text;
  t10Box.appendChild(newChild);
};
addChild("Child 1");
addChild("Child 2");
addChild("Child 3");
