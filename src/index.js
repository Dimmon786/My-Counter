let count = 0;

document.getElementById("increaseBtn").onclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("decreaseBtn").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
};
