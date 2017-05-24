function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(42.03013, -93.65216), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDXZGNNWuB7rxQ5AxpIm5nyiX74uBVPg-Y&callback=myMap"/>
</script>
