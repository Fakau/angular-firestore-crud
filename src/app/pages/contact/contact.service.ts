import { Injectable } from '@angular/core';
import {IContact} from '../../share/contact.model';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  COLLECTION_NAME = 'contacts';
  contact: IContact = {};
  constructor(private firestore: AngularFirestore) { }
  public create(contact: IContact): Promise<IContact> {
    return this.firestore.collection(this.COLLECTION_NAME).add(contact).then();
  }
  public update(contact: IContact): Promise<IContact> {
    const data = Object.assign({}, contact );
    delete data.id;
    return this.firestore.doc(this.COLLECTION_NAME + '/' + contact.id).update(data).then();
  }
  public delete(id): Promise<IContact> {
    return this.firestore.doc(this.COLLECTION_NAME + '/' + id).delete().then();
  }
  public getAll(): Observable<DocumentChangeAction<IContact>[]>{
    return this.firestore.collection(this.COLLECTION_NAME).snapshotChanges();
  }
  public setContactToUpate(contact: IContact) {
    this.contact = contact;
  }
  public getContactToUpate(id): IContact {
    if(id === this.contact.id ) {
      return this.contact;
    }
    return null;
  }
}
