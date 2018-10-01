#Mit Angular entwickeln

## Allgemeine Anpassungen

###Projekt erstellen:
	npx @angular/cli new <projekt-name>
	
Danach dann Import Projekt in IntelliJ
	
	
###Port für die Applikation vorgeben 
Anpassen des Ports in package.json
 
	ng serve --port 5000
		
###Applikation starten
Anpassen des Ports in den Scripts in package.json

	npm start (als Shortcut für  npm ng serve --port 5000)
	
		
###Sprache -> Locale registrieren
In der Klasse app.module.ts folgende Anpassungen vornehmen

		import { registerLocaleData } from '@angular/common';
		import localeDe from '@angular/common/locales/de';

		registerLocaleData(localeDe, 'de');
		
##Angular Elemente erstellen		
		
###Eine Komponente (View und ViewModel) erstellen

	npx ng generate component <komponentenname>
	
oder
	
	npx ng g c <komponentenname>
	
Über selector wird der Tag festgelegt.
		
		@Component({
			selector: 'app-<komponentenname>',
			templateUrl: './<komponentenname>.component.html',
			styleUrls: ['./<komponentenname>.component.css'],
		})
		export class <KomponentenName> implements OnInit {
			constructor() {}
			ngOnInit() {}
		}
		
Danach die Komponente in app.module.ts registrieren.
Und den Tag (selector) in der übergeordneten Komponente verwenden
		

###Ein Interface (Model) erstellen

	npx ng generate interface <IInterfaceName>
	
oder
	
	npx ng g i <IInterfaceName>
		
Ein Interface stellt das Datenmodell für eine Komponente bereit.
Interfaces fangen mit einem **_I_** an. Sie werden von einer konkreten Klasse implementiert. 
		
###Einen Service erstellen
	
		npx ng generate service <Servicename> --flat false
oder
	
		npx ng g s <servicename> --flat false
		
Services werden als @Injectables über das Angular Provider-System zur Verfügung gestellt.
		
		
### Lifecycle Hooks

Komponenten haben Lifecycle Hooks, die von Angular verwaltet werden. 

https://angular.io/guide/lifecycle-hooks		

## Bibliotheken
		
### HttpClientModule 

HttpClientModule wird mit  

    @angular/common/http
    
Mit HttpClient, stellt @angular/common/http eine vereinfachte API für HTTP Funktionalität für den Gebrauch mit Angular Applikatione bereit.
Es setzt auf das von Browsern bereitgestellte XMLHttpRequest Interface auf. 

https://angular.io/guide/http    

		
##RxJS - Reactive Programmierung
	
https://www.informatik-aktuell.de/entwicklung/programmiersprachen/reactive-programming-mehr-als-nur-streams-und-lambdas.html	


## Tests
 
### Unit Testing

Unit Test werden mit dem Befehl ausgeführt.

    npm test

Angular CLI verwendet die Jasmine unit testing library um Unit Test zu erstellten und den Karma Test Runner, um die Tests auszuführen.
Bei Jasmine werden Unit Tests als Specs bezeichnet.

 
### Acceptance Tests (e2e)

Angular CLI verwendet Protractor zusammen mit WebDriver, um automatisierte Acceptance Tests (AAT) zu schreiben.

AAT werden mit dem folgenden Befehl ausgeführt:

    npm run e2e



## Angular Material

