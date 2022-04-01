import { Component , Input} from '@angular/core';

@Component({
  selector: 'my-mono-repo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
@Input()
TituleHeader !: string;

}
