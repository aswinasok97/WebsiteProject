import { Component } from '@angular/core';
import { Firestore,collection,addDoc,collectionData,doc,updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 
  userData !: Observable <any>

  constructor(private firestore: Firestore,private af:AngularFireStorage) { 
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

  path!: String; 

  upload($event: any){   
    this.path=$event.target.files[0]
  }
 uploadImage(){
    console.log(this.path);
    this.af.upload("/files"+Math.random()+this.path,this.path)
 }
 updateData(id:any) {
  const docCollection = doc(this.firestore, 'users', id)
  const updateD = {
    name: 'World',
  }
  updateDoc(docCollection, updateD).then(() => {
    console.log("success")
  }).catch((err) => {
    console.log(err);
  })
}

deteleData(id: any) {
  const userCollection = doc(this.firestore, 'users',id)
  deleteDoc(userCollection).then(() => {
    console.log("data deleted");
  }).catch((err) => { 
    console.log(err);
  })
}
  
}
