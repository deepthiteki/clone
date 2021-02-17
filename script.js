window.onload = function(){
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&key=AIzaSyDVPk74ldzTiYee9gVHGHuT7oz-GS0Ji-U")
    .then(response => response.json())
    .then(data => {
        console.log(data["items"])
        content(data);
    })
    .catch(error => console.log(error));
}
function search(){
    var q = document.getElementById("q").value;
    q = ""+q;
    console.log(q);
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${q}%20dog&type=video&videoDefinition=high&key=AIzaSyDVPk74ldzTiYee9gVHGHuT7oz-GS0Ji-U`)
    .then(response=>response.json())
    .then(data => {
        content(data);
    })
    .catch(error=>console.log(error))
    
}
 
function content(data){
    for(let i=0;i< data["items"].length; i=i+3){
        //var row = document.createElement("div");
        //row.setAttribute("class","row");
        var col1=document.createElement("div")
        col1.setAttribute("class","col-3");
        /*var col2=document.createElement("div")
        col2.setAttribute("class","col-3");
        var col3=document.createElement("div")
        col3.setAttribute("class","col-3");
        var col4=document.createElement("div")
        col4.setAttribute("class","col-3");*/
        //var col1 = document.getElementById("col1");
        //var col2 = document.getElementById("col2");
        //var col3 = document.getElementById("col3");
        var res = document.getElementById("vidoes_list");

        var span1 = document.createElement('span');
        var iframe = document.createElement('iframe');
        iframe.setAttribute("src",data["items"][i]["snippet"]["thumbnails"]["high"]["url"]);
        iframe.setAttribute("height",data["items"][i]["snippet"]["thumbnails"]["high"]["height"]);
        iframe.setAttribute("width",data["items"][i]["snippet"]["thumbnails"]["high"]["width"]);
        var p = document.createElement('p');
        p.innerHTML=`${data["items"][i]["snippet"]["channelTitle"]}||${data["items"][i]["snippet"]["publishedAt"]}`;
        span1.append(iframe,p);
        col1.append(span1);
        //row.append(col1);

        var span2 = document.createElement('span');
        var iframe2 = document.createElement('iframe');
        iframe2.setAttribute("src",data["items"][i+1]["snippet"]["thumbnails"]["high"]["url"]);
        iframe2.setAttribute("height",data["items"][i+1]["snippet"]["thumbnails"]["high"]["height"]);
        iframe2.setAttribute("width",data["items"][i+1]["snippet"]["thumbnails"]["high"]["width"]);
        var p1 = document.createElement('p');
        p1.innerHTML=`${data["items"][i+1]["snippet"]["channelTitle"]}||${data["items"][i+1]["snippet"]["publishedAt"]}`;
        span2.append(iframe2,p1);
        col1.append(span2);
       // row.append(col2);


        var span3 = document.createElement('span');
        var iframe3 = document.createElement('iframe');
        iframe3.setAttribute("src",data["items"][i+2]["snippet"]["thumbnails"]["high"]["url"]);
        iframe3.setAttribute("height",data["items"][i+2]["snippet"]["thumbnails"]["high"]["height"]);
        iframe3.setAttribute("width",data["items"][i+2]["snippet"]["thumbnails"]["high"]["width"]);
        var p2 = document.createElement('p');
        p2.innerHTML=`${data["items"][i+2]["snippet"]["channelTitle"]}||${data["items"][i+2]["snippet"]["publishedAt"]}`;
        span3.append(iframe3,p2);
        col1.append(span3);
        //row.append(col3);
        document.getElementById("vidoes_list").append(col1);
        
         }
}
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

