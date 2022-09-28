import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Materiel } from '../materiel';
import { MaterielService } from '../materiel.service';

@Component({
  selector: 'app-modifier-materiel',
  templateUrl: './modifier-materiel.component.html',
  styleUrls: ['./modifier-materiel.component.css']
})
export class ModifierMaterielComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentMateriel: Materiel  = {
    idMateriel:0,
    designation:'',
    unite:'',
    prixUnitaire:0,
    quantite:0
  };
  private message='';

  constructor(private materielservice: MaterielService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getMateriel(this.route.snapshot.params["id"]);
    }
  }

  getMateriel(id: number): void {
    this.materielservice.getMateriel(id)
      .subscribe({
        next: (data) => {
          this.currentMateriel = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateMateriel(): void {
    this.message = '';
    this.materielservice.updatemateriel(this.currentMateriel.idMateriel, this.currentMateriel)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(["listemateriel"]);
        // this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateMat(){
    Swal.fire({
      title: 'Voulez-vous enregistrer les modifications?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Enregistrer',
      denyButtonText: `Non`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.updateMateriel();
        Swal.fire('Enregistrée!', '', 'success')
      } else if (result.isDenied) {
        this.router.navigate(['listemateriel']);
        Swal.fire('Les modifications ne sont pas enregistrées', '', 'info')
      }
    })
  }

}
