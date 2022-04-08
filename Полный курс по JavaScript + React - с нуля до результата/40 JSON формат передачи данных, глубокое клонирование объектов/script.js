'use strict';

const persone = {
    name: 'Alex',
    tel: '88005553535',
    parents: {
        mom: 'Alisa',
        dad: 'Daniel'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);
console.log(clone.parents.mom);