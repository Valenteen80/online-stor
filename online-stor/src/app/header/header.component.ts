import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SortingService } from '../servises/sorting/sorting.service';

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

  streamSearch$: Subject<string> = new Subject<string>();

  constructor(public sortingServise: SortingService) {}

  public filterByProdukt(): void {
    this.sortingServise.streamSearch$.next(this.search);
  }
}
