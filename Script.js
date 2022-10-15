function OrderClick() {
    document.getElementById("lblName").innerHTML =
        document.getElementById("txtName").value;
    document.getElementById("lblMobile").innerHTML =
        document.getElementById("txtMobile").value;
    var mealName = "";
    var mealCost = 0;
    var adOnName = "";
    var adOnCost = 0;
    var optBurger = document.getElementById("optBurger");
    var optRoller = document.getElementById("optRoller");
    if (optBurger.checked) {
        mealCost = 120;
        mealName = optBurger.value;
    }
    if (optRoller.checked) {
        mealCost = 100;
        mealName = optRoller.value;
    }
    var optWings = document.getElementById("optWings");
    var optKrusher = document.getElementById("optKrusher");
    if (optWings.checked) {
        adOnCost = 70;
        mealCost += adOnCost;
        adOnName += optWings.value + "<br>";
    }
    if (optKrusher.checked) {
        adOnCost = 40;
        mealCost += adOnCost;
        adOnName += optKrusher.value + "<br>";
    }
    document.getElementById("lblMeal").innerHTML = mealName;
    document.getElementById("lblAdon").innerHTML = adOnName;
    document.getElementById("lblAmount").innerHTML = "&#8377;" +
        mealCost;
}