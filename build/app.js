/* TIMING OUT */
// const logMessage = (message: string) =>  console.log(message);
// logMessage('First from logMessage()!');
// setTimeout(() => logMessage('Second from logMessage(), after a 2 second delay!'), 2000);
// const getWords = (message: string) =>  console.log(message);
// setTimeout(() => {
//     getWords('First in line, first to finish from `getWords()`!');
//     setTimeout(() => {
//         getWords('Saying hey from `getWords()`, Called second and delayed for 3 seconds!');
//         setTimeout(() => {
//             getWords('Saying hey from `getWords()`, Called third and delayed for 2 seconds!');
//             setTimeout(() => {
//                 getWords('Saying hey from `getWords()`, Called fourth and delayed for 1 seconds!');
//             }, 1000);
//         }, 2000);
//     }, 3000);
// }, 0);
/* CALLBACKS AND RECURSION */
// const done = () => console.error('Job\'s done!');
// const countdown = (num: number, callback) => {
//     setTimeout(() => {
//         if (num > 0) {
//             console.warn(`${num}...`) 
//             countdown(num-1, done)
//         } else { 
//             callback();
//         }
//     }, 1000);
// };
// countdown(5, done);
/* PROMISES PROMISES */
var lunchTime = !!(Date.now() % 2); // Casting to a boolean the evenness/oddness of the timestamp
var orderMeSomeFood = function () {
    return new Promise(function (resolve, reject) {
        if (lunchTime) {
            var lunchOfChoice = {
                "soup": "Surin Coconut Mushroom Tofu",
                "entree": "Hattie B's, Large Dark, Damn Hot, Mac, and Greens",
                "drink": "Ice-Cold Can of Dr Pepper"
            };
            resolve(lunchOfChoice);
        }
        else {
            var notLunchTime = new Error('It is NOT lunchtime, sorry');
            reject(notLunchTime);
        }
    });
};
orderMeSomeFood()
    .then(function (lunchOfChoice) { return console.info(lunchOfChoice); })["catch"](function (err) { return console.error(err); });
// Same underlying object, just compact with one line returns for each fulfill/reject, both in a ternary line
var orderMeSomeFood2 = function () {
    return new Promise(function (resolve, reject) {
        lunchTime ? resolve({ "food": "Coconut soup", "drink": "water" }) : reject(new Error('Error: LunchException'));
    });
};
orderMeSomeFood2()
    .then(function (lunchOfChoice) { return console.info(lunchOfChoice); })["catch"](function (err) { return console.error(err); });
