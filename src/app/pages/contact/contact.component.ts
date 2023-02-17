import { Component } from '@angular/core';
import { Firestore,collection,addDoc,collectionData,doc,updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 
  userData !: Observable <any>

  constructor(private firestore: Firestore) { 
    this.getData()
  }

  addData(f:any) {
    //console.log(f.value);
    const userCollection = collection(this.firestore, 'users')
    addDoc(userCollection, f.value).then(() => { 
      console.log("Data added successfully")
    }).catch((err) => {
      console.log(err)
    })
  }


  getData() {
    const userCollection = collection(this.firestore, 'users')
    collectionData(userCollection,{idField: 'id'}).subscribe(data => {
      console.log(data);
    })
    this.userData = collectionData(userCollection,{idField: 'id'})

  }
 
  
}
