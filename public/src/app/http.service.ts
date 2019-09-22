import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAll_What_Service(){
    console.log("Service at getAll_What_Service");
    return this._http.get('/api/what')
  }

  postNew_What_Service(new_what){
    console.log("Service at postNew_What_Service", new_what);
    return this._http.post('/api/what', new_what)

  }
  getOne_What_Service(What_ID){
    //传进来ID和下面删除的是一样的，可以起任何名字，为了不混淆所以叫的一样的
    console.log("Service at getOne_What_Service", What_ID);
    return this._http.get('/api/what/'+ What_ID)

  }
  deleteWhat_Service(What_ID){
    console.log("Service at deleteWhat_Service", What_ID);
    return this._http.delete(`/api/delete/${What_ID}`);

  }
  update_Current_What(What_ID, current_what){
    //传进来的顺序必须和edit。Component·传来的顺序一样，第一个是ID，第二个是需要改的信息
    console.log("CurrentWhatID at update_Current_What", What_ID);
    console.log("Current_What at update_Current_What", current_what);
    return this._http.patch(`/api/what/edit/${What_ID}`, current_what);
  }
  Like_What_Service(What_ID){
    console.log("Like at Like_What_Service", What_ID);
    return this._http.get(`/api/what/like/${What_ID}`,What_ID);
  }
}
