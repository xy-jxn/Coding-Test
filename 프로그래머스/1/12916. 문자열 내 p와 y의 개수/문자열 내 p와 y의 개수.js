function solution(s){
    const str = s.toLowerCase()

    return str.replaceAll('y').length == str.replaceAll('p').length ? true : false;
}