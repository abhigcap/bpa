import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavigationBarComponent } from './layout/navigation-bar/navigation-bar.component';
import { ButtonComponent } from './component/button/button.component';
 
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationBarComponent,
    ButtonComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationBarComponent,
    ButtonComponent
  ]
})
export class SharedModule {  }