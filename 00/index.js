// // // // function Var() {

// // // //     // f scp = f

// // // //     var a = 'JavaScript'; // 전역

// // // //     let aa = 'test';

// // // //     const n = 'bb';

// // // //     function A() {
// // // //         let d;
// // // //         if (true) {
// // // //             d = 'let은 true';
// // // //         }
// // // //         else {
// // // //             d = 'let은 false'
// // // //         }
// // // //         return (d);
// // // //     }
// // // //     // console.log(b);
// // // //     // A();
// // // //     console.log(A());
// // // // }



// // // // 즉시실행 함수
// // // (function (){
// // //     var global = '전역변수임';
// // //     console.log(global);
// // // })();

// // // // 함수
// // // function Fn() {
// // //     // 
// // //     function fn1() {
// // //         console.log('함수입니다');
// // //     }
// // //     // 
// // //     const fn2 = () => {
// // //         console.log('함수입니다');
// // //     }
// // //     // 
// // //     let obj = {
// // //         // 
// // //         text : 'Object입니다',
// // //         print1 : function(){
// // //             console.log(this);
// // //         },
// // //         // error 함수(최상위요소)
// // //         print2 : () => {
// // //             console.log(this);
// // //         }
// // //     }
// // //     obj.print1();
// // //     obj.print2();

// // // }
// // // Fn();

// // var a = 'ㅈㅇㅎ';
// // var 숫자 = 10;
// // // fasle : nulll undefined 0 false
// // if (숫자 < 10) {
// //     console.log('10보다 작음');
// // }
// // else if (숫자 > 10) {
// //     console.log('10보다 큽니다')
// // }
// // else {
// //     console.log('10입니다')
// // }
// // // for(let i = 0; i < 10; i++)
// // // {
// // //     console.log(i);
// // // }
// // // var a = [1,2,3,4,5,6,7,8,9];
// // var a = ['a','b','c'];
// // // in = index
// // // for(let i in a)
// // // {
// // //     console.log(i);
// // // }
// // // // of = 
// // // for(let i of a)
// // // {
// // //     console.log(i);
// // // }
// // // a.forEach((data, idx)=>{
// // //     console.log(data);
// // //     console.log(idx);
// // // });
// // let i = 0;
// // function 재귀(){
// //     i++;
// //     console.log(i);
// //     if(i != 1000)
// //     {
// //         재귀();
// //     }
// //     else
// //     {
// //     }
// // }
// // 재귀();
// let nu = 9;
// if(nu > 5)
// {
//     console.log('5보다 큽니다.');
// }
// switch(nu)
// {
//     case 10 : console.log('10임'); break;
//     default : console.log('아무것도아님'); break;
// }

// 구구단
for(let i = 1; i < 9; i++)
{
    console.log('=== ' + i + '단 ===');
    for(let ii = 1; ii<= 9; ii++)
    {
        console.log(i + 'x' + ii + '=' + i*ii);
    }
}

function gg(){

    
    var el0r = ~~(Math.random() * 10);
    var el1r = ~~(Math.random() * 10);
    var rsult = el0r * el1r;
    console.log(el0r);
    console.log(el1r);
    
    var ask = prompt(el0r + '곱하기'+ el1r + '는?');
    if(ask == '' || rsult != ask)
    {
        alert('오답');
        return;
    }
    alert('정답임');
}

gg();