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
export class ContactComponent {
 
  userData !: Observable <any>
  lt:any=''
  ln:any=''
  data:any


  constructor(private firestore: Firestore,private af:AngularFireStorage,private hero:HeroService,private http:HttpClient)
  { 
    this.getData()
    this.getLocation();
  }
  ngOnInit() {}
   

  addData(f:any) {
    //console.log(f.value);
    let userData = {
      "data":f.value,
      "location":this.data
    }
    const userCollection = collection(this.firestore, 'users')
    addDoc(userCollection, userData).then(() => { 
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


getLocation()
{
  console.log(this.lt);
  console.log(this.ln);
  this.hero.getLoc(this.lt,this.ln).subscribe(res => {
   // console.log(res);
    this.data=res
    this.data=this.data[0].name
    console.log(this.data);
    
  })
}

  
}
