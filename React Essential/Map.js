// map filter
// array ma use hunxa
// euta naya array return garxa

// map ra filter maa ke xa ta Difference:
// map => sabai return garxa (same size as parent)
// filter => item reduce garxa selection
// filter => (size smaller then paren garauna xa vane use garne)

var arr = [1, 2, 3, 4, 5];

//map: each  element maa kei  garne and naya element maa rakhne

arr.map(function () {});
// React maa yo ES5 wala fun use gardaina
// arrow fun use garxa hai ta

// Note: map maa return garna parxa hai ta (must)
const ans1 = arr.map((val) => {
  return val * 2;
});
console.log(ans1);
console.log("-------------------------------------");

// return matra xa vane use Implict return
//same as mathi ko jastai hai ta
const ans2 = arr.map((val) => val * 2);
console.log(ans2);
console.log("-------------------------------------");

// React maa euta state array maa 1 le increase garne ? How
// and update garne??
// commom: naya array garaune return garne !! simple
// ani naya arraya le replace garne
var state = [1, 2, 3, 4, 5];
console.log(state);
// return matra xa so : implict return garne
const stateIncrement = state.map((item) => item + 1);
state = stateIncrement;
console.log("-------------------------------------");
console.log(state);
console.log(stateIncrement);

// euta array maa 5 vanda badi xa vane matra add 5
// natra sano wala maa as it is
var state2 = [2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(state2);
const state2Incre = state2.map((x) => (x > 5 ? x + 5 : x));
console.log(state2Incre);
console.log("-------------------------------------");

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const dataAns = data.map((x) => (x % 2 === 0 ? x * 2 : x));
console.log("-------------------------------------");
console.log(data);
console.log(dataAns);
