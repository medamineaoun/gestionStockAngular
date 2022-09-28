import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {

  articles: any;
  // articles?: Article[];
  constructor(private route: ActivatedRoute, private articleservice: ArticleService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData()
  }

  reloadData() {
    // this.employees = this.employeeService.getEmployeesList();
    this.articleservice.getArticleList()
      .subscribe({
        next: (data) => {
          this.articles = data;
          console.log(data);
        },
        // error: (e) => console.error(e)
      });
  }
  deleteArticle(id: number): void {
    this.articleservice.deleteArticle(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.reloadData();
        },
        error: (e) => console.error(e)
      });
  }

  articleDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateArticle(id: number) {
    this.router.navigate(['modifierarticle', id]);
  }

  deleteart(id:number){
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
        this.articleservice.deleteArticle(id).subscribe(response => {
        Swal.fire(
          'Supprimé!',
          'Votre article a été supprimé.',
          'success'
        )
        this.reloadData();
        })
      }
    })
  
  }

  ajouterArticle(){
    this.router.navigate(['ajouterarticle']);
  }

}
