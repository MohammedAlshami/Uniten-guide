let result = "";

function readfile(file) {
    // await delay(100);
    fetch(file)
        .then(response => response.text())
        .then(data => {
            // Do something with your data
            // console.log(typeof(data));
            result = data;
        });

}

function read() {
    let file = 'records.txt';
    readfile(file);
}
read();

window.onload = function() {
    result += '';
    result = result.split('\n');
    result = result[0];
    result = result.split("$");
    result = result.splice(0, 8);
    console.log(result);
    document.getElementById('pat1').innerHTML = result[0];
    document.getElementById('pat2').innerHTML = result[1];
    document.getElementById('pat3').innerHTML = result[2];
    document.getElementById('pat4').innerHTML = result[3];
    document.getElementById('pat5').innerHTML = result[4];
    document.getElementById('pat6').innerHTML = result[5];


    // document.getElementById('pat8').innerHTML = result[7];
}