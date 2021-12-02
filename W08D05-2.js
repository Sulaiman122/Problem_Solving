
function findSenior(list) {
    let max =Math.max(...(list.map(item=>item.age)))
    const seniors = list.filter(s=>s.age==max);
    return seniors;
  }

