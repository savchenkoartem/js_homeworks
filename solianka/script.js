

function whichEntrance (floor,flatOnThefloor,howManyEntrance,numberOfFlat) {
floor=document.querySelector('.numberfloor');
flatOnThefloor=document.querySelector('.numberflat');
howManyEntrance=document.querySelector('.numberentrance');
numberOfFlat=document.querySelector('.numberofFlat');
let numberOfFlat1=parseInt(numberOfFlat.value);
let result=document.querySelector('.result');
    
let flatInTheEntrance=parseInt(flatOnThefloor.value*floor.value);
let flatsInBuiling=flatInTheEntrance*parseInt(howManyEntrance.value);


if (numberOfFlat1>flatsInBuiling) {
alert(`вы ввели не верный номер квартиры так как в доме всего ${flatsInBuiling} квартир`)
return;
} else {

let entrance=1;
let whichFloor=1;

for (let k=1;k<=flatsInBuiling;k++) {
if (numberOfFlat1>Number(flatOnThefloor.value)*k) {
whichFloor++
}
if (whichFloor>parseInt(floor.value)) {
whichFloor-=parseInt(floor.value);
entrance++;
}
}
alert(`квартира №${numberOfFlat1} находиться в ${entrance} подъезде на ${whichFloor} этаже`);
}
}

document.querySelector('.button').onclick=whichEntrance;






