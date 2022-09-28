import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})
export class ModifierArticleComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentArticle: Article  = {
    numArticle:0,
    designation:'',
    unite:'',
    prixUnitaire:0
  };
    private message='';

  constructor(private articleservice: ArticleService,
    private route: ActivatedRoute,private router: Router) { 
  }
 
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getArticle(this.route.snapshot.params["id"]);
    }
  }

  getArticle(id: number): void {
    this.articleservice.getArticle(id)
      .subscribe({
        next: (data) => {
          this.currentArticle = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateArticle(): void {
    this.message = '';
    this.articleservice.updateArticle(this.currentArticle.numArticle, this.currentArticle)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(["listearticle"]);
        // this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateArt(){
    Swal.fire({
      title: 'Voulez-vous enregistrer les modifications?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Enregistrer',
      denyButtonText: `Non`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.updateArticle();
        Swal.fire('Enregistrée!', '', 'success')
      } else if (result.isDenied) {
        this.router.navigate(['listearticle']);
        Swal.fire('Les modifications ne sont pas enregistrées', '', 'info')
      }
    })
  }


}