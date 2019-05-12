import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  getCatName() {
    const name = this.route.snapshot.paramMap.get('id');
    return name;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
