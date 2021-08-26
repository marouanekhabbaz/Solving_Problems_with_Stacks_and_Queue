const Queue = require('./lib/queue')
const binary = (max) => {
let queue = new Queue();
queue.enqueue("1");
let result =[];
for(let i=0; i< max; i++){
    let value = queue.dequeue();
    result.push(value)
    queue.enqueue(value+0)

    queue.enqueue(value+ "1")
}
return result

}
let x = binary(1);
console.log(x)

module.exports = binary;
