/** Cuadrados
 ** Cuadrado */

// var square = (n, char) => {
//     for (var i = 0; i < n ; i++) {
//         var newChar = char
//         for (var j = 1; j < n; j++) {
//             newChar += char
//         }
//         console.log(i,newChar)
//     }
// }
//
// square(4, '*')

/** Cuadrado con Borde */

// var squareWithBorder = (n, charBorder, charInner) => {
//     for (var i = 0; i < n; i++) {
//         var newCharB = charBorder
//         for (var j = 0; j < n -1 ; j++) {
//              (i >= 1) && i < n -1 && j < n-2 ? newCharB += charInner : newCharB += charBorder
//         }
//         console.log(i, newCharB)
//     }
// }
//
// squareWithBorder(5, 'B', '*')

/* Cuadro Diagonal Left-Right: */
/** Dibuja un cuadro por consola con una diagonal dados unos caracteres*/
// var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {
//     for (var i = 0; i < n; i++) {
//         var charPrinted = ''
//         for (var j = 1; j <= n ; j++) {
//             if (i+1 === j) {
//                 charPrinted += charDiagonal
//             } else if (i+1 < j){
//                 charPrinted += charUp
//             } else {
//                 charPrinted += charDown
//             }
//
//         }
//         console.log(i, charPrinted)
//     }
// }
//
// squareDiagonalLR(6, "\\", "A", "B")

/* Cuadrado Diagonal Right-Left */
/** Dibuja un cuadro por consola con una diagonal inversa al ejercicio anterior*/

// var squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {
//     for (var i = 0; i < n; i++) {
//         var charPrinted = ''
//         for (var j = 1; j <= n ; j++) {
//             if (n-i === j) {
//                 charPrinted += charDiagonal
//             } else if (n-i < j){
//                 charPrinted += charDown
//             } else {
//                 charPrinted += charUp
//             }
//
//         }
//         console.log(i, charPrinted)
//     }
// }
//
// squareDiagonalRL(5, "/", "A", "B")

/* Medio Diamante */
/** Dibuja por consola medio diamante */

// var halfDiamond = (n, char) => {
//     for (var i = 0; i < n; i++) {
//         var charPrinted = char
//         for (var j = 1; j <= i ; j++) {
//            charPrinted += char
//         }
//         console.log(i, charPrinted)
//     }
//     for (var i = n-1; i > 0; i--) {
//         var charPrinted = char
//         for (var j = 1; j < i ; j++) {
//             charPrinted += char
//         }
//         console.log(i, charPrinted)
//     }
// }
//
// halfDiamond( 5,"*")

/** Pirámide */
/** Dibuja una pirámide por consola dado un número y caracter */

// var pyramid = (n, char) => {
//     for (var i = 0; i < n; i++) {
//         var charPrinted = ''
//         for (var j = 1; j < n * 2 ; j++) {
//             if (n === 1 ) {
//                charPrinted = char
//             } else if ( n > j + i  || j > n + i ) {
//                charPrinted += ' '
//             } else {
//                 charPrinted += char
//             }
//         }
//         console.log(i, charPrinted)
//     }
// }
// pyramid(5, "*")

/** Diamante */
/** dibuja un diamante por consola de un tamaño dado por un valor n, usando un caracter pasado como parámetro */

// var diamond = (n, char) => {
//     for (var i = 0; i < n; i++) {
//         var charPrinted = ''
//         for (var j = 1; j < n * 2 ; j++) {
//             if (n === 1 ) {
//                charPrinted = char
//             } else if ( n > j + i  || j > n + i ) {
//                charPrinted += ' '
//             } else {
//                 charPrinted += char
//             }
//         }
//         console.log(i, charPrinted)
//     }
//     for (var i = n-2; i >= 0; i--) {
//         charPrinted = ''
//         for (var j = 1; j < n * 2 ; j++) {
//             if (n === 1 ) {
//                charPrinted = char
//             } else if ( n > j + i  || j > n + i ) {
//                charPrinted += ' '
//             } else {
//                 charPrinted += char
//             }
//         }
//         console.log(i, charPrinted)
//     }
// }
//
// diamond(5, "*")