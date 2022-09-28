import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MaterielService } from '../materiel.service';

@Component({
  selector: 'app-liste-materiel',
  templateUrl: './liste-materiel.component.html',
  styleUrls: ['./liste-materiel.component.css']
})
export class ListeMaterielComponent implements OnInit {

  materiels:any;

  constructor(private route: ActivatedRoute, private materielservice : MaterielService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData()
  }

  reloadData() {
    // this.employees = this.employeeService.getEmployeesList();
    this.materielservice.getMaterielList()
    .subscribe({
      next: (data) => {
        this.materiels= data;
        console.log(data);
      },
     // error: (e) => console.error(e)
    });  
  }

  deletemateriel(id:number): void {
    this.materielservice.deletemateriel(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.reloadData();
        },
        error: (e) => console.error(e)
      });
  }
  updateMateriel(id: number){
    this.router.navigate(['modifiermateriel', id]);
  }

  deletemat(id:number){
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Supprimé!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.materielservice.deletemateriel(id).subscribe(response => {
        Swal.fire(
          'Supprimé!',
          'Votre materiel a été supprimé.',
          'success'
        )
        this.reloadData();
        })
      }
    })
  
  }

  ajouterMateriel(){
    this.router.navigate(['ajoutmateriel'])
  }

}
