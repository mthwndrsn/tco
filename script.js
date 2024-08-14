function calculateTCO() {
    const initialCosts = parseFloat(document.getElementById('initial-costs').value);
    const ongoingCosts = parseFloat(document.getElementById('ongoing-costs').value);
    const indirectCosts = parseFloat(document.getElementById('indirect-costs').value);
    const directCosts = parseFloat(document.getElementById('direct-costs').value);
    const depreciation = parseFloat(document.getElementById('depreciation').value);
    const years = parseFloat(document.getElementById('years').value);

    const totalOngoingCosts = ongoingCosts * years;
    const totalDepreciation = depreciation * years;
    const tco = initialCosts + totalOngoingCosts + indirectCosts + directCosts + totalDepreciation;

    document.getElementById('tco-value').innerText = tco.toFixed(2);
}
