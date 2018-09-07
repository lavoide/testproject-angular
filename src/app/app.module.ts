import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/module';
import { AppRoutingModule } from './app-routing.module';
import {environment} from '../environments/environment';
import {metaReducers, reducers} from './reducers';


@NgModule({ //
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // здесь  представлены прочие модули, которые использует приложение ангулар
    FormsModule,
    CoreModule,
    AppRoutingModule, // главный роутинг модуль.
    StoreModule.forRoot(reducers,{metaReducers}),
    StoreRouterConnectingModule.forRoot({stateKey : 'router'}),
    StoreDevtoolsModule.instrument({name: 'store devtools', logOnly: environment.production}),
    EffectsModule.forRoot([])
  ],
  exports: [],
  providers: [], // провайдеры обеспечивают обмен данными. Здесь находятся сервисы и др вспомогательные функции для манипуляций с данными
  bootstrap: [AppComponent] // тут корневой компонент - с него начинается запуск приложения
})
export class AppModule { }
