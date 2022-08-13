import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { myContact } from './myContact';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  //initialize an FormGroup object call myForm
  myForm: FormGroup;
  //dependency injection of FormBuilder as an object call fb
  agreed = false;
  
  //dependency injection of FormBuilder as an object call fb and NgbModal
  constructor(private fb: FormBuilder, private modalService: NgbModal, private contactService: ContactService) {}
  //Construct the FormGroup object using FormBuilder
  ngOnInit() {
  this.myForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', Validators.required],
  subject: ['', Validators.required],
  });
  }
  //Function to invoke an alert
  onSubmit(){
    this.contactService.insertContact(this.myForm.value.name, this.myForm.value.email, this.myForm.value.subject).subscribe(results => {
    location.reload();
    });
    alert("Registration Successful! Your changes have been saved for "+ this.myForm.value.name);

    }

  //Function to set toggle the agreed variable between true and false
toggleAgree() {
  if (this.agreed) this.agreed = false;
  else this.agreed = true;
  }
  //Function to open our content modal
  open(content) {
  this.modalService.open(content);
  }
  }
