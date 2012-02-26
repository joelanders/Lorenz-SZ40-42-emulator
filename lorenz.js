// converts a character to a Baudot sequence
// "shift" is "l" or "f" (letter or figure)
var charToBaud = function  ( aChar ) {
    var aTable = {};
    aTable["a"]  = [1,1,0,0,0];
    aTable["b"]  = [1,0,0,1,1];
    aTable["c"]  = [0,1,1,1,0];
    aTable["d"]  = [1,0,0,1,0];
    aTable["e"]  = [1,0,0,0,0];
    aTable["f"]  = [1,0,1,1,0];
    aTable["g"]  = [0,1,0,1,1];
    aTable["h"]  = [0,0,1,0,1];
    aTable["i"]  = [0,1,1,0,0];
    aTable["j"]  = [1,1,0,1,0];
    aTable["k"]  = [1,1,1,1,0];
    aTable["l"]  = [0,1,0,0,1];
    aTable["m"]  = [0,0,1,1,1];
    aTable["n"]  = [0,0,1,1,0];
    aTable["o"]  = [0,0,0,1,1];
    aTable["p"]  = [0,1,1,0,1];
    aTable["q"]  = [1,1,1,0,1];
    aTable["r"]  = [0,1,0,1,0];
    aTable["s"]  = [1,0,1,0,0];
    aTable["t"]  = [0,0,0,0,1];
    aTable["u"]  = [1,1,1,0,0];
    aTable["v"]  = [0,1,1,1,1];
    aTable["w"]  = [1,1,0,0,1];
    aTable["x"]  = [1,0,1,1,1];
    aTable["y"]  = [1,0,1,0,1];
    aTable["z"]  = [1,0,0,0,1];
    aTable["CR"] = [0,0,0,1,0];
    aTable["LF"] = [0,1,0,0,0];
    aTable[" "]  = [0,0,1,0,0];
    aTable["SF"] = [1,1,0,1,1];
    aTable["NL"] = [0,0,0,0,0];
    aTable["ZZ"] = [1,1,1,1,1];
    aTable["-"]  = [1,1,0,0,0];
    aTable["?"]  = [1,0,0,1,1];
    aTable[":"]  = [0,1,1,1,0];
    aTable["$"]  = [1,0,0,1,0];
    aTable["3"]  = [1,0,0,0,0];
    aTable["!"]  = [1,0,1,1,0];
    aTable["&"]  = [0,1,0,1,1];
    aTable["#"]  = [0,0,1,0,1];
    aTable["8"]  = [0,1,1,0,0];
    aTable["'"]  = [1,1,0,1,0];
    aTable["("]  = [1,1,1,1,0];
    aTable[")"]  = [0,1,0,0,1];
    aTable["."]  = [0,0,1,1,1];
    aTable[","]  = [0,0,1,1,0];
    aTable["9"]  = [0,0,0,1,1];
    aTable["0"]  = [0,1,1,0,1];
    aTable["1"]  = [1,1,1,0,1];
    aTable["4"]  = [0,1,0,1,0];
    aTable["BL"] = [1,0,1,0,0];
    aTable["5"]  = [0,0,0,0,1];
    aTable["7"]  = [1,1,1,0,0];
    aTable[";"]  = [0,1,1,1,1];
    aTable["2"]  = [1,1,0,0,1];
    aTable["/"]  = [1,0,1,1,1];
    aTable["6"]  = [1,0,1,0,1];
    aTable["\""] = [1,0,0,0,1];
    aTable["CR"] = [0,0,0,1,0];
    aTable["LF"] = [0,1,0,0,0];
    aTable[" "]  = [0,0,1,0,0];
    aTable["ZZ"] = [1,1,0,1,1];
    aTable["NL"] = [0,0,0,0,0];
    aTable["SL"] = [1,1,1,1,1];

    return aTable[aChar];

};

