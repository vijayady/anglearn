import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWepApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

const routes: Routes = [];

@NgModule({
  imports: [
            RouterModule.forRoot(routes),
            HttpClientModule,
            // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false })
            ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
