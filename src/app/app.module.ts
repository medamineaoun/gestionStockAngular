import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListeMaterielComponent } from './liste-materiel/liste-materiel.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeOtComponent } from './liste-ot/liste-ot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutMaterielComponent } from './ajout-materiel/ajout-materiel.component';
import { ModifierMaterielComponent } from './modifier-materiel/modifier-materiel.component';
import { AjoutOtComponent } from './ajout-ot/ajout-ot.component';
import { ModifierOtComponent } from './modifier-ot/modifier-ot.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeArticleComponent,
    AjoutArticleComponent,
    ModifierArticleComponent,
    SidebarComponent,
    ListeMaterielComponent,
    ListeOtComponent,
    AjoutMaterielComponent,
    ModifierMaterielComponent,
    AjoutOtComponent,
    ModifierOtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
