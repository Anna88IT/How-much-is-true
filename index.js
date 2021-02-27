let inputValue = document.getElementById("input");
let getValue = document.getElementById("getValue");
let result = document.getElementById("result");

function handleResult() {
    let count = 0;
    let string = inputValue.value;
    let newArray = string.split(", ");

        for (let i = 0; i < newArray.length; i++) {
            if(newArray[i] === "true") {
                count++;
            }
        }

    result.innerText = `The result is ${count}`;
}

getValue.addEventListener("click", handleResult);
