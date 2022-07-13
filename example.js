function example(input) {
    let arr = [1,2,1];

    let obj = {};
    obj.name = 'pesho';
    obj['num'] = 'seven';
    obj[2] = 3;
    arr.name = 4;
    
  let some = Object.values(obj);
  console.log(some)
    
    let marp = input.map((x)=> x * 2);
    console.log(marp)
    
}
example([1, 2, 3])