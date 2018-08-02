import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { CosmonautsComponent } from './cosmonauts/cosmonauts.component';
import { CosmonautsService } from './cosmonauts/cosmonauts.service';
import { AddCosmonautComponent } from './cosmonauts/add-cosmonaut/add-cosmonaut.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CosmonautsComponent,
    AddCosmonautComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFontAwesomeModule
  
  ],
  providers: [ CosmonautsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
