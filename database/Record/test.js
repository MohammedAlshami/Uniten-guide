result = "8182828$Mohammed Alshami$2002-07-02$M$1164504470$43009 Kajang, Selangor$No medical history$1$\n8182828$Mohammed Alshami$2002-07-02$M$1164504470$43009 Kajang, Selangor$No medical history$1$\n";
result = result.split('\n');
result = result[0];
result = result.split("$");
result = result.splice(0, 8);
console.log(result);