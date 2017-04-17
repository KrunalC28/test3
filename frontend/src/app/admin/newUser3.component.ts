import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User }         from '../shared/user';
import { AdminService } from './admin.service';

@Component({
    selector: 'my-signup',
    templateUrl: './newUser3.component.html'
})
export class NewUser3Component implements OnInit  {
    userForm: FormGroup;
    user: User= {username:'',firstname:'',lastname:'',password:'',role:''};

    constructor(private fb: FormBuilder, private adminService:AdminService) { }

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

    save() {
        console.log(this.userForm);
    }

    register(){
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
