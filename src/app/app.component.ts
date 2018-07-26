import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name : string;
  artists : ArtistModel[];
  constructor(){
    this.name = "Artists";
    this.artists = [ {
      name: "Shubham Kumar", 
      school: "Penn State"
    },
    {
      name: "Shubham Saxena", 
      school: "Penn State"
    }, 
    {
      name: "Shubham Singh", 
      school: "Penn State"
    }
      ];
  }
  btnClick(value : string){
      console.log(value);
      this.artists.push({
        name : value, 
        school: "Penn State"
      });
  }
  clickEvent(event) : void{
    this.name = (event.target.innerHTML);
  }
}
interface ArtistModel {
  name : string;
  school : string;
}
