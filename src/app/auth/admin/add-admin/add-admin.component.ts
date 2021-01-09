import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit(): void {
  }

}
