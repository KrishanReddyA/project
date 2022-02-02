import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Postdata } from '../postdata';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  postdata:Postdata[]=[]
  
  uid:any;
  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
    this.api.postdata().subscribe((data:any)=>{
      this.postdata= data;
      // console.log(data)
      const userid = ([...new Set(data.map((x:any)=> x.userId))]);
      console.log(userid);
      this.uid=userid
      
      console.log(this.postdata);
    })
  }

}
