function x() {
    console.log("hello html");
}

x();

document.getElementById("button").addEventListener("click", () => {
    console.log("button clicked");
}) 

let throttleTimer;

const throttle = (callback, timer) => {
    if(throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
        callback();
        throttleTimer = false;
    },timer)

}



// memoization
const add = (a, b) => a + b;

console.log(add(2,3))
console.log(add(2,6))
console.log(add(2,3))

const memFunc = (func) => {
    let cache = {};
    return (...args) => {
        let cacheKey = args.join(",");
        if(!cache[cacheKey]){
            console.log("storing to cache");
            cache[cacheKey] = func.apply(this, args);
            return cache[cacheKey];
        }
        console.log("From cache");
        return cache[cacheKey];   
    }
}

const memoizedResult = memFunc(add);
console.log(memoizedResult(2,3))
console.log(memoizedResult(2,5))
console.log(memoizedResult(2,3))
