function foo() {
    return new Promise( function(resolve, reject) {
        setTimeout( function(){
            resolve("hello from foo");
        }, 2500);
    } );
}

function bar() {
    return new Promise( function(resolve, reject) {
        setTimeout( function(){
            resolve("hello from bar");
        }, 5000);
    } );
}

bar().then( function(str1){
    console.log(str1);
    foo().then( function(str2) {
        console.log(str2);
    } );
} )

// function foo() {
//     setTimeout( function(){
//         console.log("hello from foo");
//     }, 2500);
// }

// function bar() {
//     setTimeout( function(){
//         console.log("hello from bar");
//     }, 5000);
// }

// bar();
// foo();