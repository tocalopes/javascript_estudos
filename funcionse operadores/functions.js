function fn(){
    return 'Code here';
}

const arrowFn = () => 'Code Here';
const arronFn2 = () => {
    return 'Code here';
}

fn.prop = 'posso criar propriedades';
console.log(fn());
console.log(fn.prop);
console.log(fn);

//Receber Parâmetros
const logVaue = value => console.log(value);
const logFnResult = fnParam =>console.log(fnParam());

logFnResult(fn);