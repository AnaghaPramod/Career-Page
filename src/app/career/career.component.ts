import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {

  allpages: any=[];

  constructor(private api:ApiService){

  }

  ngOnInit():void{
    this.api.getallpages().subscribe(
      (data:any)=>{
        this.allpages=data.pages
      }
    )
  }

 
}
