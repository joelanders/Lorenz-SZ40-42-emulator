// converts a character to a Baudot array
// "shift" is "l" or "f" (letter or figure)
var charToBaud = function  ( aChar ) {
    var aTable = {};
    aTable["a"]  = [0,0,0,1,1];
    aTable["b"]  = [1,1,0,0,1];
    aTable["c"]  = [0,1,1,1,0];
    aTable["d"]  = [0,1,0,0,1];
    aTable["e"]  = [0,0,0,0,1];
    aTable["f"]  = [0,1,1,0,1];
    aTable["g"]  = [1,1,0,1,0];
    aTable["h"]  = [1,0,1,0,0];
    aTable["i"]  = [0,0,1,1,0];
    aTable["j"]  = [0,1,0,1,1];
    aTable["k"]  = [0,1,1,1,1];
    aTable["l"]  = [1,0,0,1,0];
    aTable["m"]  = [1,1,1,0,0];
    aTable["n"]  = [0,1,1,0,0];
    aTable["o"]  = [1,1,0,0,0];
    aTable["p"]  = [1,0,1,1,0];
    aTable["q"]  = [1,0,1,1,1];
    aTable["r"]  = [0,1,0,1,0];
    aTable["s"]  = [0,0,1,0,1];
    aTable["t"]  = [1,0,0,0,0];
    aTable["u"]  = [0,0,1,1,1];
    aTable["v"]  = [1,1,1,1,0];
    aTable["w"]  = [1,0,0,1,1];
    aTable["x"]  = [1,1,1,0,1];
    aTable["y"]  = [1,0,1,0,1];
    aTable["z"]  = [1,0,0,0,1];
    aTable["CR"] = [0,1,0,0,0];
    aTable["LF"] = [0,0,0,1,0];
    aTable[" "]  = [0,0,1,0,0];
    aTable["SF"] = [1,1,0,1,1];
    aTable["NL"] = [0,0,0,0,0];
    aTable["ZZ"] = [1,1,1,1,1];
    aTable["-"]  = [0,0,0,1,1];
    aTable["?"]  = [1,1,0,0,1];
    aTable[":"]  = [0,1,1,1,0];
    aTable["$"]  = [0,1,0,0,1];
    aTable["3"]  = [0,0,0,0,1];
    aTable["!"]  = [0,1,1,0,1];
    aTable["&"]  = [1,1,0,1,0];
    aTable["#"]  = [1,0,1,0,0];
    aTable["8"]  = [0,0,1,1,0];
    aTable["'"]  = [0,1,0,1,1];
    aTable["("]  = [0,1,1,1,1];
    aTable[")"]  = [1,0,0,1,0];
    aTable["."]  = [1,1,1,0,0];
    aTable[","]  = [0,1,1,0,0];
    aTable["9"]  = [1,1,0,0,0];
    aTable["0"]  = [1,0,1,1,0];
    aTable["1"]  = [1,0,1,1,1];
    aTable["4"]  = [0,1,0,1,0];
    aTable["BL"] = [0,0,1,0,1];
    aTable["5"]  = [1,0,0,0,0];
    aTable["7"]  = [0,0,1,1,1];
    aTable[";"]  = [1,1,1,1,0];
    aTable["2"]  = [1,0,0,1,1];
    aTable["/"]  = [1,1,1,0,1];
    aTable["6"]  = [1,0,1,0,1];
    aTable["\""] = [1,0,0,0,1];
    aTable["CR"] = [0,1,0,0,0];
    aTable["LF"] = [0,0,0,1,0];
    aTable[" "]  = [0,0,1,0,0];
    aTable["ZZ"] = [1,1,0,1,1];
    aTable["NL"] = [0,0,0,0,0];
    aTable["SL"] = [1,1,1,1,1];

    return aTable[aChar];

};

// converts Baudot code to character
var baudToChar = function( baudArray, shift ) {
    
    var lTable = {};
    lTable[[0,0,0,1,1]] = "a";
    lTable[[1,1,0,0,1]] = "b";
    lTable[[0,1,1,1,0]] = "c";
    lTable[[0,1,0,0,1]] = "d";
    lTable[[0,0,0,0,1]] = "e";
    lTable[[0,1,1,0,1]] = "f";
    lTable[[1,1,0,1,0]] = "g";
    lTable[[1,0,1,0,0]] = "h";
    lTable[[0,0,1,1,0]] = "i";
    lTable[[0,1,0,1,1]] = "j";
    lTable[[0,1,1,1,1]] = "k";
    lTable[[1,0,0,1,0]] = "l";
    lTable[[1,1,1,0,0]] = "m";
    lTable[[0,1,1,0,0]] = "n";
    lTable[[1,1,0,0,0]] = "o";
    lTable[[1,0,1,1,0]] = "p";
    lTable[[1,0,1,1,1]] = "q";
    lTable[[0,1,0,1,0]] = "r";
    lTable[[0,0,1,0,1]] = "s";
    lTable[[1,0,0,0,0]] = "t";
    lTable[[0,0,1,1,1]] = "u";
    lTable[[1,1,1,1,0]] = "v";
    lTable[[1,0,0,1,1]] = "w";
    lTable[[1,1,1,0,1]] = "x";
    lTable[[1,0,1,0,1]] = "y";
    lTable[[1,0,0,0,1]] = "z";
    lTable[[0,1,0,0,0]] = "CR";
    lTable[[0,0,0,1,0]] = "LF";
    lTable[[0,0,1,0,0]] = " ";
    lTable[[1,1,0,1,1]] = "SF";
    lTable[[0,0,0,0,0]] = "NL";
    lTable[[1,1,1,1,1]] = "ZZ";

    var fTable = {};
    fTable[[0,0,0,1,1]] = "-";
    fTable[[1,1,0,0,1]] = "?";
    fTable[[0,1,1,1,0]] = ":";
    fTable[[0,1,0,0,1]] = "$";
    fTable[[0,0,0,0,1]] = "3";
    fTable[[0,1,1,0,1]] = "!";
    fTable[[1,1,0,1,0]] = "&";
    fTable[[1,0,1,0,0]] = "#";
    fTable[[0,0,1,1,0]] = "8";
    fTable[[0,1,0,1,1]] = "'";
    fTable[[0,1,1,1,1]] = "(";
    fTable[[1,0,0,1,0]] = ")";
    fTable[[1,1,1,0,0]] = ".";
    fTable[[0,1,1,0,0]] = ",";
    fTable[[1,1,0,0,0]] = "9";
    fTable[[1,0,1,1,0]] = "0";
    fTable[[1,0,1,1,1]] = "1";
    fTable[[0,1,0,1,0]] = "4";
    fTable[[0,0,1,0,1]] = "BL";
    fTable[[1,0,0,0,0]] = "5";
    fTable[[0,0,1,1,1]] = "7";
    fTable[[1,1,1,1,0]] = ";";
    fTable[[1,0,0,1,1]] = "2";
    fTable[[1,1,1,0,1]] = "/";
    fTable[[1,0,1,0,1]] = "6";
    fTable[[1,0,0,0,1]] = "\"";
    fTable[[0,1,0,0,0]] = "CR";
    fTable[[0,0,0,1,0]] = "LF";
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
