export class MapsSearchBar {
    private map_: google.maps.Map;
    constructor(controlDiv: HTMLElement, map: google.maps.Map) {
        this.map_ = map;
        this.initSearchBar(controlDiv);
    }

    initSearchBar = (controlDiv: HTMLElement) : void =>
    {
        const innerDiv = document.createElement('div');
        innerDiv.style.display = 'flex';
        innerDiv.style.width = "100px"

        const input = document.createElement('input');
        input.id = 'search-location';
        input.type = 'text';
        input.placeholder = 'Search Site';
        input.style.height = "25px"
        input.style.backgroundColor = '#fff';
        input.style.border = '2px solid #fff';
        input.style.borderRadius = '3px 0px 0px 3px';
        input.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        input.style.color = 'rgb(25,25,25)';
        input.style.cursor = 'Cursor';
        input.style.fontFamily = 'Roboto,Arial,sans-serif';
        input.style.fontSize = '12px';
        input.style.minWidth = '100px';
        input.style.margin = '8px 0 22px';
        input.style.padding = '0 5px';

        const imgDiv = document.createElement('div');
        imgDiv.style.background = '#FE8641';
        imgDiv.style.margin = '8px 0 22px';
        imgDiv.style.height = "29px";
        imgDiv.style.width = "25px"
        imgDiv.style.borderRadius = '0px 3px 3px 0px';
        
        const img = document.createElement('img');
        img.src = '../../../assets/png/white-magnifying-glass.png'
        img.style.padding = "5px";
        img.style.height = "20px";
        img.style.width = "10px";
        
        imgDiv.appendChild(img);
        
        innerDiv.appendChild(input);
        innerDiv.appendChild(imgDiv);

        controlDiv.append(innerDiv);
    }
}