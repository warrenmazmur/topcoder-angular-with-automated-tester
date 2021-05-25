import { Component,OnInit } from '@angular/core';
import { TREASURES } from '../mock-treasures';
import { Treasure } from '../treasure'   

@Component({
    selector: 'app-treasure',
    templateUrl: './treasure.component.html',
    styleUrls: ['./treasure.component.css']
})

export class TreasureComponent implements OnInit {
    treasures = TREASURES

    constructor() { }
  
    ngOnInit() {
    }

    selectedTreasure?: Treasure;
    onSelect(treasure:Treasure): void{
        this.selectedTreasure= treasure;
    }
}