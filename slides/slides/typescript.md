## TypeScript

---

<img src="slides/images/typescript.png" width="450">

---

## Exécution

* Pas de prise en charge native
* Nécessité de transpiler
  * Transparent avec angular-cli
* SourceMaps pour débugguer dans la console
* Ce n'est que du Javascript à la fin

---

## Avantages

* De suite plus intuitif
  * Classes, Interfaces, AccessModifiers
* Vraies notions de typage
* Apparition des erreurs dès la compilation
* Fonctionne très bien dans les IDE (WebStorm, VSCode)   

---

## Les bases

---

## Déclarer une variable

```typescript
var a = "zz";
let b = "zzzz";
const c = "zzzz";
```


---

## Scope des variables

```typescript
function testScope() {
    if (true) {
        var a = "zz";
        let b = "zzzz";
    }
    console.log(a); // zz
    console.log(b); // Erreur
}
```

---

## Types de bases

* String
* Number
* Boolean
* Array
* Enum
* Any

---

## Déclaration d'une variable typée

* Inférence de type 
  * déviné à partir de la première affectation ou du type de retour
* Type explicite

```typescript
let i = 42;
i = "changeIt"; // erreur
let message: string = 'La réponse universelle'
function guessIt() { return true }
function explicitReturn() : string { return '42' } 
```

---

## Enums

```typescript
enum Role { Directeur, Secrétaire, Vacataire }; // 0, 1, 2
enum Role { Directeur = 1, Secrétaire, Vacataire }; //  1, 2, 3

let role: Role = Role.Directeur;
console.log(role); // 1

let roleAsString = Role[role]; // Directeur
```

---

## Arrays

* Quasiment similaires au javascript
* Typage du contenu

```typescript
let stringArray: string[] = ['foo', 'bar', 'baz']
let numberArray: Array<number> = [1,2,3]
let anyArray: any[] = [1, 'is', true]
```

---

## Fonctions

* Typage : paramètre et retour
* Arrow functions
* Paramètres obligatoires et optionnels

---

## Arrow functions 

* Syntaxe raccourcie pour les fonctions anonymes

```typescript
let personne = lesPersonnes.filter(function(p) {
  return p.nom == 'John';
});

let personne = lesPersonnes.filter(p => p.nom == 'John')
```

---

## Arrow functions

* Parenthèses obligatoires sauf si un seul paramètre

```typescript
lesPersonnes.forEach(() => console.log('Who are you '));
lesPersonnes.forEach(p => console.log('Hello ' + p.name));
lesPersonnes.forEach((p, idx, arr) 
        => console.log('#' + idx + ' Hello ' + p.name));
```

---

## Arrow functions

* Accolades nécessaires si on a plusieurs lignes dans le corps de la fonction

```typescript
lesPersonnes.forEach(() => console.log('Who are you '));
lesPersonnes.forEach((p, idx, arr) =>  { 
  console.log('--------------------------')
  console.log('#' + idx + ' Hello ' + p.name)
});
```

---

## this en JavaScript

```typescript
function Personne() {
  let self = this;
  self.nom = 'Doe';
  setInterval(function() {
    console.log(this.nom); // undefined
    console.log(self.nom); // Doe
  }, 1000)
}
```

---

## this en TypeScript

```typescript

function Personne() {
  this.nom = 'Doe';
  setInterval(() => {
    console.log(this.nom); // Doe
  }, 1000)
}
```

---

## Types de fonctions

* Combinaison des types des paramètres et de retour
* Très pratique pour forcer des typages de callbacks

```typescript
type NumberCallback = (n: number) => any;

class Foo {
    save(callback: NumberCallback) : void {
        callback(42);
    }
}
```

---

## Paramètres obligatoires et optionnels

* Par défaut obligatoire
* Optionnel si le nom du paramètre est sufficé avec '?'
* Les optionnels arrivent après les obligatoires
* Valeur par défaut possible

---

## Paramètres obligatoires et optionnels

```typescript
function obligatoire(id: number) { }

function optionnel(id?: number) { }

function parDefaut(id: number = 42) { }
```

---

## Surcharge

```typescript
function neRienFaire(s: string): void;
function neRienFaire(n: number): void;
function neRienFaire(sOrN: string | number): void {
  if (sOrN && typeof sOrN === "string") { // ----- }
  else { // ------ }
}
```

---

## Interfaces

* Permet de définir un contrat 
* Pas d'équivalent en JavaScript
* Ensemble de propriétés et de fonctions (signatures)
* Checké à la compilation

---

## Duck Typing 

When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck.

[Wikipedia]

---

## Duck Typing 

```typescript
interface Canard {
  publierDesArticles: (texte: string) => void;
}

let leGorafi = {
  publierDesArticles: (texte: string) => console.log(texte);
}

function publierLeCanard(canard: Canard) {}

publierLeCanard(leGorafi); // OK
```

---

## Extensions d'interfaces 

```typescript
interface A {
  a: number;
  printA: () => void;
}

interface B {
  b: number;
  printB: () => void;
}

interface C extends A,B {}
```

---

## Classes - Constructeur

* Un seul constructeur par classes

```typescript
class Foo {
  constructor(bar: string) {
    // init  
  }
}

let foo: Foo = new Foo();
```

---

## Propriétés et méthodes

* Définir une propriété
  * Variables dans la classe 
  * Accesseurs 
  * Paramètres publics du constructeur

```typescript
class Personne {
  nom: string;
  get prenom(): string {};
  set prenom(value: string) {};
  constructor(public age: number) {};
  methode(p: number): string { return `Méthode: ${p}` }
}
```

---

## Propriétés et méthodes statiques

```typescript
class Personne {
    static description: string = 'Un classe de type personne';
    static printDescription(): string {
       return Personne.description 
    };
}
```

---

## Access Modifiers 

* Tout est public par défaut
  * Sauf les paramètres du constructeur
* Autres 
  * Private
  * Protected  

```typescript
class Personne {
  nom: string;
  private age: number;
  private nePasToucher(): void {}
}
```

---

## Héritage

```typescript
class Individu {
  nom: string;
  print(): void { console.log(this.nom); }
}

interface Utilisateur { login: string }

class Personnel extends Individu implements Utilisateur {
  constructor() {
    super(); // Obligatoire 
  }
  login: string;
  grade: Grade;
}
```

