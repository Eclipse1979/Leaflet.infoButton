#Leaflet.infoButton

Leaflet.infoButton is a [Leaflet](https://github.com/Leaflet/Leaflet) plugin. it is a control that provides a popup box on the map.

Check out the [Demo](http://eclipse1979.github.io/Leaflet.infoButton/example/leaflet-infoButton.html).

## Using Leaflet.infoButton :

To use Leaflet-ConditionalLayer you have to create the control.  The function fn should only take the value of the input as a parameter and will be called when the input value is changed.

    var infoButton = L.control.infoButton(<Leaflet.infoButton options> options?).addTo(map);


## Simple usage example :

    var infoButton = L.control.infoButton({position:'topright'}).addTo(map);

## Methods :

Methods are the same as those of [Control](http://leafletjs.com/reference.html#control).

## Options :
Options are the same as those of [Control](http://leafletjs.com/reference.html#control) plus :
* `linkTitle:` link text of the button, default is `Leaflet`
* `title:` Title of the popup box, default is `''`
* `show:` wether, default is `false`
* `html:` maximal number of markers, default is :
`<p>Leaflet is an open source JavaScript library for <strong>mobile-friendly interactive maps</strong>. It is developed by <a href="http://agafonkin.com/en/">Vladimir Agafonkin</a> of <a href="https://mapbox.com>MapBox</a> with a team of dedicated <a href="https://github.com/Leaflet/Leaflet/graphs/contributors">contributors</a>. Weighing just about 30 KB of gzipped JS code, it has all the <a href="leafletjs.com/features.html">features</a> most developers ever need for online maps.</p>'`

