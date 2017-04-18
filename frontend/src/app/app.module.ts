import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }   from './app.component';
import { UserComponent }  from './demo/user.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent }  from './admin/admin.component';
import { NewUserComponent } from './admin/newUser.component';
import { UserDetailsComponent } from './admin/userdetails.component';
import { TableComponent }    from './admin/table.component';
import { TrainerComponent }  from './trainer/trainer.component';
import { TraineeComponent }  from './trainee/trainee.component';
import { FilterTextComponent } from './shared/filter/filter-text.component';
import { NewTrainingComponent } from './admin/newTraining.component';
import { TrainingDetailsComponent } from './admin/trainingDetail.component';
import { DataTableModule} from "angular2-datatable";

import { DataService }    from './shared/data.service';
import { CanActivateAuthGuard } from './can-activate.service';
import { AdminService }   from './admin/admin.service';
import { FilterTextService }     from './shared/filter/filter-text.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, 
                  AppRoutingModule,ReactiveFormsModule, DataTableModule ],
  declarations: [ AppComponent,
                  UserComponent,
                  LoginComponent,
                  AdminComponent,
                  NewUserComponent,
                  UserDetailsComponent,
                  NewTrainingComponent,
                  TrainingDetailsComponent,
                  TableComponent,
                  TrainerComponent,
                  TraineeComponent,
                  FilterTextComponent ],
  providers:    [ DataService, CanActivateAuthGuard, AdminService, FilterTextService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
