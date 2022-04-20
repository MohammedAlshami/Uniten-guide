result = "1 sh 2002-11-21 1164504470 random address \n1 sh 2002-11-21 1164504470 random address \n";
result = result.split('\n');
result = result[0];
result = result.split("$");
result = result.filter(n => n);
result += '';
result = result.split(" ");
result = result.filter(n => n);

// result = result.splice(0, 8);
console.log(result);