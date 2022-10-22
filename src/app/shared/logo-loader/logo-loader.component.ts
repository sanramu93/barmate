import { Component, OnInit, Input } from '@angular/core';
import { LOGO_LOADER_COLORS } from './constants/logo-loader-colors';

@Component({
  selector: 'app-logo-loader',
  templateUrl: './logo-loader.component.html',
  styleUrls: ['./logo-loader.component.scss'],
})
export class LogoLoaderComponent implements OnInit {
  @Input() color = '';
  public imagePath = '';

  constructor() {}

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this.color = this.getColor(this.color, LOGO_LOADER_COLORS);
    this.imagePath = `../../../assets/images/logo/barmate-logo-${this.color}.png`;
  }

  private getColor(color: string, availableColors: string[]) {
    let newColor = availableColors[0];
    if (availableColors.includes(color)) newColor = color;
    return newColor;
  }
}
