import { Component, OnInit } from '@angular/core';
import {IContact} from '../../../share/contact.model';
import {Router} from '@angular/router';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  searchValue = '';
  visible = false;
  contacts: IContact[];
  listOfDisplayData: IContact[];
  constructor(private router: Router,
              private service: ContactService
  ) {
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
    this.service.getAll().subscribe(resp => {
      this.contacts = resp.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as IContact;
      });
      this.listOfDisplayData = [...this.contacts];
      // this.toasService.clear();
    });
  }

  onEdit(contact: IContact) {
    this.service.setContactToUpate(contact);
    this.router.navigate(['contact', 'edit', contact.id]);
  }
  onDelete(id: number) {
    if (confirm(`Are you sure to delete this object ?`)) {
      this.service.delete(id).then(rest => {
        this.ngOnInit();
      }, err => {
        //
      });
    }
  }
  onAdd() {
    this.router.navigate(['contact', 'new']);
  }
}

/*
<!--<nz-alert nzType="success" nzMessage="Success Tips" nzShowIcon></nz-alert>
<nz-alert nzType="info" nzMessage="Informational Notes" nzShowIcon></nz-alert>
<nz-alert nzType="warning" nzMessage="Warning" nzShowIcon></nz-alert>
<nz-alert nzType="error" nzMessage="Error" nzShowIcon></nz-alert>-->*/
