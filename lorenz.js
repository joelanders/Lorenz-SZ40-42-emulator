// converts a character to a Baudot sequence
var charToBaud = function  ( aChar ) {
    var aTable = {
          "a" : "11000",
          "b" : "10011",
          "c" : "01110",
          "d" : "10010",
          "e" : "10000",
          "f" : "10110",
          "g" : "01011",
          "h" : "00101",
          "i" : "01100",
          "j" : "11010",
          "k" : "11110",
          "l" : "01001",
          "m" : "00111",
          "n" : "00110",
          "o" : "00011",
          "p" : "01101",
          "q" : "11101",
          "r" : "01010",
          "s" : "10100",
          "t" : "00001",
          "u" : "11100",
          "v" : "01111",
          "w" : "11001",
          "x" : "10111",
          "y" : "10101",
          "z" : "10001",
          "CR": "00010",
          "LF": "01000",
          " " : "00100",
          "SF": "11011",
          "NL": "00000",
          "ZZ": "11111",
          "-" : "11000",
          "?" : "10011",
          ""  : "01110",
          "$" : "10010",
          "3" : "10000",
          "!" : "10110",
          "&" : "01011",
          "#" : "00101",
          "8" : "01100",
          "'" : "11010",
          "(" : "11110",
          ")" : "01001",
          "." : "00111",
          "," : "00110",
          "9" : "00011",
          "0" : "01101",
          "1" : "11101",
          "4" : "01010",
          "BL": "10100",
          "5" : "00001",
          "7" : "11100",
          ";" : "01111",
          "2" : "11001",
          "/" : "10111",
          "6" : "10101",
          "\"": "10001",
          "ZZ": "11011",
          "SL": "11111" };

    return aTable[aChar];
};

// converts Baudot code to character
// "shift" is "l" or "f" (letter or figure)
var baudToChar = function( baudArray, shift ) {
    var lTable = {
          "11000" : "a",
          "10011" : "b",
          "01110" : "c",
          "10010" : "d",
          "10000" : "e",
          "10110" : "f",
          "01011" : "g",
          "00101" : "h",
          "01100" : "i",
          "11010" : "j",
          "11110" : "k",
          "01001" : "l",
          "00111" : "m",
          "00110" : "n",
          "00011" : "o",
          "01101" : "p",
          "11101" : "q",
          "01010" : "r",
          "10100" : "s",
          "00001" : "t",
          "11100" : "u",
          "01111" : "v",
          "11001" : "w",
          "10111" : "x",
          "10101" : "y",
          "10001" : "z",
          "00010" : "CR",
          "01000" : "LF",
          "00100" : " ",
          "11011" : "SF",
          "00000" : "NL",
          "11111" : "ZZ" };

    var fTable = {
          "11000" : "-",
          "10011" : "?",
          "01110" : ":",
          "10010" : "$",
          "10000" : "3",
          "10110" : "!",
          "01011" : "&",
          "00101" : "#",
          "01100" : "8",
          "11010" : "'",
          "11110" : "(",
          "01001" : ")",
          "00111" : ".",
          "00110" : ",",
          "00011" : "9",
          "01101" : "0",
          "11101" : "1",
          "01010" : "4",
          "10100" : "BL",
          "00001" : "5",
          "11100" : "7",
          "01111" : ";",
          "11001" : "2",
          "10111" : "/",
          "10101" : "6",
          "10001" : "\"",
          "00010" : "CR",
          "01000" : "LF",
          "00100" : " ",
          "11011" : "ZZ",
          "00000" : "NL",
          "11111" : "SL" };

    if(shift === "l") {
        return lTable[baudArray]; }
    else if(shift === "f") {
        return fTable[baudArray]; }
    else {
        throw "incorrect shift"; }
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
        console.log(c);
        throw "invalid char";
    }
};

var charXOR = function( a, b ) {
    return String.fromCharCode(
        48 + (charToBin(a) + charToBin(b)) % 2);
};

var pos = [];
for( var i = 0; i < 12; i++ ) {
    pos[i] = 0;
}

var encipherLetter = function( letter, wheels, pos ) {
    var result = [];
    // do each of the five bits
    for ( var i = 0; i < 5; i++ ) {
        // key = Chi[i] + Psi[i]
        var key = charXOR( 
            wheels[i+2][pos[i+2]], 
            wheels[i+7][pos[i+7]] );
        result.push( charXOR( 
            charToBaud(letter)[i],
            key) );
    }
    // Lorenz machine only uses letters (no figures)
    return baudToChar( result.join(""), "l" );
};

var stepWheels = function( wheels, pos ) {

    // the Chi wheels always step
    for ( var i = 0; i < 5; i++ ) {
        pos[i+2] = ( pos[i+2] + 1 ) % wheels[i+2].length;
    }

    // if Mu 37 is at a 1, step the Psi wheels
    if ( wheels[0][pos[0]] === "1" ) {
        for ( var i = 0; i < 5; i++ ) {
            pos[i+7] = ( pos[i+7] + 1 ) % wheels[i+7].length;
        }
    }

    // if Mu 61 is at a 1, step Mu 37
    if ( wheels[1][pos[1]] === "1" ) {
        pos[0] = ( pos[0] + 1 ) % 37;
    }

    // Mu 61 always steps
    pos[1] = ( pos[1] + 1 ) % 61;

    return pos;
};

var encryptString = function( string, wheels, pos ) {
    var result = [];
    for ( var i = 0; i < string.length; i++ ) {
        result.push( encipherLetter( string[i], wheels, pos ) );
        pos = stepWheels( wheels, pos );
    }
    return result.join("");
};
