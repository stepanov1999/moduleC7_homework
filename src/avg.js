export function avg(array) {
    if(array.length === 0) return 0;

    return array.reduce((a, v) => a + v, 0) / array.length;
}