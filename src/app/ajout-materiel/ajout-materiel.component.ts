import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Materiel } from '../materiel';
import { MaterielService } from '../materiel.service';

@Component({
  selector: 'app-ajout-materiel',
  templateUrl: './ajout-materiel.component.html',
  styleUrls: ['./ajout-materiel.component.css']
})
export class AjoutMaterielComponent implements OnInit {
  materielobj: Materiel = {
    idMateriel: 0,
    designation: '',
    unite: '',
    prixUnitaire: 0,
    quantite: 0
  };

  submitted = false;


  constructor(private materielservice: MaterielService,  private router: Router) {

  }

  ngOnInit(): void {
  }
  savemateriel(): void {
    const data = {
      designation: this.materielobj.designation,
      unite: this.materielobj.unite,
      prixUnitaire: this.materielobj.prixUnitaire,
      quantite: this.materielobj.quantite
    };
    this.materielservice.createMateriel(data)
      .subscribe({
        next: (res) => {
          // console.log(res);
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Votre materiel a été bien enregistrer',
            showConfirmButton: false,
            timer: 3000
          })
          this.router.navigate(['listemateriel']);
        },
      });
  }


}