import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { myUser } from '../myUser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  agreed = false;
  newUser !: myUser; 
results: any = false;
  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'name': new FormControl(null, Validators.required, ),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3)]),

    })
  }
  onSubmit() {
    this.authService.authUser(this.myForm.value.name,
    this.myForm.value.password).subscribe(data => {
    this.results = data;
    if (this.results[0].auth)
    {
    this.authService.setSecureToken(this.myForm.value.name);
    this.authService.setUserRole(this.results[0].role);
    this.router.navigateByUrl('/user');
    } else{
     alert("Wrong username or password")
     }
    });
     }

}
