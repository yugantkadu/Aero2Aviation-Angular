import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { AdminService } from '../admin.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  user: User;

  constructor(private adminService:AdminService, private router: Router) {
    this.user= new User();
  }

  ngOnInit(): void {

  }

  addAdmin(form)
  {
    this.user.firstname = form.firstname;
    this.user.lastname =form.lastname;
    this.user.email=form.email;
    this.user.password=form.password;
    this.user.mobileno=form.mobileno;
    this.user.address=form.address;
    this.user.pincode=form.pincode;
    this.user.brandid={brandid : 200};
    this.user.categoryid={categoryid: 100};
    this.user.usertype="admin";
    console.log(form);
    this.adminService.invokeAddAdmin(this.user).subscribe( (data)=>{
      console.log(data);
      alert(data.message);
      this.router.navigate(['/admin', "user"]);
    },
    (err)=>{
      console.log("Error" + err);
    });

  }

}

