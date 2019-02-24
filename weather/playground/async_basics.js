console.log('Starting App...................');

setTimeout(()=>{
    console.log('Inside Call-Back');
},2000);

setTimeout(()=>{
    console.log('Second Call-Back');
},0);

console.log('Ending App..................');

