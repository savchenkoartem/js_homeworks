let arr=[];

for (let i=0;;i++) {
arr[i]=parseInt(prompt("введи число от 0 до 1"));
let conf=confirm("еще число?");
if (conf==false) {
break;
    }
}
let stepen=arr.length-1
let result=0;
for (let u=0;u<arr.length;u++) {
       result+=arr[u]*2**stepen;
       stepen--;
    }

alert (`выввели в 2ичной системе ${arr.join("")} Ваше число это в 10ичной системе ${result}`)













