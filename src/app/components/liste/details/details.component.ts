import { Component, OnInit, Input } from '@angular/core';
import { Joueur } from 'src/app/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() joueurSelectionne : Joueur ;

  constructor() { }

  ngOnInit() {
  }

}
