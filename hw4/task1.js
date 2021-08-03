const ipsBetween = (ip1, ip2) => {
    let diff = 0;
    const ip1Arr = ip1.split(".");
    const ip2Arr = ip2.split(".");
    console.log(ip1Arr);

    if (ip1Arr.length !== 4 || ip2Arr.length !== 4) {
        return "Something wrong with your IPs: incorrect format";
    }

    for (let i = 0; i < 4; i += 1) {
        if (isNaN(ip1Arr[i]) || isNaN(ip2Arr[i]) || ip1Arr[i] < 0 || ip1Arr[i] > 255 || ip2Arr[i] < 0 || ip2Arr[i] > 255) {
            return "Invalid IPs. Check your IPs"
        }
        diff += (ip1Arr[i] - ip2Arr[i]) * (256 ** (3 - i));
    }
    return Math.abs(diff);
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
console.log(ipsBetween("10.0.0.0", "10.0.1.0"));
console.log(ipsBetween("20.0.0.10", "20.0.1.0"));