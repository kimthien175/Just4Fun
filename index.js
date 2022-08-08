function CondA(number) {
    // 189: 1 so dung va dat dung vi tri
    var first = Math.trunc(number / 100);
    var sec = Math.trunc(number / 10) % 10;
    var third = number % 10;
    var count = 0;
    if (1 == first) count++;
    if (8 == sec) count++;
    if (9 == third) count++;
    if (count == 1) return true;
    return false;
}

function CondB(number) {
    // 964: 2 so dung nhung sai vi tri
    var first = Math.trunc(number / 100);
    var sec = Math.trunc(number / 10) % 10;
    var third = number % 10;
    var count = 0;
    if ((9 == sec || 9 == third) && 9 != first) count++;
    if ((6 == first || 6 == third) && 6 != sec) count++;
    if ((4 == first || 4 == sec) && 4 != third) count++;
    if (count == 2) return true;
    return false;
}

function CondC(number) {
    // 147: 1 so dung nhung sai vi tri
    var first = Math.trunc(number / 100);
    var sec = Math.trunc(number / 10) % 10;
    var third = number % 10;
    var count = 0;
    if ((1 == sec || 1 == third) && 1 != first) count++;
    if ((4 == first || 4 == third) && 4 != sec) count++;
    if ((7 == first || 7 == sec) && 7 != third) count++;
    if (count == 1) return true;
    return false;
}

function CondD(number) {
    // 523: tat ca cac so deu chua dung
    var first = Math.trunc(number / 100);
    var sec = Math.trunc(number / 10) % 10;
    var third = number % 10;
    if (5 == first) return false;
    if (2 == sec) return false;
    if (3 == third) return false;
    return true;
}

function CondE(number) {
    // 286: 1 so dung nhung dat sai vi tri
    var first = Math.trunc(number / 100);
    var sec = Math.trunc(number / 10) % 10;
    var third = number % 10;
    var count = 0;
    if ((2 == sec || 2 == third) && 2 != first) count++;
    if ((8 == first || 8 == third) && 8 != sec) count++;
    if ((6 == first || 6 == sec) && 6 != third) count++;
    if (count ==1) return true;
    return false;
}

function main(){
               for (var i=100; i<1000; i++){
                              if (CondA(i) && CondB(i) && CondC(i) && CondD(i) && CondE(i)) console.log(i);
               }
               console.log('donee');
}

main();
