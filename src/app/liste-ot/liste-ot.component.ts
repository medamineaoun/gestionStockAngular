import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OtService } from '../ot.service';

@Component({
  selector: 'app-liste-ot',
  templateUrl: './liste-ot.component.html',
  styleUrls: ['./liste-ot.component.css']
})
export class ListeOtComponent implements OnInit {

  ordretraveaux: any;
  constructor(private route: ActivatedRoute, private otservice: OtService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData()

  }

  reloadData() {
    // this.employees = this.employeeService.getEmployeesList();
    this.otservice.getOrdreTraveauxtList()
      .subscribe({
        next: (data) => {
          this.ordretraveaux = data;
          console.log(data);
        },
        // error: (e) => console.error(e)
      });
  }

  ajouterOt(){
    this.router.navigate(['ajoutot']);
  }
  
}
