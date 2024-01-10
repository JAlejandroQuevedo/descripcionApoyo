//Declaracion de variables sin DOM

/**Variable: Es una manera de guardar un valor para. 
 * Esta es la forma en la que se declara una variable:
 */
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
//Esta variable asigna el valor de 0 al arma que esta usando el personaje del juego
let fighting;
//Se declara una variable sin asignacion para asignarla despues.
let monsterHealth;
//Se declara una variable sin asignacion para declararla despues.
let inventory = ["Palo"];

//Declaracion de variables DOM
/******NOTA**********
 * Todas las variables que guarden objetos HTML, deben ser declarados con CONST ya que no se busca que estos sean reasignados.
 * CONST: Es utilizada para declarar variables cuyos valores no seran reasignados*/ 
const button1 = document.querySelector('#button1');
/**Para acceder al html usando javscript, se usa el objeto 'document', que representa el documento entero del html.
 * querySelector, es un metodo para encontrar elementos especificos del HTML. Este metodo toma como argumento un selector CSS y regresa
 * en Javascript al primer elemento que coincida con el selector.
 */
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

//Declaracion de armas, con su correspondiente nombre y numero de poder
/**Objeto:
 * Es similar a un array pero con algunas diferencias. Una de ellas es que los objetos tienen propiedades para acceder a ellos y 
 * modificar los datos. Las propiedades en los objetos tienen la estructura:
 * key:'value' donde key es el nombre de la propiedad y value el valor que tiene la propiedad.
 */
const weapons = [
    { name: 'Palo ', power: 5 },
    { name: ' Daga', power: 30 },
    { name: ' Martillo ', power: 50 },
    { name: ' Espada ', power: 100 }
];
//Declaracion de las variables correspondientes a los enemigos a combatir
const monsters = [
    {
        name: "slime",
        level: 2,
        health: 15
    },
    {
        name: "fanged beast",
        level: 8,
        health: 60
    },
    {
        name: "dragon",
        level: 20,
        health: 300
    }
];
//Declaracion de locaciones
const locations = [
    {
        name: "town square",
        "button text": ["Ir a la tienda", "Ir a la cueva", "Combatir el dragon"],
        //Un array es usado para almacenar multiples elementos. Los valores son separados por comas
        "button functions": [goStore, goCave, fightDragon],
        
        text: "Estás en la plaza del pueblo. Verás un cartel que dice \"Tienda\"."
        //Texto que sera reasignado segun la interaccion del usuario
    },
    {
        name: "store",
        "button text": ["Compra 10 de salud (10 de oro)", "Compra arma (30 de oro)", "Regresar"],
        "button functions": [buyHealth, buyWeapon, goTown],
        //funciones que se declaran mas adelante.
        text: "Entras a la tienda."
        //Texto que sera reasignado segun la interaccion del usuario
    },
    {
        name: "cave",
        "button text": ["Combatir slime", "Combatir fanged beast", "Regresar"],
        "button functions": [fightSlime, fightBeast, goTown],
        //funciones que se declaran mas adelante.
        text: "Entras en la cueva. Ves algunos monstruos."
        //Texto que sera reasignado segun la interaccion del usuario
    },
    {
        name: "fight",
        "button text": ["Atacar", "Esquivar", "Correr"],
        "button functions": [attack, dodge, goTown],
        //funciones que se declaran mas adelante.
        text: "Estás luchando contra un monstruo."
        //Texto que sera reasignado segun la interaccion del usuario
    }, {
        name: "kill monster",
        "button text": ["Regresar", "Regresar", "Regresar"],
        "button functions": [goTown, goTown, easterEgg],
        //funciones que se declaran mas adelante.
        text: 'El monstruo grita "¡Arg!" mientras muere. Obtienes puntos de experiencia y encuentras oro.'
        //Texto que sera reasignado segun la interaccion del usuario
    }, {
        name: "lose",
        "button text": ["¿Reiniciar?", "¿Reiniciar?", "¿Reiniciar?"],
        "button functions": [restart, restart, restart],
        text: "Moriste. ☠️"
        //Texto que sera reasignado segun la interaccion del usuario
    },
    {
        name: "win",
        "button text": ["¿Reiniciar?", "¿Reiniciar?", "¿Reiniciar?"],
        "button functions": [restart, restart, restart],
        //funciones que se declaran mas adelante.
        text: "¡Derrotaste al dragón! ¡GANAS EL JUEGO! 🎉"
        //Texto que sera reasignado segun la interaccion del usuario
    },
    {
        name: "easter egg",
        "button text": ["2", "8", "Regresar"],
        "button functions": [pickTwo, pickEight, goTown],
        //funciones que se declaran mas adelante.
        text: "Encuentras un juego secreto. Elige un número de arriba. Se elegirán diez números al azar entre 0 y 10. Si el número que eliges coincide con uno de los números aleatorios, ¡ganas!"
        //Texto que sera reasignado segun la interaccion del usuario
    }
];

