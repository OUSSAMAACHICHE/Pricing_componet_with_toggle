const checkboxBtn = document.getElementById('checkbox'),
	prices = document.querySelectorAll('.box strong')



checkboxBtn.addEventListener('change', checkPlan)

function checkPlan() {
    const annualPrices = [199.99, 249.99, 399.99];
    const monthlyPrices = [19.99, 24.99, 39.99];
    const selectedPrices = checkboxBtn.checked ? monthlyPrices : annualPrices;

    prices.forEach((price, index) => {
        price.innerHTML = `<span class="text-3xl">$</span>${selectedPrices[index]}`;
    });
}

// Update prices based on the current checkbox state
checkPlan()