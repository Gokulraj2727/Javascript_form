document.getElementById('submit').onclick=function(a){
    a.preventDefault();
                     var table = document.getElementById("table");
                     var row = table.insertRow(-1);
                     var name = row.insertCell(0);
                     var email = row.insertCell(1);
                     var mobile = row.insertCell(2);
                     var location  = row.insertCell(3);
                     var country  = row.insertCell(4);
                     var state  = row.insertCell(5);
                     var District  = row.insertCell(6);
                     name.innerHTML = document.getElementById("name").value;
                     email.innerHTML = document.getElementById("mail").value;
                     mobile.innerHTML = document.getElementById("mobile").value;
                     location.innerHTML = document.getElementById("location").value;
                     country.innerHTML = document.getElementById("country").value;
                     state.innerHTML = document.getElementById("state").value;
                     District.innerHTML = document.getElementById("District").value;
                    
                     return false;
     }
          
     $("#name").keypress(function (e) {
        if( e.which > 48 && e.which < 57 ){ return false; }
    });
    
    $("#mobile").keypress(function (e) {
        var mobileno = document.getElementById("mobile").value;
        console.log(mobileno);
       
       // if(mobileno.length >= 10){return false;}
    
        if(e.which == 31){return true}
        else{
            if( e.which < 48 || e.which > 57 ){ return false; }
        }
    });
    
              //name//
        //  document.getElementById('name').addEventListener('keydown', function() {
        //      var text= name.textCode;
        //      alert(text)
        //      if(text > 48 || text < 57)
        //        name.preventDefault();
        //   })
        //  email
       
        function validateEmail(){
        var mail = document.getElementById('mail').value;
        var mailformat =  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(mail.match(mailformat)){
        document.querySelector('#mail').style.border='1px solid green';
        return true;
        }
        else
        {
        document.querySelector('#mail').style.border='1px solid red';
        return false;
        }
        }
    
        // document.getElementById('mobile').addEventListener('keydown', function(mobile) {
        //     var text = mobile.textCode;
        //     if(textCode> 31&&
        //      (textCode<48||textCode>57))
        //       mobile.preventDefault();
        //  })


function myFunction(){
    var currentdate = new Date();
    document.getElementById("newDate").innerHTML=currentdate.getDate()+"/"+(currentdate.getMonth()+1)+"/"+currentdate.getFullYear();
    var currentdate = new Date();
    document.getElementById("newTime").innerHTML=currentdate.getHours()+":"+(currentdate.getMinutes()
    );
}