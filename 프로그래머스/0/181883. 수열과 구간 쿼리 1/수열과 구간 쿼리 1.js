function solution(arr, queries) {
    for(let querie of queries) {
        for(let i = querie[0]; i <= querie[1]; i++){
            arr[i] += 1;
        }
    }
    return arr;
}