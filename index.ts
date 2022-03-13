import { concat } from 'rxjs';

console.clear();

// ***************************************
// typusok
// ***************************************
// boolean
const b: boolean = true;

// number
const n: number = 5;

// string
const s: string = 'Lorem ipsum';
const ts: string = `Template: ${s}`;
console.log(ts);

// array
const a1: number[] = [1, 2, 3, 4];

// array generikus paraméterrel
const a2: Array<number> = [1, 2, 3, 4];

// több típus használata
let infArrayType: (number | string)[] = [];
infArrayType.push(1);
infArrayType.push('sadadasad');
//infArrayType.push(false); // hibát dob
console.log('Több típusú tömb:', infArrayType);

// enum typus
const enum Season {
  Winter = 'Winter',
  Autumn = 'Autumn',
  Spring = 'Spring',
  Summer = 'Summer',
}

const e: Season = Season.Autumn;
console.log('Enum értéke', e);

// any ugyanúgy visselkedik mint egy javascriptes változó.
// futáskori hibákat okozhatnak
// ha js és ts kódot közösen kell használni akkor érdemes használni
const a: any = 'Lorem ipsum';
console.log('Any típusú string uppercase: ', a.toUpperCase());

// Type Assertions amikor megmondjuk neki hogy mi tudjuk így már lesz kódkiegészítő
console.log('Type assertion: ', (a as string).toUpperCase());

// type inference amikor a typescript fordító találja ki hogy milyen tpus
const inf = 'Lorem';
console.log('type inference string: ', inf.toUpperCase());

const infArray = [];
infArray.push('Lorem');
infArray.push(2);
console.log('type inference array: ', infArray);

// Union types
function unionType(args: string | string[]): number {
  return args.length;
}

console.log(`Union type array: ${unionType(['Lorem', 'Ipsum'])}`);
console.log(`Union type string lengt: ${unionType('Lorem')}`);

// ***************************************
// Functions
// ***************************************
function logFunction(x: string): void {
  console.log('Függvén hívás');
}

function conCatFunction(x: string, y: string): string {
  return x.concat(y);
}
console.log('Concate függvény hívása: ', conCatFunction('Lorem', 'Ipsum'));

// ***************************************
// INTERFACE
// kötelező nem kötelező property
// ***************************************
interface User {
  id: number;
  name: string;
  age?: number;
}

const user1: User = {
  id: 1,
  name: 'Lorem ipsum',
};

const user2: User = {
  id: 1,
  name: 'Lorem ipsum',
  age: 20,
};

// ***************************************
// CLASS
// ***************************************
class UserClass {
  private name: string; // csak osztályon belül elérhető
  firstName: string; // publikus
  lastName: string; // publikus
  readonly ro: string; // csak egyszer lehet értéket adni

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = firstName.concat(lastName);
    this.ro = 'asas';
  }

  setRo() {
    //this.ro = 'ssdsds'; // újboli értékadás tiltott
  }
}

const user3 = new UserClass('Lorem', 'Ipsum');
console.log(user3);
