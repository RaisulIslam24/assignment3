//Problem-1
function kilometerToMeter(kilo){
    if(kilo<0){
        return "Distance can't be nagative.";
    }
    else{
        var meter = kilo * 1000;
    }
    return meter;
}

//Problem-2
function budgetCalculator(watch, phone, laptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    if(watchPrice<0 || phonePrice<0 || laptopPrice<0){
        return "Quantity can't be nagative.";
    }
    else{
        var total = watchPrice + phonePrice + laptopPrice;
    }
    return total;
}

//Problem-3
function hotelCost(day) {
    var rent = 0;
    if (day < 0){
        return "Day can't be negative";
    }
    else if (day <= 10) {
        rent = day * 100;
    }
    else if (day <= 20) {
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        rent = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        rent = firstPart + secondPart + thirdPart;
    }
    return rent;
}

//Problem-4
function megaFriend(friends){
    var maxWord = friends[0];
    for (var i=0; i<friends.length; i++){
        var element = friends[i];
        if(element.length > maxWord.length){
            maxWord = element;
        }
    }
    return maxWord;
}