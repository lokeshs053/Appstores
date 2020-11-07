import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddappService } from './addapp.service';

@Component({
  selector: 'app-addapp',
  templateUrl: './addapp.component.html',
  styleUrls: ['./addapp.component.css']
})
export class AddappComponent implements OnInit {

  constructor(private _builder:FormBuilder,private _addService:AddappService) { }

  addForm=this._builder.group({
    'appName':['',[Validators.required]],
    'appType':['',[Validators.required]],
    'description':['',[Validators.required]],
    'uploadDate':['',[Validators.required]]
  })

  ngOnInit() {
  }


  onSubmit()
  {

    console.log(this.addForm.get('appName').value)
  }

  add()
  {
    console.log("=====")
    console.log(this.addForm.value)

    const app={
                "appStores":this.addForm.value 
    }

     this._addService.addStore(app).subscribe((data)=>{console.log(data)},(error)=>{console.log(error)});
  }
  

}
