function solution(letter) {
    var answer = '';
    const morse = [ [ '.-', 'a' ],   [ '-...', 'b' ], [ '-.-.', 'c' ], [ '-..', 'd' ],[ '.', 'e' ],    [ '..-.', 'f' ],[ '--.', 'g' ],  [ '....', 'h' ],[ '..', 'i' ],   [ '.---', 'j' ],[ '-.-', 'k' ],  [ '.-..', 'l' ], [ '--', 'm' ], [ '-.', 'n' ], [ '---', 'o' ],  [ '.--.', 'p' ], [ '--.-', 'q' ], [ '.-.', 'r' ], [ '...', 's' ],  [ '-', 't' ],[ '..-', 'u' ],  [ '...-', 'v' ],[ '.--', 'w' ],  [ '-..-', 'x' ], [ '-.--', 'y' ], [ '--..', 'z' ]
    ]
    const arr = letter.split(' ');
    for(let item of arr) {
        for(let i = 0; i < morse.length; i++){
            if(morse[i][0] == item) {
                answer += morse[i][1];
                break;
            } 
        }
    }
    return answer;
}