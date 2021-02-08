document.getElementById("slider").oninput = function () {
    var value = ((this.value - this.min) / (this.max - this.min)) * 100;
    this.style.background =
        "linear-gradient(to right, var(--soft_cyan) 0%, var(--soft_cyan) " +
        value +
        "%, var(--light_gray_blue) " +
        value +
        "%, var(--light_gray_blue) 100%)";
    updateValues();
};

document.getElementById("monthlyCheck").oninput = function () {
    updateValues();
}

function updateValues() {
    const viewOptions = [
        {
            views: "10k",
            price: 8,
        },
        {
            views: "50k",
            price: 12,
        },
        {
            views: "100k",
            price: 16,
        },
        {
            views: "500k",
            price: 24,
        },
        {
            views: "1M",
            price: 36,
        }
    ];
    const pageiewsIndex = document.getElementById("slider").value;
    const yearlyBilling = document.getElementById("monthlyCheck").checked;
    let basePrice = viewOptions[pageiewsIndex].price;

    if (yearlyBilling) {
        basePrice = basePrice * .75;
    }

    const priceString = "$" + basePrice.toFixed(2);
    document.getElementById("price").innerHTML = priceString;
    document.getElementById("viewcount").innerHTML = viewOptions[pageiewsIndex].views;
}
