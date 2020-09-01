import { Component, Input } from '@angular/core';
import { NavigationItem } from 'src/app/core/models/nav';

@Component({
  selector: 'ed-page-tabs-nav',
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.scss'],

})
export class PageTabsNavigationComponent {
  @Input() navigation: NavigationItem;

  get tabs()  {
    return this
      .navigation
      .children
      .filter( x => !x.hide );
  }
}
