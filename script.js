$(document).ready(function() {
    $("#calculateBtn").click(function() {
        // Remove validation and results
        reset();

        let weight = $("input[name=weight]").val();
        let height = $("input[name=height").val();

        // Validation
        let noWeight = (weight === "");
        let noHeight = (height === "");
        if (noWeight || noHeight) {
            if (noWeight) {
                $("#weightErrorMessage").html("You must enter a number for the weight");
            }
    
            if (noHeight) {
                $("#heightErrorMessage").html("You must enter a number for the height");
            }
            return;
        }
        
        // Calculate BMI
        let bmi = weight/Math.pow(height, 2);
        let bodyType = "";
        let imgSrc = "";
        if (bmi <= 18.5) {
            bodyType = "Under weight";
            imgSrc = "./assets/underweight.png";
        } else if (bmi <= 24.9) {
            bodyType = "Normal weight";
            imgSrc = "./assets/normal.png";
        } else if (bmi <= 29.9) {
            bodyType = "Overweight";
            imgSrc = "./assets/overweight.png";
        } else {
            bodyType = "Obese";
            imgSrc = "./assets/obese.png";
        }

        // Output
        let name = $("input[name=name]").val();
        let output = `<h2>Your Results</h2>`;
        output += `<b>Name</b> ${name} <br/>`;
        output += `<b>Results</b> <br/> BMI: ${bmi} <br/> Body Type: ${bodyType} <br/>`;
        output += `<img src=\"${imgSrc}\"/>`;
  
        $("#results").html(output);
    });

    $("#resetBtn").click(function() {
        reset();
    });
});

function reset() {
    $("#results").html("");
    $("#weightErrorMessage").html("");
    $("#heightErrorMessage").html("");
}