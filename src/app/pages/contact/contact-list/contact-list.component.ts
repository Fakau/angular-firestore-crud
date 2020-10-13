import { Component, OnInit } from '@angular/core';
import {IContact} from '../../../share/contact.model';
import {Router} from '@angular/router';

interface DataItem {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  searchValue = '';
  visible = false;
  contacts: IContact[] = [
    {
      id: 1,
      name: 'John Brown',
      email: '32@dflks',
      phoneNumber: '3782-4343'
    }
  ];
  listOfDisplayData = [...this.contacts];
  constructor(private router: Router) {
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.contacts.filter((item: IContact) => item.name.indexOf(this.searchValue) !== -1);
  }

  ngOnInit(): void {
  }

  onEdit(id: any) {
    this.router.navigate(['contact', 'edit', id]);
  }
  onDelete(id: number) {
    if (confirm(`Are you sure to delete this object ?`)) {
    }
  }
  onAdd(){
    this.router.navigate(['contact', 'new']);
  }
}
