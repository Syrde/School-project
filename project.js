var regexps = {
    //regular expressions
    //Binary
    2: /^([-+]?)([01]*)(\.[01]*)?$/,
    //octal
    8: /^([-+]?)([0-7]*)(\.[0-7]*)?$/,
    //decimal
    10: /^([-+]?)(\d*)(\.\d*)?$/,
    //Hex
    16: /^([-+]?)([0-9a-f]*)(\.[0-9a-f]*)?$/i
};

function numberOnInput(input) {
    var base = parseInt(input.name.substr(4));
    var keyfromuser = input.value;
    // lets the user put 0X to front of hex
    if (base == 16 && keyfromuser.substr(0, 2) == '0x') {
        keyfromuser = keyfromuser.substr(2);
    }
    keyfromuser = keyfromuser.replace(/^ +| +$/g, '');

    var empty;
    var matches = keyfromuser.match(regexps[base]);
    if (!matches) {
        empty = NaN;
    }
    else {
        empty = parseInt(matches[1] + '0' + matches[2], base);
        if (matches[3] && matches[3].length >= 2) {
            empty += (matches[1] == '-' ? -1 : +1) * parseInt(matches[3].substr(1), base) / Math.pow(base, matches[3].length - 1);
        }
    }
    
    var bases = [2, 8, 10, 16];
    for (var i = 0; i < bases.length; i++) {
        if (bases[i] != base) {
            var output;
            if (isNaN(empty)) {
                output = '';
            } else if (16.25.toString(16) == '10.4') {
                
                output = empty.toString(bases[i]);
            } else {
                output = (empty > 0 ? Math.floor(n) : Math.ceil(empty)).toString(bases[i]);
                if (empty % 1) {
                    output += '.' + Math.round((Math.abs(empty) % 1) * Math.pow(bases[i], 8)).toString(bases[i]);
                    output = output.replace(/0+$/, '');
                }
            }
            document.getElementById('base' + bases[i]).value = output.toUpperCase();
        }
    }
}

window.onload = function () {
    var base10 = document.getElementById('base10');
    base10.value = 100;
    numberOnInput(base10);
}

function alarm1() {
    var none = document.getElementById("base 10").value;
    var flag = false;
    while (none != 0) {
        var a = none % 10;
        none = parseInt(none / 10);
        if ((a == 1) && (a == 2) && (a == 3) && (a == 4) && (a == 5) && (a == 6) && (a == 7) && (a == 8) && (a == 9))
            flag = false;
        else
            flag = true;
    }
    if (flag == true)
        document.getElementById("done1").innerHTML = "You can only use numbers 0..9!"
}
alarm1();

function alarm3() {
    var none = document.getElementById("base8").value;
    var flag = false;
    while (none != 0) {
        var a = none % 10;
        none = parseInt(none / 10);
        if ((a == 1) && (a == 2) && (a == 3) && (a == 4) && (a == 5) && (a == 6) && (a == 7))
            flag = false;
        else
            flag = true;
    }
    //popup
    if (flag == true)
        document.getElementById("done3").innerHTML = "You can only use numbers 0..7!";
    else
        document.getElementById("done3").innerHTML = "";
}
alarm3();

function alarm4() {
    var none = document.getElementById("base2").value;
    var flag = false;
    while (none != 0) {
        var a = none % 10;
        none = parseInt(none / 10);
        if ((a != 0) || (a != 1))
            flag = true;
        else
            flag = false;
    }
    //popup 
    if (flag == true)
        document.getElementById("done4").innerHTML = "You can only use numbers 0 and 1!";
    else
        document.getElementById("done4").innerHTML = "";
}
alarm4();
    
