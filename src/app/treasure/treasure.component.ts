import { Component,OnInit } from '@angular/core';
import { Treasure } from '../mock-treasures';
@Component({
    selector: 'app-treasure',
    templateUrl: './treasure.component.html',
    styleUrls: ['./treasure.component.css']
})

export class TreasureComponent implements OnInit {
    treasure: Treasure = {
		id: 1,
		name: 'Windstorm Gold Staff',
		location: 'Tree behind home',
	};
    constructor() { }
  
    ngOnInit() {
    }
}