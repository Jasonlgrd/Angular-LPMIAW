import { Component, OnInit } from '@angular/core';
import { Joueur } from 'src/app/models';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  public joueurs : Joueur[] = [] ;
  public selected: Joueur; 
  public displayDetails = false; 
  public select(data : Joueur) {
    this.selected = data;
    this.displayDetails = true; 
  }

  constructor() { }

  ngOnInit() {

    const pierreAGUILLON: Joueur = {
      id: '1',
      firstName: 'Pierre',
      lastName: 'AGUILLON',
      taille: "1M80",
      poids: "93KG",
      dateNaissance: "27 mars 1987",
      nationalite: "Française"
    }
    const kamalieleTUFELE: Joueur = {
      id: '2',
      firstName: 'Kamaliele',
      lastName: 'TUFELE',
      taille: "1M82",
      poids: "123KG",
      dateNaissance: "10 octobre 1995",
      nationalite: "Française"
    }
    const uiniATONIO: Joueur = {
      id: '3',
      firstName: 'Uini',
      lastName: 'ATONIO',
      taille: "1M96",
      poids: "145KG",
      dateNaissance: "26 mars 1990",
      nationalite: "Néo Zélandaise"
    }

    this.joueurs.push(pierreAGUILLON, kamalieleTUFELE, uiniATONIO);

  }

}
