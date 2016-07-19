function initialize() {

    var myLatlng = new google.maps.LatLng(50.753998, 25.326916);
    var mapOptions = {
        center: new google.maps.LatLng(50.753998, 25.328916),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"We are here!"
    });

    map.setOptions({});
}

function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAaOWKyamSxMTXclSDFmJ2N4Am20PCTD6I&sensor=FALSE&callback=initialize";
    document.body.appendChild(script);
}