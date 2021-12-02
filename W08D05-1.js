function isLanguageDiverse(list) {
  let languages = []
  let counter =[]

  list.forEach((element) => {
    let found = languages.includes(element.language)
    if(found){
      let dex = languages.indexOf(element.language)
      counter[dex]=counter[dex]+1;
    }else{
      languages.push(element.language)
      counter.push(1)
    }
  });

  let divirse = true;
  counter.forEach((item, i)=>{
    for (let index = 0; index < counter.length; index++) {
      if(item/2 > (counter[index])){
        divirse = false;
        break;
      }
    }
  })
  return divirse;
}