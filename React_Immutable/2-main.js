import accessImmutableObject from './2-nested.js';

const obj = {
    name: {
        first: "Guillaume",
        last: "Salva"
   }
}

console.log(accessImmutableObject(obj, ['name', 'first']));