//ajax-anrop med XMLHttpRequest

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let jsonSt = JSON.parse(this.responseText);
        let information = jsonSt.information;
        let websites = jsonSt.websites;

//loop som läser data ifrån student.json fil 

        for(let i=0; i<information.length;i++){
           document.getElementById("info").innerHTML +=
           "<strong>Namn:</strong> "+information[i].name+"<br>"+"<strong>Email:</strong>"+
           "<a href='mailto:"+ information[i].email +"'>Mahmoud89ah@hotmail.com</a>"+"<br>"+
           "<strong>Webbplats</strong>: "+
           "<a href='"+information[i].webSite+"'target=_blank>https://github.com/MahmoudKhleif<br></a>"
        }


//loop som läser data ifrån student.json fil 
        for(let i = 0; i<websites.length; i++){
            document.getElementById("sites").innerHTML += 
           " <li>"+"<a href='"+websites[i].siteurl+"' target=_blank title='"+websites[i].description+"'>"+websites[i].sitename+"</a>"
        +"</li>"
        };
    }
};
xhttp.open('GET', 'student.json', true);
xhttp.send();