let arr=[10,12,55,1,60,15,22];

function sort (arrays) {
let min1=Infinity;
let min2=Infinity;
for (let i=0;i<arrays.length;i++) {
if (arrays[i]<min1) {
min1=arrays[i];
}
}
for (let j=0;j<arrays.length;j++) {
if (arrays[j]==min1) {
continue;
}
else if (arrays[j]<min2) {
min2=arrays[j];
}
}
return min1+min2;
}
console.log(sort(arr));
