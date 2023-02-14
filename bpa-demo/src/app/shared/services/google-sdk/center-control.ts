import { ControlButtonTemplate } from "../../interface/control-button";

export class CenterControl {
    private map_: google.maps.Map;
    private center_: google.maps.LatLng;
    private defaultZoom_: number;
    constructor(
      controlDiv: HTMLElement,
      map: google.maps.Map,
      center: google.maps.LatLng,
      defaultZoom: number
    ) {
      this.map_ = map;
      this.center_ = center;
      this.defaultZoom_ = defaultZoom;
      this.initControlButton(controlDiv);
    }

    initControlButton = (controlDiv: HTMLElement) : void =>
    {
      //controlDiv.style.clear = "both";
      const items: Array<ControlButtonTemplate> = [
        {
          btnId: 'custom-btn-1', 
          btnText: 'North America', 
          eventListener: { 
          eventName: 'click', 
          eventAction:() => {
            const center = new google.maps.LatLng(54.5260, 105.2551);
            this.map_.setCenter(center);
            //this.map_.setZoom(this.defaultZoom_);
          }
        }},
        {
          btnId: 'custom-btn-2', 
          btnText: 'South America', 
          eventListener: { 
          eventName: 'click', 
          eventAction:() => {
            const center = new google.maps.LatLng(8.7832, 55.4915);
            this.map_.setCenter(center);
            //this.map_.setZoom(this.defaultZoom_);
          }
        }},
        {
          btnId: 'custom-btn-3', 
          btnText: 'EMEA', 
          eventListener: { 
          eventName: 'click', 
          eventAction:() => {
            const center = new google.maps.LatLng(29.2985, 42.5510);
            this.map_.setCenter(center);
            //this.map_.setZoom(this.defaultZoom_);
          }
        }},
        {
          btnId: 'zoomBtn', 
          btnText: 'Reset Zoom', 
          eventListener: { 
          eventName: 'click', 
          eventAction:() => {
            //this.map_.setCenter(this.center_);
            this.map_.setZoom(this.defaultZoom_);
          }
        }},
      ];
      for(let item of items) {
        const childItem = this.createControlButton(item);
        controlDiv.appendChild(childItem);
      }
    }

    createControlButton = ( controlBtn: ControlButtonTemplate) : HTMLElement =>
    {
      // Add CSS for the control border
      const btn = document.createElement("button");
      btn.style.height = "30px"
      btn.style.backgroundColor = '#fff';
      btn.style.border = '2px solid #fff';
      btn.style.borderRadius = '3px';
      btn.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      btn.style.color = 'rgb(25,25,25)';
      btn.style.cursor = 'pointer';
      btn.style.fontFamily = 'Roboto,Arial,sans-serif';
      btn.style.fontSize = '14px';
      btn.style.minWidth = '140px';
      btn.style.margin = '8px 0 22px';
      btn.style.padding = '0 5px';
      btn.style.textAlign = 'center';
  
      btn.id = controlBtn.btnId;
      btn.title = controlBtn.btnTitle ?? '';
  
      // Add CSS for the control interior
      const btnDiv = document.createElement("div");
  
      btnDiv.id = controlBtn.btnId + "Text";
      btnDiv.innerHTML = controlBtn.btnText;
      btn.appendChild(btnDiv);

      if(typeof(controlBtn) !== 'undefined' && controlBtn !== null && typeof(controlBtn?.eventListener) !== 'undefined' && controlBtn?.eventListener !== null)
      {
        btn.addEventListener(controlBtn?.eventListener?.eventName, controlBtn?.eventListener?.eventAction);
      }
      return btn;
    }
  }