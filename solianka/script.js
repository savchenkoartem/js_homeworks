function whichEntrance (floor,flatOnThefloor,howManyEntrance,numberOfFlat) {
floor=Number(prompt("введите сколько этажей в доме:"));
flatOnThefloor=Number(prompt("введите количество квартир на этаже:"));
howManyEntrance=Number(prompt("введите количество подъездов в доме:"));

let flatInTheEntrance=flatOnThefloor*floor;
let flatsInBuiling=flatInTheEntrance*howManyEntrance;

numberOfFlat=Number(prompt("введите номер квартиры чтобы узнать в каком подъезде она находится:"));

if (numberOfFlat>flatsInBuiling) {
alert(`вы ввели не верный номер квартиры так как в доме всего ${flatsInBuiling} квартир`)
return;
}

let entrance=1;
let whichFloor=1;

for (let k=1;k<=flatsInBuiling;k++) {
if (numberOfFlat>flatOnThefloor*k) {
whichFloor++
}
if (whichFloor>floor) {
whichFloor-=floor;
entrance++;
}
}

alert (`квартира №${numberOfFlat} находиться в ${entrance} подъезде на ${whichFloor} этаже`);
}


whichEntrance();



