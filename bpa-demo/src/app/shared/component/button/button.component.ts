import { Component, EventEmitter, Input, OnInit, Output, Type } from '@angular/core';
import { ButtonType } from '../../enum/buttonTypes.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('btn-text') btnText: string = '';
  @Input('btn-title') btnTitle: string = '';
  @Input('show-title') isShowBtnTitle: boolean = true;
  @Input('width') width: string = '100%';
  @Input('height') height: string = '30px';
  @Input('btnType') btnType: ButtonType = ButtonType.primary;
  
  @Output() onClick = new EventEmitter<any>();

  ngOnInit() {
    this.btnTitle = this.btnText;
  }
 
  onBtnClick(event: any) {
    this.onClick.emit(event);
  }

  public get ButtonType(): typeof ButtonType {
    return ButtonType; 
  }
}
