// Activity 3: Switch Case

// Task 4

let number = 0

switch (number) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Enter number only between 1-7");
        break;
}

// Task 5
let score = 7// 😏

switch (true) {
    case (score < 33):
        console.log("Grade: F");
        break;
    case (score >= 33 && score <= 50  ):
        console.log("Grade: D");
        break;
    case (score > 50 && score <=  70 ):
        console.log("Grade: C");
        break;
        break;
    case (score > 70 && score <  90 ):
        console.log("Grade: B");
        break;
    case (score >= 90 && score <=  100 ):
        console.log("Grade: A");
        break;

    default:
        console.log("Enter correct score...");
        break;
}