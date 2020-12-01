import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/homepage/non-authenticated/vehicle-brand-details/brands';
import { Category } from 'src/app/homepage/non-authenticated/vehicle-category-details/category';
import { User } from '../user';
import { UserService } from '../user.service';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User;
  brandType: any;
  changeBrand: Brands;
  categoryType: Category;

  modifyStatus: any;
  txt: string;
  constructor(private userService: UserService, private adminService: AdminService) { }

  ngOnInit(): void {
    //this.users = new User();
    this.callAllUsers();
  }

  callAllUsers(){
    this.userService.invokeAllUsers().subscribe((data: User) => {
      console.log(data);
      this.users = data;
    });
  }

  modify(user: User) {
    this.modifyStatus = 'Do you want to modify User with UserId ' + user.userid;
    const mod = confirm(this.modifyStatus);

    if (mod === true) {
      this.adminService.invokeModifyUser(user).subscribe((data: any) => {
        console.log(data);
      });
      alert('Userid ' + user.userid + ' has been modified ');
    }
    else {
      this.callAllUsers();
    }
  }

  delete(id: number) {
    this.modifyStatus = 'Do you want to delete User with UserId ' + id;
    const del = confirm(this.modifyStatus);

    if (del === true) {
      alert('Userid ' + id + ' has been deleted');
    } else {
      this.callAllUsers();
    }
  }
}
