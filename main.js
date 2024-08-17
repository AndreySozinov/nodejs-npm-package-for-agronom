function calculateFertilizerAmount(nutrientDose, ingredientContent, fieldArea) {
    constant amount = nutrientDose / ingredientContent * fieldArea / 10;
    return amount;
}

function calculatePotentialWheatYield(soilNitrogenContent, soilPhosphorusContent, soilPotassiumContent) {
    const wheatNitrogenRemoval = 28;
    const wheatPhosphorusRemoval = 9;
    const wheatPotassiumRemoval = 23;
    const nitrogenUsageRate = 0.6;
    const phosphorusUsageRate = 0.12;
    const potassiumUsageRate = 0.2;
    const currentNitrification = 50;
    const nitrogenAmount = soilNitrogenContent * 5 + currentNitrification;
    const phosphorusAmount = soilPhosphorusContent * 3;
    const potassiumAmount = soilPotassiumContent * 3;
    const availableNitrogen = nitrogenAmount * nitrogenUsageRate;
    const availablePhosphorus = phosphorusAmount * phosphorusUsageRate;
    const availablePotassium = potassiumAmount * potassiumUsageRate;
    const yieldPotentialByN = availableNitrogen / wheatNitrogenRemoval;
    const yieldPotentialByP = availablePhosphorus / wheatPhosphorusRemoval;
    const yieldPotentialByK = availablePotassium / wheatPotassiumRemoval;
    let potentialYield = yieldPotentialByN;
    if (potentialYield > yieldPotentialByP) {
        potentialYield = yieldPotentialByP;
    }
    if (potentialYield > yieldPotentialByK) {
        potentialYield = yieldPotentialByK;
    }
    return potentialYield;
}

module.exports = { calculateFertilizerAmount, calculatePotentialWheatYield };