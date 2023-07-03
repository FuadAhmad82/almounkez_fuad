function preferedBrowser() {
    alert("You prefer browsing internet with " );
  }

  function myFunction() {
    alert("الصفحة قيد الإنجاز ");
  }


  function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("مرحبا " + fname + "تم إرسال طلبك بنجاح ");
  }



  function writeText(txt) {
    document.getElementById("desc").innerHTML = txt;
  }


  function upper() {
    var x = document.getElementById("email");
    x.value = x.value.toUpperCase(); 
  }