// Inicializacion de los botones
button1.onclick = goStore;
//funciones que se declaran mas adelante.
button2.onclick = goCave;
button3.onclick = fightDragon;
/**Los elementos button tienen una propiedad especial que se usa para determinar que pasa cuando alguien hace click en un boton.
 * Se puede acceder a esta propiedad de diferentes maneras. La primera es la notacion por punto. 
 * button.onclik = funcion que contiene la accion a realizar.
 */

//Declaracion de funciones

/**Una funcion es una herramienta especial que corren secciones de codigo a elementos especificos.
 */
function update(location) {
    monsterStats.style.display = "none";
    //Hace que desaparezca un objeto html hasta que sea llamado nuevamente en el codigo javascript.
    button1.innerText = location["button text"][0];
    /*innerText: Es una propiedad que controla el texto escrito en javascript en html. Es decir, hace que se ejecute
    un texto escrito en javascript en HTML. Como un console.log.
    En este caso, el botton cambiara al al valor del parametro a key button text que contiene un array y accedera al primer
    elemento del mismo.
    */
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
    /*Cambia el texto del key del objeto text y asigna que esta debe aparecer como el valor asignado a location y asignarle el key
    correspondiente
    */
}

/**Las siguiente funciones tienen como unica funcion el asignarle los valores correspondientes al parametro de function declarado en update
 * es decir, accedes a la funcion, luego asignas el parametro solicitado por la misma que en este caso es un array y luego accedes
 * al indice del array al que quieres acceder.
  */

function goTown() {
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
}
//Se asigna funcion para comprar salud.
function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        /*Si la variable gold, es mayor o igual a 10, se le resta 10 al oro y se asignan 10 de sald.*/
        goldText.innerText = gold;
        healthText.innerText = health;
        //El texto en el html cambiara a la nueva cantidad de oro y de salud que da la operacion anterior.
    } else {
        text.innerText = "No tienes suficiente oro para comprar salud.";
        //El texto del html cambiara a en el html si no se cumplen las condiciones.
    }
}

function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
        //si la primera variable es menor a la cantidad de elementos del array se le restara uno.
        if (gold >= 30) {
            gold -= 30;
            /*Si la variable gold, es mayor o igual a 30, se le resta 30 al oro*/
            currentWeapon++;
            //Se le asina el nuevo valor a la variable, que en este caso es una arma mas para el inventario, arma que se encuentra el el array weapons.
            goldText.innerText = gold;
            //Aparece en el html el nuevo valor de la variable gold
            let newWeapon = weapons[currentWeapon].name;
            //Se crea una variable a la que se le asignara el objeto weapons, esta accedera a su key currentWeapon y accedera a su value name
            text.innerText = "Ahora tienes un " + newWeapon + ".";
            //El texto del HTML cambia para mostrar el arma que se compro con el oro.
            inventory.push(newWeapon);
            //Se agrega al final del array inventory la variable newWeapon
            text.innerText += " En tu inventario tienes: " + inventory;
            //El texto html cambia para mostrar las armas que tiene actualmente el personaje.
        } else {
            text.innerText = "No tienes suficiente oro para comprar un arma.";
            //Si no se tiene el suficiente oro, es decor si no se cumple la condicion, se mostrara este texto.
        }
    } else {
        //Si se recorre el array weapons por completo se mostraran estos textos en el documento HTML.
        text.innerText = "¡Ya tienes el arma más poderosa!";
        button2.innerText = "Vende el arma por 15 de oro.";
        button2.onclick = sellWeapon;
    }
}

