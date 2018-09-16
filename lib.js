function createTheNewArray(start, end){
    let newArray = [];
    for(let i = start; i < end; i++){
        newArray.push(i);
    }
    return newArray;
}

function checkValue(secretValue, input) {
    if (input == secretValue) {
        return "true";
    } else if (input > secretValue) {
        return "greater";
    } else if (input < secretValue) {
        return "lesser";
    }
}

function showMessage(value, secret) {
    if (value == "true") {
        alert("You are right, secret number is " + secret);
    } else if (value == "greater") {
        alert("Too high ");
    } else if (value == "lesser") {
        alert("Too low ");
    }
}

function linearSearch(arr, ele) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ele) {
            return true;
        }
    }
}

function print(arr) {
    let content = "";
    f(arr, function(arr, index) {
        content += arr[index] + " ";
        if (index % 20 == 0) {
            content += "<br>";
        }
    });
    console.log("array: " + content);
    document.write("array: " + content);
}

function loadArray(length) {
    let arr = Array(length);
    f(arr, function(arr, index) {
        arr[index] = index;
    });
    return arr;
}

function f(arr, dosomethings) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        dosomethings(arr, i);
    }
}
