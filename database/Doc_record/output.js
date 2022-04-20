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
read('records.txt');

window.onload = function() {
    result = result.split('\n');
    result = result[0];
    result = result.split("$");
    result = result.filter(n => n);
    result += '';
    result = result.split(" ");
    result = result.filter(n => n);
    console.log(result);
    if (typeof(result[0]) === 'undefined') {
        document.getElementById('pat1').innerHTML = "-";
        document.getElementById('pat2').innerHTML = "-";
        document.getElementById('pat3').innerHTML = "-";
        document.getElementById('pat4').innerHTML = "-";
        document.getElementById('pat5').innerHTML = "-";
    } else {
        document.getElementById('pat1').innerHTML = result[0];
        document.getElementById('pat2').innerHTML = result[1];
        document.getElementById('pat3').innerHTML = result[2];
        document.getElementById('pat4').innerHTML = result[3];
        document.getElementById('pat5').innerHTML = result[4];
    }


    // document.getElementById('pat8').innerHTML = result[7];
}