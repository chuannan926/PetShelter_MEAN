import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  current_what :any;
  What_id: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.current_what ={name: "", type:"", description:""};
    //just need required thing in your Model
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.What_id = params['id'];    
    });
    let observable = this._httpService.getOne_What_Service(this.What_id)
    observable.subscribe(data =>{
      console.log(data);
      this.current_what = data;
    })
  }
  editCurrentWhat(){
    console.log("EditCurrentWhat")
    let observable = this._httpService.update_Current_What(this.What_id, this.current_what)
    //this.What_id是用这个找到database里的这个东西，然后this.current_what是Form submit回来信息，是HTML的current_what.age和name
    observable.subscribe(data =>{
      console.log(data, "that is updated data");
      this._router.navigate(['/'])
    })
}






}
