function calculateAmount() {
    var qualityRate = document.getElementById("qualityRate").value;
        amountPerQuality = 200;
        numberOfGuest = document.getElementById("numberOfGuest").value;

        if(numberOfGuest === "" || numberOfGuest <= 0) {
        numberOfGuest = 0;
        return window.alert("Please enter a valid number of guest!")
    }

    var totalAmount = (qualityRate * amountPerQuality * numberOfGuest);
    totalAmount = totalAmount.toFixed(2);

    document .getElementById("totalAmount").style.display = "block";
    document .getElementById("bill"). innerHTML = totalAmount;
}

    document .getElementById("totalAmount").style.display = "none";

    document. getElementById("calculate").onclick = function () {calculateAmount()};
  