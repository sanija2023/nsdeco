
function copyID(){

    var labelCopyPid = document.getElementById("copyText").innerText;

    

    // var textCopyPid = labelCopyPid.textContent;

    // labelCopyPid.select();   
    // labelCopyPid.setSelectionRange(0, 99999); //For Mobile

    //Copy the Text
    // navigator.clipboard.writeText(labelCopyPid);




    // Create a temporary textarea element
    var tempInput = document.createElement("textarea");
    tempInput.value = labelCopyPid;
    document.body.appendChild(tempInput);

    // Select the text inside the textarea
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);  // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempInput);

    

    // Alert the copied Text
    alert("Product ID Copied ! :  " + labelCopyPid);




}




function copyIDGst50(){

    var labelCopyPid = document.getElementById("copyTextGst-50").innerText;

    

    // var textCopyPid = labelCopyPid.textContent;

    // labelCopyPid.select();   
    // labelCopyPid.setSelectionRange(0, 99999); //For Mobile

    //Copy the Text
    // navigator.clipboard.writeText(labelCopyPid);




    // Create a temporary textarea element
    var tempInput = document.createElement("textarea");
    tempInput.value = labelCopyPid;
    document.body.appendChild(tempInput);

    // Select the text inside the textarea
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);  // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempInput);

    

    // Alert the copied Text
    alert("Product ID Copied ! :  " + labelCopyPid);




}

function gst(){ //

    var labelCopyPid = document.getElementById("copyTextGst-50").innerText;

    // Create a temporary textarea element
    var tempInput = document.createElement("textarea");
    tempInput.value = labelCopyPid;
    document.body.appendChild(tempInput);

    // Select the text inside the textarea
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);  // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempInput);

    

    // Alert the copied Text
    alert("Product ID Copied ! :  " + labelCopyPid);




}