import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  What_id: any;
  view_one_what :any;
  get: any;
  clicked :boolean;

  constructor(
    private _httpService: HttpService,   
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.view_one_what ={ name:"", child:[]};
    //为了在getOneWhat里面用，所以要现在这里Define，要不下面用的时候会undefined
    this._route.params.subscribe((params:Params)=>{
      //把URL传件来的ID找出来，下面用
      this.What_id = params['id'];
      //把传进来的ID 设成what_id ，后面用
      this.clicked = false;
      this.getOneWhat();
    })
  }

  getOneWhat(){
    let observable = this._httpService.getOne_What_Service(this.What_id)
    observable.subscribe(data =>{
      this.view_one_what = data;
      console.log("ViewOneWhat", data);
    })
  }

  Delete(Delete_What_ID){
    console.log("DeleteWhat",Delete_What_ID);
    let observable = this._httpService.deleteWhat_Service(Delete_What_ID);
    observable.subscribe(data =>{
      console.log("delete a what", data);
    })
    this._router.navigate(['/'])

  }
  Like(What_id){
    console.log("LikeWhat",What_id);
    let observable = this._httpService.Like_What_Service(What_id);
    observable.subscribe(data =>{
      console.log("like a what", data);
      this.clicked = true;
      this.getOneWhat(); 
    })
  
  } 

}
