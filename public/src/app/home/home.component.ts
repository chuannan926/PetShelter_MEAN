import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  all_what :any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.getAll_What();
  }
  getAll_What(){
    let observable = this._httpService.getAll_What_Service();
    observable.subscribe(data =>{
      console.log("Showing All_Author", data);
      this.all_what = data;
    })
  }

  Delete(Delete_What_ID){
    console.log("DeleteWhat",Delete_What_ID);
    let observable = this._httpService.deleteWhat_Service(Delete_What_ID);
    observable.subscribe(data =>{
      console.log("delete a what", data);
    })
    // this._router.navigate(['/'])
    this.ngOnInit();
  }

}
