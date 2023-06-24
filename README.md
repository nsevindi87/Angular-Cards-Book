# NewArea

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


<!-- 
1- npm install -g @angular/cli
2- ng new HelloApp
3-cd HelloApp
4-npm start veya ng serve
5-ng generate component components/header
6- material angular io eklenecek
ng add @angular/material
kullanilacak olanlar module icerisinde import edilir ve hangi isimle
import edildiye o isim altta imports icine eklenir.
7-module.ts routing module eklenmeli 
8-app-routing.module.ts ekle ve icine route tanimla
9- bootstrap ekleme npm i bootstrap
angular.json icerisine
-"styles": [
              "bootstrap/dist/css/bootstrap.css",
            ],
            "scripts": [
              "bootstrap/dist/js/bootstrap.js"
            ]
eklenir.
material ve bootstrap eklenimi sonrasi yeniden calistirilimasi gerekir

10- state olarak TS dosyasindaki class yapisinin ici kullanilabilir. oraya yazinca import export gerek kalmadan {{xxx}}
olarak html icerisinde kullanilabiliyor.

11- CARDS TS icinde olusturudugumuz cardItem objecti alt komponente gönderecegiz.
Cards icerisinde komponenti cagirdiktan sonra icinde gösnderiyoruz
<app-card-item [cardItem]="cardItem"></app-card-item>
CARD TS icerisinde de  class icerisinde  @Input() cardItem: any; seklinde veriyi aliyoruz
ve HTML icerisinde kullanabiliyoruz.
gelen veri türünü belirlemek icin bir mol olustur: 
ng g interface models/card;
burada veri türünü tanimla ve any yerine bu modeli  koy.
@Input a ilk basta veri gelmedigi icin hata verir. önlemek icin ünlem koy !


12-API dan veri almak icin ng g s services/card ile service olusturulur.
HTTPClient tanimlanir ve module icinde de import edilir.
 -->