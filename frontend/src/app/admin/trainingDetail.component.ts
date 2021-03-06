import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TableComponent } from './table.component';
import { User } from '../shared/user';
import { AdminService } from './admin.service';

@Component({
    moduleId: module.id,
    selector: 'training-details',
    templateUrl: 'trainingDetail.component.html'
})

export class TrainingDetailsComponent implements OnInit {
    users: User[];

  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.adminService.getAllUsers().subscribe(
      (data) => { this.users = data },
      (err) => console.log(err)
    );
  }

  search(searchText: string) {
    //console.log('search string '+searchText);
    this.adminService.search(searchText).subscribe(
      (data) => { this.users = data },
      (err) => console.log(err)
    );
  }

  update(role:string,id:string) {
    let updateRole={
      'role':role,
      'id':id
    };

    this.adminService.updateRole(updateRole).subscribe(
      (data) => { this.users = data },
      (err) => console.log(err)
    );

  }

  updateStatus(status:string,id:string){
    console.log('clicked');

    let updateStatus={
      'status':status,
      'id':id
    };
    
    if(status==='active')
      updateStatus.status='inactive';

    this.adminService.updateStatus(updateStatus).subscribe(
      (data) => { this.users = data },
      (err) => console.log(err)
    );
  }
}