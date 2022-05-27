function button() {
  data = document.getElementById("inputArea").value;
  if (data == "") {
    return;
  }
  dataArray = data.replace(/(^"|"$)/g, '').split(",");
  output = dataArray.slice(2).toString();
  console.log(output);
  document.getElementById("dataString").innerHTML = "Data entered: " + data.replace(/(^"|"$)/g, '');
  document.getElementById("match").innerHTML = "Match: " + dataArray[0];
  document.getElementById("team").innerHTML = "Team: " + dataArray[1];
  //generate qr code
  var typeNumber = 0;
  var errorCorrectionLevel = 'L';    
  var qr = qrcode(typeNumber, errorCorrectionLevel);
  qr.addData(output);
  qr.make();
  document.getElementById('qrcode').innerHTML = qr.createImgTag();
}

