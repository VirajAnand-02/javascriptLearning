'use strict';
const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3;
function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= 2*avgKoalas){
        return `Dolphins wins (${avgDolphins} vs ${avgKoalas})`;
    }else if(avgKoalas >= 2*avgDolphins){
        return `Koalas wins (${avgKoalas} vs ${avgDolphins})`;
    }else{
        return "No team wins";
    }
}

// avg
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

console.log(checkWinner(avgDolphins, avgKoalas));