function sellWeapon() {
    if (inventory.length > 1) {
        //Se recorre el inventario, si este es mayor a uno, se asigna 15 a tu variable gold.
        gold += 15;
        goldText.innerText = gold;
        //Muestra el texto con la nueva cantidad de oro en el HTML.
        let currentWeapon = inventory.shift();
        //Se crea una variable currentWeapon que removera el primer elemento del array inventario
        text.innerText = "Vendiste " + currentWeapon + ".";
        //se muestra el texto en consola del arma que fue vendida
        text.innerText += " En tu inventario tienes: " + inventory;
        //se muestra el texto en consola con lo que queda en el inventario
    } else {
        text.innerText = "¡No vendas tu única arma!";
        //Si el array inventario no es mayor a uno, aparece este mensaje en el HTML.
    }
}

function fightSlime() {
    fighting = 0;
    //Se le asigna el valor a la variable fighting
    goFight();
    //Se llama a la funcion, goFight, esta sera creada mas adelante.
}

function fightBeast() {
    fighting = 1;
    //Se le asigna el valor a la variable fighting
    goFight();
    //Se llama a la funcion, goFight, esta sera creada mas adelante.
}

function fightDragon() {
    fighting = 2;
    //Se le asigna el valor a la variable fighting
    goFight();
    //Se llama a la funcion, goFight, esta sera creada mas adelante.
}

function goFight() {
    //Se declara a la variable goFight
    update(locations[3]);
    //Se llama a la funcion update que usa como parametro a el array locations y llama al indice numero tres de este mismo.
    monsterHealth = monsters[fighting].health;
    //Se accede a la salud del mounstro mientras lucha, es decir, accedemos a la salud del mounstro con la salud que tenga
    //segun las funciones creadas anteriormente.
    monsterStats.style.display = "Bloquea";
    //Reaparece el elemento HTML bloquea.
    monsterName.innerText = monsters[fighting].name;
    //cambia el texto del monsterName al valor de la asignacion de la variable fighting asignada al key name.
    monsterHealthText.innerText = monsterHealth;
    //Cambia el texto a la salud del mounstro.
}

function attack() {
    text.innerText = "El " + monsters[fighting].name + " ataca.";
    //Accede a la funcion declarada anteriormente para proporcionar el nombre del mounstro con el que esta luchando el personaje
    //y se muestra un mensaje en el documento HTML.
    text.innerText += " Lo atacas con tu " + weapons[currentWeapon].name + ".";
    //Se muestra un mensaje en el HTML con un mensaje el cual usa el objeto weapons para acceder al valor asignado en currentWeapon
    // y se especifica el texto que se mostrara.
    health -= getMonsterAttackValue(monsters[fighting].level);
    //Se resta a la variable health el
    if (isMonsterHit()) {
        monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
        //Se le resta a a la variable monsterHealth el valor correspondiente al key del objeto weapons power tomando como valor
        //lo correspondiente a la variable current wepons, a esto se le suma un numero random entre el valor del xp.
    } else {
        text.innerText += " Perdiste.";
        //Si no se cumple la condicion se muestra este texto en consola.
    }
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
        lose();
        //Si salud es menor a 0 se ejecuta la funcion lose
    } else if (monsterHealth <= 0) {
        fighting === 2 ? winGame() : defeatMonster();
        //Si monsterHealth es menor a 0 y fighting es estrictamente igual a dos, se ejecuta la funcion winGame, si no, se ejecuta, defeatMonster
    }
    if (Math.random() <= .1 && inventory.length !== 1) {
        text.innerText += " Tú " + inventory.pop() + " se rompe.";
        //Si un numero random es menor o igual a menos .1  y la longitud del inventario es diferente de uno, se muestra en html un mensaje
        //que toma el array inventario eliminando el ultimo elemento del mismo.
        currentWeapon--;
        //Se le resta un valor a la variable current weapon
    }
}

