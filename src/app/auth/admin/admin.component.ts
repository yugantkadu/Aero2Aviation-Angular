import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/homepage/non-authenticated/vehicle-brand-details/brands';
import { Category } from 'src/app/homepage/non-authenticated/vehicle-category-details/category';
import { User } from '../user';
import { UserService } from '../user.service';
import { AdminService } from './admin.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
  routeName: string;

  modifyStatus: any;
  txt: string;
  constructor(private userService: UserService, private adminService: AdminService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.users = new User();
    this.route.paramMap.subscribe( (params: ParamMap) => {
      this.routeName = params.get('routeName');
      console.log(this.routeName);
    });
    if(this.routeName === 'user'){
      this.callAllUsers();
    }
    else if(this.routeName === 'category') {

    }
    else if(this.routeName === 'brand') {

    }
    else if(this.routeName === 'product') {

    }
    else if(this.routeName === 'order') {

    }
    else if(this.routeName === 'payment') {

    }
  }

  callAllUsers(){
    this.userService.invokeAllUsers().subscribe((data: User) => {
      console.log(data);
      this.users = data;
    });
  }

  modify(user: User) {
    if(this.routeName === 'user'){
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
    else if(this.routeName === 'category'){
      this.modifyStatus = 'Do you want to modify category with UserId ' + user.userid;
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
    else if(this.routeName === 'brand'){
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
    else if(this.routeName === 'order'){
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
    else if(this.routeName === 'product'){
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
    else if(this.routeName === 'payment'){
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
