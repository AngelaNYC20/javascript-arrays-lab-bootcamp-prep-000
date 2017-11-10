
function destructivelyAppendKitten (name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten (name) {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  console.log(kittens)
  kittens.shift();
  console.log(kittens)
  return "Not kittens";
}

function appendKitten(name) {
  
  return "first"
}