// converts Baudot code to character
var baudToChar = function( baudArray, shift ) {
    
    var lTable = {};
    lTable[[1,1,0,0,0]] = "a";
    lTable[[1,0,0,1,1]] = "b";
    lTable[[0,1,1,1,0]] = "c";
    lTable[[1,0,0,1,0]] = "d";
    lTable[[1,0,0,0,0]] = "e";
    lTable[[1,0,1,1,0]] = "f";
    lTable[[0,1,0,1,1]] = "g";
    lTable[[0,0,1,0,1]] = "h";
    lTable[[0,1,1,0,0]] = "i";
    lTable[[1,1,0,1,0]] = "j";
    lTable[[1,1,1,1,0]] = "k";
    lTable[[0,1,0,0,1]] = "l";
    lTable[[0,0,1,1,1]] = "m";
    lTable[[0,0,1,1,0]] = "n";
    lTable[[0,0,0,1,1]] = "o";
    lTable[[0,1,1,0,1]] = "p";
    lTable[[1,1,1,0,1]] = "q";
    lTable[[0,1,0,1,0]] = "r";
    lTable[[1,0,1,0,0]] = "s";
    lTable[[0,0,0,0,1]] = "t";
    lTable[[1,1,1,0,0]] = "u";
    lTable[[0,1,1,1,1]] = "v";
    lTable[[1,1,0,0,1]] = "w";
    lTable[[1,0,1,1,1]] = "x";
    lTable[[1,0,1,0,1]] = "y";
    lTable[[1,0,0,0,1]] = "z";
    lTable[[0,0,0,1,0]] = "CR";
    lTable[[0,1,0,0,0]] = "LF";
    lTable[[0,0,1,0,0]] = " ";
    lTable[[1,1,0,1,1]] = "SF";
    lTable[[0,0,0,0,0]] = "NL";
    lTable[[1,1,1,1,1]] = "ZZ";

    var fTable = {};
    fTable[[1,1,0,0,0]] = "-";
    fTable[[1,0,0,1,1]] = "?";
    fTable[[0,1,1,1,0]] = ":";
    fTable[[1,0,0,1,0]] = "$";
    fTable[[1,0,0,0,0]] = "3";
    fTable[[1,0,1,1,0]] = "!";
    fTable[[0,1,0,1,1]] = "&";
    fTable[[0,0,1,0,1]] = "#";
    fTable[[0,1,1,0,0]] = "8";
    fTable[[1,1,0,1,0]] = "'";
    fTable[[1,1,1,1,0]] = "(";
    fTable[[0,1,0,0,1]] = ")";
    fTable[[0,0,1,1,1]] = ".";
    fTable[[0,0,1,1,0]] = ",";
    fTable[[0,0,0,1,1]] = "9";
    fTable[[0,1,1,0,1]] = "0";
    fTable[[1,1,1,0,1]] = "1";
    fTable[[0,1,0,1,0]] = "4";
    fTable[[1,0,1,0,0]] = "BL";
    fTable[[0,0,0,0,1]] = "5";
    fTable[[1,1,1,0,0]] = "7";
    fTable[[0,1,1,1,1]] = ";";
    fTable[[1,1,0,0,1]] = "2";
    fTable[[1,0,1,1,1]] = "/";
    fTable[[1,0,1,0,1]] = "6";
    fTable[[1,0,0,0,1]] = "\"";
    fTable[[0,0,0,1,0]] = "CR";
    fTable[[0,1,0,0,0]] = "LF";
    fTable[[0,0,1,0,0]] = " ";
    fTable[[1,1,0,1,1]] = "ZZ";
    fTable[[0,0,0,0,0]] = "NL";
    fTable[[1,1,1,1,1]] = "SL";

    if(shift === "l") {
        return lTable[baudArray]; }
    else if(shift === "f") {
        return fTable[baudArray]; }
    else { throw "incorrect shift"; }
};

var stringToBaudArray = function( inString ) {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var figures = "-?:$3!&#8'().,901457;2/6\" ";
    var baudArray = [];
    var shift = "l"; // starts in letter position
    for (var i = 0; i < inString.length; i++) {
        var l = inString[i];

        // if letter, but shift is in figure position
        if (letters.indexOf(l) != -1 && shift != "l") {
            shift = "l";
            baudArray.push( [1,1,1,1,1] );
        }
        // if figure, but shift is in letter position
        else if (figures.indexOf(l) != -1 && shift != "f") {
            shift = "f";
            baudArray.push( [1,1,0,1,1] );
        }

        baudArray.push( charToBaud( l ) );
    }
    return baudArray;
};

var baudArrayToString = function( inArray ) {
    var outArray = [];
    var shift = "l"; // starts in letter position
    for (var i = 0; i < inArray.length; i++) {
        var b = inArray[i];
        console.log(b);

        // nasty array equality...
        if ( !(b<[1,1,1,1,1]||b>[1,1,1,1,1])) {
            console.log("letter shift");
            shift = "l";
        }
        else if ( !(b<[1,1,0,1,1]||b>[1,1,0,1,1])) {
            console.log("figure shift");
            shift = "f";
        }
        else {
            console.log("output with shift %s",shift);
            outArray.push( baudToChar( b, shift ) );
        }
    }

    return outArray.join("");
};
