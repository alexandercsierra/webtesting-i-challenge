module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement + 1 < 20){
    item.enhancement +=1;
  }
  return item
}

function fail(item) {
  let enh = item.enhancement;

  if(enh < 15){
    item.durability -= 5
  } 
  if (enh >= 15){
    item.durability -= 10
  } 
  if (enh > 16){
    item.enhancement -=1
  } 
  return item
}

function repair(item) {
  return {...item, durability: 100};
}

function get(item) {
  if(item.enhancement > 0){
    let name = `[+${item.enhancement}] ${item.name}`
    item.name = name
  };
}
