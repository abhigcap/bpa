import { Component } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import { Themes } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bpa-demo';

  constructor(private themeService: ThemeService) {  
    this.themeService.setTheme(Themes.Classic)
  }
}
