import { Component,OnInit } from '@angular/core';
import { Firestore,collection,addDoc,collectionData,doc,updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { HeroService } from 'src/app/hero.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  userData !: Observable <any>
  locationData=null;
  f:any
  
   lt = document.getElementsByName("latitude");
   ln = document.getElementsByName("longitude");

  constructor(private firestore: Firestore,private af:AngularFireStorage,private hero:HeroService,public http:HttpClient) { 
    this.getData()
  }
  ngOnInit() {
    this.getLocation(this.f.value).subscribe((data: any)=>{
      console.log(data);
      this.locationData = data;

     
});
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

getLocation(f:any):Observable<any>
  {
    return this.http.get('http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid=dec7bb2d34146481c822673e7106cb92');
  }
  
}
