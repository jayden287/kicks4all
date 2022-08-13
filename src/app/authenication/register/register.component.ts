import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { passwordMatchValidator } from './custom.validator';
import { myUser } from '../myUser';
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
      this.myForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
     
      role: ['', [Validators.required, Validators.email]],

      });
      
      } 
       onSubmit() {

      
        this.authService.regUser(this.myForm.value.name,
        this.myForm.value.password, this.myForm.value.role).subscribe();
        this.router.navigateByUrl('/login');
      
        alert('User ' + this.myForm.value.name + ' registered!')
         }
  }


