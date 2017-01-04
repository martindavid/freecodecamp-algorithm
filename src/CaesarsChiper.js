function rot13(str) {
    var len = str.length;
    var result = "";
    var MAX = 77; // char code for Z
    var MIN = 65; // char code for A
    var MAX_CHAR_CODE = 90;
    for (var i = 0; i < len; i++) {
        var code = str.charCodeAt(i);
        if (code >= MIN && code <= MAX) {
            result += String.fromCharCode(code + 13);
        } else if (code >= MAX && code <= MAX_CHAR_CODE) {
            result += String.fromCharCode(code - 13);
        } else {
            result += String.fromCharCode(code);
        }
    }

    return result;
}

//console.log(rot13("SERR YBIR?"));

exports.CaesarsChiper = rot13;