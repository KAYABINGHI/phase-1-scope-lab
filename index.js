// 1. Declare customerName in global scope using var
var customerName = 'bob';

// 2. Function that accesses global customerName and uppercases it
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function that declares bestCustomer in global scope (bad practice!)
function setBestCustomer() {
  bestCustomer = 'not bob'; 
}

// 4. Function that overwrites the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = 'someone';

// 6. Function that attempts to change the constant 
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'anyone else'; 
}


