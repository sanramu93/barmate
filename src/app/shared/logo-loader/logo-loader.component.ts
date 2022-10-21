import { Component, OnInit, Input } from '@angular/core';
import { LOGO_LOADER_COLORS }       from './constants/logo-loader-colors';

@Component({
  selector: 'app-logo-loader',
  templateUrl: './logo-loader.component.html',
  styleUrls: ['./logo-loader.component.scss']
})
export class LogoLoaderComponent implements OnInit {
  @Input() color = 'blue';
  public imagePath = '';
  

  constructor() { }

  ngOnInit(): void {
    this.setLogoColor(this.color);
  }

  setLogoColor(color: string) {
    if(LOGO_LOADER_COLORS.includes(color)) {
      this.color = color;
    } 
    this.imagePath = `../../../assets/images/logo/barmate-logo-${this.color}.png`
  }

}
