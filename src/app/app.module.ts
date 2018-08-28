import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({ //
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // здесь  представлены прочие модули, которые использует приложение ангулар
    FormsModule,
    CoreModule,
    AppRoutingModule // главный роутинг модуль.
  ],
  exports: [],
  providers: [], // провайдеры обеспечивают обмен данными. Здесь находятся сервисы и др вспомогательные функции для манипуляций с данными
  bootstrap: [AppComponent] // тут корневой компонент - с него начинается запуск приложения
})
export class AppModule { }
