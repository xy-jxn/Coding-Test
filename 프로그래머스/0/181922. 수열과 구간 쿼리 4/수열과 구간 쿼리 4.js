function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++) {
        let [s, e, k] = queries[i];
        arr = arr.map((item, idx) => s <= idx && idx <= e && idx % k == 0 ? item += 1 : item);
    }
    return arr;
}