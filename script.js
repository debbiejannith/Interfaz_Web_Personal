function doValidate() {
    try {
        addr = document.getElementById('nombre').value;
        pw = document.getElementById('email').value;
        console.log("Validating addr="+addr+" pw="+pw);
        if (addr == null || addr == "" || pw == null || pw == "") {
            alert("Falta llenar campos");
            return false;
        }

        return true;
    } catch(e) {
        return false;
    }
    return false;
}

    window.setInterval (BlinkIt, 500);
    var color = "while";  
    function BlinkIt () {
    var blink = document.getElementById ("blink");
    color = (color == "#FFFFFF")? "white" : "#FFFFFF";
    blink.style.color = color;
    blink.style.fontSize='52px';}    