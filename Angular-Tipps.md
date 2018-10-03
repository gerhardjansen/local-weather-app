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

### Angular Material hinzufügen

    $ npx ng add @angular/material
    
Wenn Material zum Projekt hinzugefügt wird, werden gleichzeitig auch die Links zu Material Icons 
zusammen mit Google Fonts in die `index.html` eingebunden und das `BrowserAnimationsModule` 
zur `app.module.ts` hinzugefügt. 

### Bibliotheken

* `@angular/material` ist die offizielle Material 2 Bibliothek.
* `@angular/cdk` is a peer-dependency, not something you directly use unless you intend to build your own components.
* `@angular/animations` wird für Animationen von einigen Material 2 Modulen benötigt. 
   Darauf kann verzichtet werden, um Applikationen klein zu halten. Mit `NoopAnimationsModule` kann man Animation in den Modulen ausschalten, die das Animationsmodul benötigen. 
* `hammerjs` wird für die Unterstützung von Gesten benötigt; Das Modul ist unabdingbar für Touch-fähige Geräte wie Smartphones, Tablets oder Notebooks mit Touchpanel


### Schematics

Schematics sind quasi Code generatoren, mit denen sich Module und Komponenten zu einer Anwendung hinzufügen lassen.
Auch Versionsanhebungen können durch unterstützt passieren und den Aufwand für die Anpassungen wesentlich reduzieren.  

Für Angular Material gibt es 3 Schematics, mit denen bestimmte Komponenten generiert werden können:

* Navigation
* Dashboard
* Table


Angular Material Schematics hold a promise of making it a lot less cumbersome to add various Material modules and components to your Angular app


## Angular Flex Layout

Der folgende Befehl bindet das Angular Flex Layout Modul `FlexLayoutModule` in die Applikation ein

    npm i @angular/flex-layout
    
Details findet man unter Flexlayout (https://github.com/angular/flex-layout/wiki/Responsive-API)

### Material Komponenten

Angular Material hat eine ganze Reihe von Komponenten, die direkt verwendet werden könne.
Eine detaillierte Beschreibung  der HTML-Tags und der API samt Beispielen findet man unter
https://material.angular.io/components/categories

Alle Material Elemente unterstützen dieFlex Layout Engine nativ und das wirkt sich sehr positive 
auf die Wartung von komplizierten UIs aus.

### Material Typographie

`Typography is a way of arranging type to make text legible, readable, and appealing when displayed.`

### Material Theming

Es ist möglich eigene Themes für Angular Material zu erstellen:
http://mcg.mbitson.com/
 

## Interaktion zwischen Komponenten

Es gibt in Angular vier Techniken mittels derer Komponenten miteinander interagieren können:
* Globale Events
* Event propagation/bubbling (Eltern-Komponenten horchen auf Informationen ihrer Kind-Komponenten) 
* Geschwister-, Eltern- oder Kind-Komponenten innerhalb eines Moduls lauschen auf ähnlichen Daten-Streams
* Eltern-Komponenten reichen Informationen an ihre Kind-Komponenten weiter






    



