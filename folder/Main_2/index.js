function solve(host_ip, org_mask, new_mask, id) {
    function ip_to_bin(IP) {

        IP = IP.split(".")
        let ip_temp;
        let x;
        for (let i = 0; i < 4; i++) {
            ip_temp = (+IP[i]).toString(2)
            if (ip_temp.length == 8)
                IP[i] = ip_temp;
            else
                IP[i] = "0".repeat(8 - ip_temp.length) + ip_temp;

        }

        return IP.join(".");

    }

    host_ip = ip_to_bin(host_ip)
    org_mask = ip_to_bin(org_mask)
    new_mask = ip_to_bin(new_mask)

    let net = 0;
    let sub = 0;
    let host = 0;

    for (let i = 0; i < 35; i++) {
        if (org_mask[i] == "1" && new_mask[i] == "1")
            net += 1;
        if (org_mask[i] = "0" && new_mask[i] == "0")
            host += 1;
        if ((org_mask[i] == "1" && new_mask[i] == "0") || (org_mask[i] == "0" &&
                new_mask[i] == "1"))
            sub += 1;
    }

    temp = host_ip.split('.');
    temp = temp.join("");
    temp = temp.split("")
    console.log(host)
    for (let i = 32 - host; i < 32; i++) {
        // temp[i - host] = 0;
        temp[i] = 0;
    }
    console.log("Temp: " + temp);





    temp = temp.join("");
    network_address = temp.slice(0, 8) + "." + temp.slice(8, 16) + "." + temp.slice(16, 24) + "." + temp.slice(24, 32);


    first_address = temp.slice(0, 8) + "." + temp.slice(8, 16) + "." + temp.slice(16, 24) + "." + temp.slice(24, 31) + "1"

    // #  Broadcast address
    new_temp = network_address.split(".");
    new_temp = new_temp.join("");
    new_temp = new_temp.split("");
    for (let i = 32 - host; i < 32; i++) {
        new_temp[i] = 1;
    }

    new_temp = new_temp.join("");
    broadcast_address = new_temp.slice(0, 8) + "." + new_temp.slice(8, 16) + "." + new_temp.slice(16, 24) + "." + new_temp.slice(24, 32);


    // # # last host address
    last_address = new_temp.slice(0, 8) + "." + new_temp.slice(8, 16) + "." + new_temp.slice(16, 24) + "." + new_temp.slice(24, 31) + "0";



    function bin_to_ip(value) {
        value = value.split(".")
        value = value.join("")
        console.log(value);
        x = (parseInt(value.slice(0, 8), 2)).toString() + "." + (parseInt(value.slice(8, 16), 2)).toString() + "." + (parseInt(value.slice(16, 24), 2)).toString() + "." + (parseInt(value.slice(24, 32), 2)).toString()
        return x;
    }

    document.getElementById(id).innerHTML += "Number of Subnet Bits: " + sub + "<br>";
    document.getElementById(id).innerHTML += "Number of Subnets Created: " + 2 ** sub + "<br>";
    document.getElementById(id).innerHTML += "Number of Host Bits per Subnet: " + host + "<br>";
    document.getElementById(id).innerHTML += "Number of Hosts per Subnet: " + 2 ** host + "<br>";

    document.getElementById(id).innerHTML += "Network Address: " + bin_to_ip(network_address) + "<br>";
    document.getElementById(id).innerHTML += "First Host Address: " + bin_to_ip(first_address) + "<br>";
    document.getElementById(id).innerHTML += "Last Host Address: " + bin_to_ip(last_address) + "<br>";
    document.getElementById(id).innerHTML += "Broadcast Address: " + bin_to_ip(broadcast_address) + "<br>";

};

let host = 0;
let org = 0;
let new_val = 0;

function get_input(ID) {
    document.getElementById(ID).innerHTML = "";



    host = document.getElementById('host').value;
    org = document.getElementById("org").value;
    new_val = document.getElementById("new").value;
  


    console.log(org);

    console.log(new_val);
    solve(host, org, new_val, ID);


    // solve("172.22.32.12", "255.255.0.0", "255.255.224.0", "demo");

}
