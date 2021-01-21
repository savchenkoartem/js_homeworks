let days = {1:"sunday",2:"monday",3:"tursday",4:"wednesday",5:"friday",6:"suturday",7:"sunday",8:"sunday",9:"monday",10:"tursday",11:"wednesday",12:"friday",14:"suturday",15:"sunday",16:"monday",17:"friday"};

let value=Object.values(days);

let a=0;
let b=0;
let c=0;
let d=0;
let e=0;
let f=0;
for (let i=0;i<value.length;i++) {
    if (value[i]=="sunday") {
       a++;
    } else if (value[i]=="monday") {
       b++;
    } else if (value[i]=="tursday") {
        c++
    } else if (value[i]=="wednesday") {
        d++
    } else if (value[i]=="friday") {
        e++
    } else if (value[i]=="suturday") {
        f++
}
}

alert(`понедельник ${b} вторник ${c} среда ${d} пятница ${e} суббота ${f} воскреченье ${a}`);