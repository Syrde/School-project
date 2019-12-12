function done() {
    // input
    var first = document.getElementById("firstnumber").value;
    var second = document.getElementById("secondnumber").value;
    var to_tal = first * (100 - second) / 100;
    document.getElementById("firstnumber").innerHTML = first;
    document.getElementById("secondnumber").innerHTML = second;
    document.getElementById("total").innerHTML = to_tal;
}
done();