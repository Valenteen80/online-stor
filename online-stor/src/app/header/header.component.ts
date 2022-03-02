import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public search: string = '';
  public placeholderValue: string = 'поиск по товарам';
  public isMouseenterProfile: boolean = false;
  public valueAttributeAvatar: string = 'photo';
  public profilePicture: string = environment.defaultProfilePicture;

  constructor() {}
}
