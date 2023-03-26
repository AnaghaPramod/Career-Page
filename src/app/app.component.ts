import { Component } from '@angular/core';
import { ApiService } from './career/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  

  
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
