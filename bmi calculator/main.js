var weight, height, measure, bmi, error;

function calculate() {
    weight = parseFloat(document.getElementById("weight").value);
    height = parseFloat(document.getElementById("height").value);
    error = "Please enter some values";

    // Convert height from cm to meters
    const heightInMeters = height / 100;
    bmi = weight / (heightInMeters * heightInMeters);
    bmi = bmi.toFixed(1);

    if (bmi <= 18.4) {
        measure = "Your BMI is " + bmi + " which means you are Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        measure = "Your BMI is " + bmi + " which means You are Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        measure = "Your BMI is " + bmi + " which means You are Overweight";
    } else if (bmi >= 30) {
        measure = "Your BMI is " + bmi + " which means You are Obese";
    }

    if (weight === 0) {
        document.getElementById("results").innerHTML = error;
        return;  // exit the function
    } else if (height === 0) {
        document.getElementById("results").innerHTML = error;
        return;  // exit the function
    } else if (weight < 0) {
        document.getElementById("results").innerHTML = "Negative Values not Allowed";
        return;  // exit the function
    } else {
        document.getElementById("results").innerHTML = measure;
    }

    const bmiImage = document.getElementById('bmiImage');
    if (bmi <= 18.4) {
        bmiImage.src = "uw.jpg";  
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiImage.src = "hw.jpg"; 
    } else if (bmi >= 25 && bmi < 30) {
        bmiImage.src = "ow.jpg"; 
    } else {
        bmiImage.src = "path_to_obese_image.jpg"; // You should REPLACE this with your actual obese image path
    }
    bmiImage.style.display = "block";
}
