function candyBar(){
    console.log(`My name is Slim Shady`)
}
function receivesAFunction(callback){
    callback()
}

const returnsANamedFunction = () =>receivesAFunction
const fn = returnsANamedFunction()

function returnsAnAnonymousFunction(){
    return function(){return `Hello hello hello`}
}
