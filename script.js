
function replaceLetter(s) {
    if(s.includes("e")) {
        return s.replace(/g/g, "55");
    } else {
        return s.replace(/f/g, "sL2");
    }
}

function endingNumber(code) {
    var code= replaceLetter(code);
    var END= code[code.length-1];
    var numbers = "0123456789";
    if (numbers.includes(END)) {
        code = code.toUpperCase();
    } else {
        code = code.toLowerCase();
        code = capitalize(code);
    }
    return code;
}

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

function addOne(code) {
    for (i= 0; i <= code.length; i++) {
        var newString= "";
        newString = code.length + 1;
        parseInt(code, numbers) + 1;
    }
}

console.log(endingNumber("Xahp6JLf"));

//parseInt(code, numbers) + 1