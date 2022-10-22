import { Component, ElementRef, OnInit } from '@angular/core';
import {
  faBars,
  faSearch,
  faEllipsisVertical,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent implements OnInit {
  // Icons
  faBars = faBars;
  faSearch = faSearch;
  faEllipsisVertical = faEllipsisVertical;
  faArrowLeft = faArrowLeft;
  // -------------------------
  isSearchMode = false;
  constructor() {}

  ngOnInit(): void {}

  public onSearchToggle() {
    this.isSearchMode = !this.isSearchMode;
  }
}
