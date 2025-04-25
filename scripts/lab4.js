/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) 
{
    if (add == true && Number.isInteger(num1) && Number.isInteger(num2)) 
    {
        let result = 0;

        result = num1 + num2;

        return result;
    }
    else 
    {
        return false;
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) 
{
    if(prices.length == 0 || Array.isArray(prices) == false)
    {
        return false; 
    }
    else
    {
        let discounted = []
        let length = prices.length;
        var discountedPrice = 0
        for(let i = 0; i < length; i++) {
            discountedPrice = prices[i] * (1 - discount);
            discounted.push(discountedPrice);
        }

        return discounted;
    }
    
}

module.exports = {sumValues, discountPrices};

/*console.log(sumValues(3, 2, true));
console.log(sumValues(2, 4, false)); 
console.log(sumValues('not a number', 5, true));
console.log(discountPrices([10, 20, 30], 0.1)); 
console.log(discountPrices([10, 20, 30], 0));
console.log(discountPrices([], 0.1)); 
console.log(discountPrices([10, 20, 30, 40], 1));
console.log(discountPrices([], 'hello')); 
console.log(discountPrices('i\'m not an array', 0.5)); */