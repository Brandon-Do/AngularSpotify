import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MyHttpInterceptor } from './components/interceptors/interceptor';
import { AppComponent } from './app.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { SpotifyService } from './services/spotify.service';

const appRoutes: Routes = [
  {
    path: 'home',
    component: SearchComponent
  },
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'artist/:id',
    component: ArtistComponent
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
  RouterModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ArtistComponent,
  ],
  providers: [
    SpotifyService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true
    }
  ],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule { }
