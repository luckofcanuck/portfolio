import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {



  projects = [
      {
          title: "CCPhoto",
          subtitle: "A front-end portfolio designed and built for Clark Clifford Photography.",
          description: "This is a photography portfolio I built for a client. I built it with Angular 4 and Bootstrap. It is a minimalist design, intended to be simple to navigate and pleasant to view.",
          img: "/assets/img/ccphoto.png",
          url: "http://clarkcliffordphoto.com"
      },
      {
          title: "Beer Diary,",
          subtitle: "A full-stack application for learning about and storing information on beers.",
          description: "This is a full-stack app built with Mongo, Express, AngularJS, and Node. I built user authentication that securely stores passwords and login info. The signed in user can then look up any beer they might be drinking. The app performs HTTP requests to an external API, and retrieves information on said beer. The user can then store that beer to the database I built, attached to their user ID, and rate or make notes about the beer for future reference. This project is here to showcase backend, API, CRUD, and full-stack familiarity and ability.",
          img: "/assets/img/beer.png",
          url: "http://beerdiary.timothymdawson.com"
      },
      {
          title: "KandJ Diaries",
          subtitle: "A CSS styling and positioning showcase extravaganza.",
          description: "This project was an exercise in conversion. KandJ Diaries is an archived out-of-use website that I rewrote from scratch in order to showcase my abilities in converting PSDs, wireframes, or, in this case, another webpage. I can clean things up, make them functional, and turn whatever vision a client has into a reality.",
          img: "/assets/img/jumboK.png",
          url: "/kandj"
      }
  ]

   constructor() { }

  ngOnInit() {
  }

}
