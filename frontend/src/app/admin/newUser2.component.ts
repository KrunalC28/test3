import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User }         from '../shared/user';
import { AdminService } from './admin.service';

@Component({
    moduleId: module.id,
    selector: '<new-user2></new-user2>',
    templateUrl: 'newUser2.component.html'
})

export class NewUser2Component implements OnInit {
    user:User = {username:'',firstname:'',lastname:'',password:'',role:''};
    userForm:FormGroup;
    constructor( private fb:FormBuilder, private adminService:AdminService) { }

    ngOnInit(): void {
        this.userForm = this.fb.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            username:['', Validators.required],
            role:['', Validators.required],
            password:['', Validators.required],
            cpassword:['', Validators.required] 
        });
    }

    register(){
      //console.log(model);
      let u = Object.assign({}, this.user,this.userForm.value);
      console.log(u);
      this.adminService.register(u).subscribe(
        (data) => {
          if(data!=null){
            this.userForm.reset();
          }
          else {
            console.log('Error ');
          }
        },
        (err) =>{
          console.log(err);
        }
      );
  }
}