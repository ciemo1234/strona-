import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed: boolean = true;
  get isLoggedIn() {
    return this.authorizationService.isLoggedIn;
  }
  @Output() logout = new EventEmitter();
  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
  }
  onLogoutClicked(){
    this.logout.emit(null);
  }
}