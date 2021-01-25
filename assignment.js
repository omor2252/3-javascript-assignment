// https://github.com/omor2252/3-javascript-assignment

function kilometerToMeter(kiloMeter){
    if (kiloMeter<0) {
        var warning = "distance cannot be negative";
        return warning;
    } else {
        return (kiloMeter * 1000); /* we know 1km = 1000 meter */
    }
}


function budgetCalculator(numOfWatch, numOfMobile, numOfLaptop) {
    if (numOfWatch < 0 || numOfMobile < 0 || numOfLaptop < 0) {
        var warning = "Quantity cannot be negative";
        return warning;
    } else {
        const watchPrice = 50;
        const mobilePrice = 100;
        const laptopPrice = 500;
        var totalBudget = (watchPrice * numOfWatch) + (mobilePrice * numOfMobile) + (laptopPrice * numOfLaptop);
        return totalBudget;
    }
}


function hotelCost(rentDays){
    if (rentDays <= 10) {
        if (rentDays < 0) {
            var warning = "Days cannot be negative"; 
            return warning;
        } else {
            var totalRent = rentDays * 100;
            return totalRent;
        }
        /* negative number is less than 10, so to avoid that we added a warning and used another if else statement within a if statement */
    } else if (rentDays <= 20) {
        const rentTenDays = 10 * 100;
        var totalRent = rentTenDays + ((rentDays - 10) * 80); 
        return totalRent;
    } else {
        const rentTenDays = 10 * 100;
        const rentSecondTenDays = 10 * 80;
        var totalRent = rentTenDays + rentSecondTenDays + ((rentDays - 20) * 50);
        return totalRent;
    }
}


function megaFriend(friends) {
    var bigString = friends[0];    /* first element is counted as big and compare it to later part and save in bigString if they are fount big */
    for (let i = 0; i < friends.length; i++) {
        var element = friends[i];
        if (element.length > bigString.length) {      /* .lenght is used to find total letters so big name can be found */
            bigString = element;
        }
    }
    return bigString;
}

