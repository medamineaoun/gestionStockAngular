import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css']
})
export class AjoutArticleComponent implements OnInit {

  articleobj: Article = {
    numArticle: 0,
    designation: '',
    unite: '',
    prixUnitaire: 0
  };


  constructor(private articleservice: ArticleService, private router: Router ) {

  }

  ngOnInit(): void {
  }

  saveArticle(): void {
    //this.test()
    const data = {
      designation: this.articleobj.designation,
      unite: this.articleobj.unite,
      prixUnitaire: this.articleobj.prixUnitaire
    };
    // console.log(data)
    this.articleservice.createArticle(data)
      .subscribe({
        next: (res) => {
          // console.log(res);
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Votre article a été bien enregistrer',
            showConfirmButton: false,
            timer: 3000
          })
          this.router.navigate(['listearticle']);
        },
        // error: (e) => console.error(e)
      });
  }

  


}
