$(document).ready(runWhenLoaded);

function runWhenLoaded() { 
  console.log("DOM Ready");

  Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: document.querySelector('.picture-window')    // Or '#yourElement' (optional)
    },
    decoder : {
      readers : ["code_128_reader"]
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();

      // Quagga.onProcessed(processedCallBack)
      Quagga.onDetected(processedCallBack);
  });
 }


 function processedCallBack(returnData){
   console.log("Process Data ", returnData);
  //  var returnDetect = detect(returnData);
  //  console.log(returnDetect);
 }

 