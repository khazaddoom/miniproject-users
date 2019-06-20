import { Component } from '@angular/core';
import { User } from './user.model';
import { UserManagementService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  users: User[];

  constructor(private userService: UserManagementService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }


}
