import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  new_what : any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.new_what ={name:"", type:"", description:""}
  }

  submitNewWhat(){
    let observable = this._httpService.postNew_What_Service(this.new_what);
    observable.subscribe(data =>{
      console.log("Newwhat", data);
    })
    this._router.navigate(['/']);
  }
}