function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    //Se declara una variable que multiplica el parametro de la funcion * 5 y le resta un numero redondeado hacia abajo que genera 
    //un numero random tomando el valor xp
    console.log(hit);
    //Se muestra en consola el valor hit
    return hit > 0 ? hit : 0;
    //Restorna, si hit es mayor a 0 ejecuta hit:0
}

function isMonsterHit() {
    return Math.random() > .2 || health < 20;
    //Retorna un numero random mayor a .2 o health < 20
}

function dodge() {
    text.innerText = "Esquivas el ataque de " + monsters[fighting].name;
    //Muestra el nombre actual del mounstro con el que se esta luchando
}

function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    //Suma un numero redondeado hacia abajo que toma el nivel del mounstro con el que se esta peleando multiplicado por 6.7
    xp += monsters[fighting].level;
    //Suma a la variable xp el valor del nivel del mounstro actual con el que se esta peleando
    goldText.innerText = gold;
    xpText.innerText = xp;
    //Muestra en el documento HTML el valor actual de gold y de xp.
    update(locations[4]);
}

function lose() {
    update(locations[5]);
}

function winGame() {
    update(locations[6]);
}

function restart() {
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["Palo"];
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown();
    //Muestra los valores que se mostraran si se ejecuta esta funcion, y se ejecuta la funcion goTown que ya tiene la logica
    //para mostrar esos valores en el HTML
}

function easterEgg() {
    update(locations[7]);
}

function pickTwo() {
    pick(2);
}

function pickEight() {
    pick(8);
}

function pick(guess) {
    const numbers = [];
    while (numbers.length < 10) {
        //Mientras la longitud de numbers sea menor a 10
        numbers.push(Math.floor(Math.random() * 11));
        //Se agregara al final del array numbers un numero random redondeado hacia abajo entre el numero 11.
    }
    text.innerText = "Elegiste " + guess + ". Aquí están los números aleatorios.:\n";
    //Se muestra texto en consola que toma el parametro y muestra los numeros aleatorios
    for (let i = 0; i < 10; i++) {
        text.innerText += numbers[i] + "\n";
        //Se crea un bucle que mostrara numeros del 1 al 10 sumados a la variable numeros, es la manera como se muestran los 
        //numeros aleatorios del juego.
    }
    if (numbers.indexOf(guess) !== -1) {
        text.innerText += "¡Bien! ¡Ganas 20 de oro!";
        //Muestra texto en consola
        gold += 20;
        //Suma 20 a la variable gold
        goldText.innerText = gold;
        //Se muestra el valor actual de la variable gold en consola
    } else {
        text.innerText += "¡Equivocado! ¡Pierdes 10 de salud!";
        //Si no se cumple la condicion, es decir si el numero señalado no es el que se genera aleatoriamente, se ejecuta el mensaje
        //en el documento html.
        health -= 10;
        //Se restan 10 a la variable health.
        healthText.innerText = health;
        //Se muestra en el HTML el valor actual de la variable health.
        if (health <= 0) {
            lose();
            //Si salud es menor o igual a 0 se ejecuta la variable lose.
        }
    }
}