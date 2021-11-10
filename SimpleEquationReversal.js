function solve(eq){
    let reverseSTR = eq.split(/([*\+\-\/])/).reverse().join('')
    return reverseSTR;
}

solve('100*3/6666');
