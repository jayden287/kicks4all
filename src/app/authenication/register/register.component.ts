import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { passwordMatchValidator } from './custom.validator';
import { myUser } from '../myUser';
import { UserserviceService } from 'src/app/userservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  agreed = false;
  newUser !: myUser; 
  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) { }

    ngOnInit() {
      this.myForm = new FormGroup({
        'name': new FormControl(null, Validators.required, ),
        'password': new FormControl(null, [Validators.required, Validators.minLength(3)]),
        'role': new FormControl(null,[Validators.required, Validators.maxLength(5)] ),

      })
      
      } 
       onSubmit() {

      
        this.authService.regUser(this.myForm.value.name,
        this.myForm.value.password, this.myForm.value.role).subscribe();
        this.router.navigateByUrl('/login');
      
        alert('User ' + this.myForm.value.name + ' registered!')
         }
  }


