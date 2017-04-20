* Création appli avec le CLI

  ``` bash
    ng new workshop
  ```

* Détail des différents éléments

* Lancement de l'appli 

  ```
    ng start
  ```

* Modification du AppComponent

* Création du premier composant Individus avec le cli

  ```
    ng g component individus
  ```

* Template + Variable + Explication ngInit et ngFor

* Premier @Input liste d'individus
  ```
  @Input() individus: any[];
  ```


* Utilisation dans le AppComponent

* Styling isolé 

* Initialisation du Router (forRoot et forChild)
  ``` TypeScript
  const ROUTES: Route[] = [
    {
      path: 'individus',
      component: IndividusComponent
    }
  ]
  ```

* Création de la class Individu : Duck typing, conversion, class-transformer

* Création de IndividusService: injection de dépendences, providers, InjectionToken

* Création de individu Détail

  ```
    ng g component individu-detail
  ```

* Injection de la Route (normal vs snapshot)

* Page de 404

  ```
    ng g c -it -is --spec false error404
  ```

* Création du guard pour le Détail
  ```
    ng g guard --spec false individu-detail
  ```

* Implentation de la nav entre la liste et le detail

* Ajout du component d'ajout individu

* AJout d'un menu

* Ajout de la route par defaut

* Ecriture du form de base > ngForm > ngSubmit > name > ngModel > ngModelGroup > input.ng-invalid.ng-dirty > required > minlnegth

* Ecriture methode ajout dans le service (map/reduce pour l'id)

* Cablage

* Ajout de la directive bolder Directive

* Cablage avec le back, Observable