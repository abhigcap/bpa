import { Injectable } from '@angular/core';
import { Theme } from '../interfaces/theme.interface';
import { themeRed } from '../themes/theme-red';
import { themeClassic } from '../themes/theme-classic';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private active: Theme = themeClassic;
    private availableThemes: Theme[] = [themeClassic, themeRed];

    setTheme(theme: Themes): void {
        this.active = this.availableThemes[theme];
        Object.keys(this.active.properties).forEach((property) => {
            document.documentElement.style.setProperty(
             property,
             this.active.properties[property]
            )
        });
    }
}

export enum Themes {
    Classic = 0,
    Red = 1
}