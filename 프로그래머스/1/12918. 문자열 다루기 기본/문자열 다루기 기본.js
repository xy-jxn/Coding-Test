function solution(s) {
    return (Number(s) || Number(s) == 0) && (s.length == 4 || s.length == 6) && !s.includes('e') ? true : false;
}