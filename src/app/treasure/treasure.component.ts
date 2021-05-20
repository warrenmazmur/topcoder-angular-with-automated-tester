import { Component,OnInit } from '@angular/core';
import { treasureMock } from '../mock-treasures';
import { Treasure } from '../treasure'   

@Component({
    selector: 'app-treasure',
    templateUrl: './treasure.component.html',
    styleUrls: ['./treasure.component.css']
})

export class TreasureComponent implements OnInit {
    treasure:Treasure = treasureMock

    constructor() { }
  
    ngOnInit() {
    }
}