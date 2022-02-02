import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Dummydata } from '../dummydata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lists:Dummydata[]=[]
  
  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
    this.api.getdata().subscribe((data:any)=>{
      this.lists= data;
      console.log(data)
    })
  }

}
