# Sozinov Andrey's Package for Agronomists and Agrochemists

Package computing the amount of fertilizer for fields & potential yield of wheat based on nutrient content in soil.

Пакет рассчитывает количество удобрения для полей в зависимости от вносимой дозы и содержания действующего вещества (д.в.) в этом удобрении. Также пакет рассчитывает величину потенциальной урожайности яровой пшеницы без внесения удобрений в зависимости от содержания в почве азота, фосфора и калия.

## Установка / Installation

```npm install fertilizer_rate_and_yield```

## Использование / Usage

### Расчет количества удобрения / Fertilizer Amount Calculation

Для расчета количества удобрения, которое нужно внести на поле, нужно вызвать функцию `calculateFertilizerAmount` и передать в качестве её аргументов Дозу удобрения в кг/га, Содержание д.в. в процентах и Площадь поля в гектарах.

```javascript
const fertilizer = require('fertilizer_rate_and_yield');
console.log(fertilizer.calculateFertilizerAmount(50, 34.6, 350));
```

### Расчет потенциальной урожайности / Potential Wheat Yield Calculation

Для расчета потенциальной урожайности зерна яровой пшеницы нужно вызвать функцию `calculatePotentialWheatYield` и передать в качестве аргументов содержание в почве подвижных соединений азота, фосфора и калия в мг/кг. Урожайность измеряется в т/га.

```javascript
const fertilizer = require('fertilizer_rate_and_yield');
console.log(fertilizer.calculatePotentialWheatYield(30, 45, 280));
```
