import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { myContact } from '../contact/myContact';

@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent implements OnInit {
  contacts: any = [];
  constructor(private contactService: ContactService) {
    this.retrieveAll();
   }

  ngOnInit(): void {
  }
  retrieveAll(){
    this.contactService.getContact().subscribe(contact => {
      this.contacts = contact
      });
  }
  deleteContact(id: number) {
    this.contactService.deleteContact(id).subscribe(results => {
      location.reload();
    });
  }
}
