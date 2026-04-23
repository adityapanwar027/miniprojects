// 1 => Basic Promise example (proper resolve/reject usage)
const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
        console.log("my name is Aditya Panwar");
        resolve("done");
    }, 2000);
});

firstPromise.then((result) => {
    console.log("Promise finished:", result);
});


// 2 => Promise chaining with proper success flow
const promiseOne = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve(10);
    } else {
        reject("Internal server error");
    }
});

promiseOne
    .then((value) => {
        console.log("first msg:", value);
        return 20;
    })
    .then((value) => {
        console.log("second msg:", value);
        return 30;
    })
    .then((value) => {
        console.log("third msg:", value);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("I will run in every condition");
    });


// 3 => Separate error handling example
promiseOne
    .then((value) => {
        console.log("then msg:", value);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


// 4 => Promise.all example (parallel execution handling)
const p1 = new Promise((resolve) => {
    setTimeout(() => resolve("first"), 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("second failed"), 2000);
});

const p3 = new Promise((resolve) => {
    setTimeout(() => resolve("third"), 3000);
});

Promise.all([p1, p3])
    .then((values) => {
        console.log("All success:", values);
    })
    .catch((error) => {
        console.error("Promise.all error:", error);
    });

    console.log("first")