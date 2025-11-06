var complexType = {name: 
    "myName",
    id: 1
};

complexType = {id: 2, name: "another name", user: "hello user"};

console.log(complexType);

const nestedArray = [1, [2, 3, [4, [5]]]];

const flatArray = nestedArray.flat(Infinity);

console.log(flatArray);