import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { AjoutMaterielComponent } from './ajout-materiel/ajout-materiel.component';
import { AjoutOtComponent } from './ajout-ot/ajout-ot.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { ListeMaterielComponent } from './liste-materiel/liste-materiel.component';
import { ListeOtComponent } from './liste-ot/liste-ot.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
import { ModifierMaterielComponent } from './modifier-materiel/modifier-materiel.component';

const routes: Routes = [
  {path:"listearticle",component:ListeArticleComponent},
  { path: 'ajouterarticle', component: AjoutArticleComponent },
  { path: 'modifierarticle/:id', component: ModifierArticleComponent},

  {path:"listemateriel",component: ListeMaterielComponent},
  {path:"ajoutmateriel",component: AjoutMaterielComponent},
  {path:"modifiermateriel/:id",component: ModifierMaterielComponent},

  {path:"",component: ListeOtComponent },
  {path:"ajoutot",component: AjoutOtComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
