// converts a character to a Baudot sequence
// "shift" is "l" or "f" (letter or figure)
var charToBaud = function  ( aChar ) {
    var aTable = {};
    aTable["a"]  = "11000";
    aTable["b"]  = "10011";
    aTable["c"]  = "01110";
    aTable["d"]  = "10010";
    aTable["e"]  = "10000";
    aTable["f"]  = "10110";
    aTable["g"]  = "01011";
    aTable["h"]  = "00101";
    aTable["i"]  = "01100";
    aTable["j"]  = "11010";
    aTable["k"]  = "11110";
    aTable["l"]  = "01001";
    aTable["m"]  = "00111";
    aTable["n"]  = "00110";
    aTable["o"]  = "00011";
    aTable["p"]  = "01101";
    aTable["q"]  = "11101";
    aTable["r"]  = "01010";
    aTable["s"]  = "10100";
    aTable["t"]  = "00001";
    aTable["u"]  = "11100";
    aTable["v"]  = "01111";
    aTable["w"]  = "11001";
    aTable["x"]  = "10111";
    aTable["y"]  = "10101";
    aTable["z"]  = "10001";
    aTable["CR"] = "00010";
    aTable["LF"] = "01000";
    aTable[" "]  = "00100";
    aTable["SF"] = "11011";
    aTable["NL"] = "00000";
    aTable["ZZ"] = "11111";
    aTable["-"]  = "11000";
    aTable["?"]  = "10011";
    aTable[":"]  = "01110";
    aTable["$"]  = "10010";
    aTable["3"]  = "10000";
    aTable["!"]  = "10110";
    aTable["&"]  = "01011";
    aTable["#"]  = "00101";
    aTable["8"]  = "01100";
    aTable["'"]  = "11010";
    aTable["("]  = "11110";
    aTable[")"]  = "01001";
    aTable["."]  = "00111";
    aTable[","]  = "00110";
    aTable["9"]  = "00011";
    aTable["0"]  = "01101";
    aTable["1"]  = "11101";
    aTable["4"]  = "01010";
    aTable["BL"] = "10100";
    aTable["5"]  = "00001";
    aTable["7"]  = "11100";
    aTable[";"]  = "01111";
    aTable["2"]  = "11001";
    aTable["/"]  = "10111";
    aTable["6"]  = "10101";
    aTable["\""] = "10001";
    aTable["CR"] = "00010";
    aTable["LF"] = "01000";
    aTable[" "]  = "00100";
    aTable["ZZ"] = "11011";
    aTable["NL"] = "00000";
    aTable["SL"] = "11111";

    return aTable[aChar];

};

// converts Baudot code to character
var baudToChar = function( baudArray, shift ) {
    
    var lTable = {};
    lTable["11000"] = "a";
    lTable["10011"] = "b";
    lTable["01110"] = "c";
    lTable["10010"] = "d";
    lTable["10000"] = "e";
    lTable["10110"] = "f";
    lTable["01011"] = "g";
    lTable["00101"] = "h";
    lTable["01100"] = "i";
    lTable["11010"] = "j";
    lTable["11110"] = "k";
    lTable["01001"] = "l";
    lTable["00111"] = "m";
    lTable["00110"] = "n";
    lTable["00011"] = "o";
    lTable["01101"] = "p";
    lTable["11101"] = "q";
    lTable["01010"] = "r";
    lTable["10100"] = "s";
    lTable["00001"] = "t";
    lTable["11100"] = "u";
    lTable["01111"] = "v";
    lTable["11001"] = "w";
    lTable["10111"] = "x";
    lTable["10101"] = "y";
    lTable["10001"] = "z";
    lTable["00010"] = "CR";
    lTable["01000"] = "LF";
    lTable["00100"] = " ";
    lTable["11011"] = "SF";
    lTable["00000"] = "NL";
    lTable["11111"] = "ZZ";

    var fTable = {};
    fTable["11000"] = "-";
    fTable["10011"] = "?";
    fTable["01110"] = ":";
    fTable["10010"] = "$";
    fTable["10000"] = "3";
    fTable["10110"] = "!";
    fTable["01011"] = "&";
    fTable["00101"] = "#";
    fTable["01100"] = "8";
    fTable["11010"] = "'";
    fTable["11110"] = "(";
    fTable["01001"] = ")";
    fTable["00111"] = ".";
    fTable["00110"] = ",";
    fTable["00011"] = "9";
    fTable["01101"] = "0";
    fTable["11101"] = "1";
    fTable["01010"] = "4";
    fTable["10100"] = "BL";
    fTable["00001"] = "5";
    fTable["11100"] = "7";
    fTable["01111"] = ";";
    fTable["11001"] = "2";
    fTable["10111"] = "/";
    fTable["10101"] = "6";
    fTable["10001"] = "\"";
    fTable["00010"] = "CR";
    fTable["01000"] = "LF";
    fTable["00100"] = " ";
    fTable["11011"] = "ZZ";
    fTable["00000"] = "NL";
    fTable["11111"] = "SL";

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
            baudArray.push( "11111" );
        }
        // if figure, but shift is in letter position
        else if (figures.indexOf(l) != -1 && shift != "f") {
            shift = "f";
            baudArray.push( "11011" );
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

        if ( b === "11111") {
            console.log("letter shift");
            shift = "l";
        }
        else if ( b === "11011") {
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

var initWheels = function( ) {
    var wheels = [];
    // Mu 37
    wheels[0] = "10101"+"10101"+"10101"+"10101"+"10101"+
                "10101"+"10101"+"10";
    // Mu 61
    wheels[1] = "10101"+"10101"+"10101"+"10101"+"10101"+
                "10101"+"10101"+"10101"+"10101"+"10101"+ 
                "10101"+"10101"+"1";
    // Chi 41
    wheels[2] = "10101"+"10101"+"10101"+"10101"+"10101"+
                "10101"+"10101"+"10101"+"1";
    // Chi 31
    wheels[3] = "10101"+"10101"+"10101"+"10101"+"10101"+
                "10101"+"1";
    // Chi 29
    wheels[4] = "10101"+"10101"+"10101"+"10101"+"10101"+
                "1010";
    // Chi 26
    wheels[5] = "10101"+"10101"+"10101"+"10101"+"10101"+
                "1";
    // Chi 23
    wheels[6] = "10101"+"10101"+"10101"+"10101"+"101";
    // Psi 43
    wheels[7] = "10101"+"10101"+"10101"+"10101"+"10101"+
                "10101"+"10101"+"10101"+"101";
    // Psi 47
    wheels[8] = "10101"+"10101"+"10101"+"10101"+"10101"+
                "10101"+"10101"+"10101"+"10101"+"10";
    // Psi 51
    wheels[9] = "10101"+"10101"+"10101"+"10101"+"10101"+
                "10101"+"10101"+"10101"+"10101"+"10101"+
                "1";
    // Psi 53
    wheels[10]= "10101"+"10101"+"10101"+"10101"+"10101"+
                "10101"+"10101"+"10101"+"10101"+"10101"+
                "101";
    // Psi 59
    wheels[11]= "10101"+"10101"+"10101"+"10101"+"10101"+
                "10101"+"10101"+"10101"+"10101"+"10101"+
                "10101"+"1010";
    return wheels;
};

var charToBin = function( c ) {
    if ( c === "1" || c === "0" ) {
        return c.charCodeAt() - 48; // ASCII 48 = '0'
    }
    else {
        throw "invalid char";
    }
};

var charXOR = function( a, b ) {
    return (charToBin(a) + charToBin(b)) % 2;
};
