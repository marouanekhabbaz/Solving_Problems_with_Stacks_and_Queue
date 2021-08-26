const Stack = require("./lib/stack");

const match = (expression) => {
    let stack = new Stack();
    let opening =["(","[", "{"];
    let closing = [")", "]", "}"];
    let combined = {"(":")", "[":"]", "{":"}"}

    for(let char of expression){
        if(opening.includes(char)){
            stack.push(char)
        }
        else{
            if(closing.includes(char)){
                if(stack.top){
                    let pop = stack.pop();
                    if(combined[pop]!== char) return false
                }else{ 
                    return false
                }
            }
        }
    }
    if(stack.top == null){
        return true
    }else{
        return false
    }
};
const actual = match("a + ({b + )c} + d");
console.log(actual)

module.exports = match;
