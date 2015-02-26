L.Control.InfoButton = L.Control.extend({
    options: {
        position: 'topleft',
        title:'',
        show: false
    },

    onAdd: function (map) {
        this.container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');

        this.link = L.DomUtil.create('a', 'leaflet-bar-part leaflet-info-button', this.container);
        this.link.href = '#';
        this.link.title = this.options.title;
        this.link.innerHTML = "?";
        L.DomEvent.on(this.link, 'click', this._click, this);

        L.DomEvent.disableClickPropagation(this.container);
        this.infoWindowContainer = L.DomUtil.create('div', 'leaflet-infoWindow-container', this._map._container);
        this.infoWindowBlack = L.DomUtil.create('div', 'leaflet-infoWindow-black', this.infoWindowContainer);
        this.infoWindow = L.DomUtil.create('div', 'leaflet-infoWindow', this.infoWindowContainer);

        L.DomEvent.disableClickPropagation(this.infoWindow);

        L.DomEvent.on(this.infoWindowContainer, 'click', this._click, this);
        L.DomEvent.on(this.infoWindow, 'click', this._stopClick, this);

        return this.container;
    },
    _stopClick: function(e) {
        L.DomEvent.stopPropagation(e);
    },

    _click: function (e) {
        if (this.options.show == true) {
            this._hideInfo();
        } else {
            this._showInfo();
        }
    },
    _showInfo: function () {
        this.infoWindowContainer.style.display ="block";

        this.infoWindowBlack.style.animation ="showInfoContainer 0.2s";
        this.infoWindowBlack.style.webkitAnimationName ="showInfoContainer 0.2s";
        this.infoWindowBlack.style.opacity ="1";

        this.infoWindow.style.animation ="showInfo 0.5s";
        this.infoWindow.style.webkitAnimationName ="showInfo 0.5s";
        this.infoWindow.style.top ="10%";

        this.options.show = true;
    },
    _hideInfo: function () {
        this.infoWindowBlack.style.animation ="hideInfoContainer 0.2s";
        this.infoWindowBlack.style.webkitAnimationName ="hideInfoContainer 0.2s";
        this.infoWindowBlack.style.opacity ="0";

        this.infoWindow.style.animation ="hideInfo 0.5s";
        this.infoWindow.style.webkitAnimationName ="hideInfo 0.5s";
        this.infoWindow.style.top ="-100%";
        
        var _this =this;
        setTimeout(function (){_this.infoWindowContainer.style.display ="none";},500);

        this.options.show = false;
    }
});

L.control.infoButton = function(options) {
  var newControl = new L.Control.InfoButton;
  return newControl;
};