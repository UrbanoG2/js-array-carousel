// const items = [
//     'img/01.jpg',
//     'img/02.jpg',
//     'img/03.jpg',
//     'img/04.jpg',
//     'img/05.jpg'
// ];


// const title = [
//     'Svezia',
//     'Svizzera',
//     'Gran Bretagna',
//     'Germania',
//     'Paradise'
// ];


// const text = [
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     'Lorem ipsum',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ];

const btnUp = document.querySelector (".up");
const btnDown = document.querySelector (".down");

// console.log(btnUp, btnDown);

btnDown.addEventListener ("click",
    function () {

        

        //trovo l'elemento del dom
        const itemActive = document.querySelector(".img.active");
        const thumbActive = document.querySelector (".thumb.active");
        // console.log(itemActive.classList);

        //cerco una stringa in una lista di classi

        //quindi prendo la lista di classi

        const listClass = itemActive.classList;
        // console.log(listClass);
        //per cercare in una lista devo "girarci" dentro

        let last = false;

        for (let i = 0; i < listClass.length; i++) {
            // console.log(listClass[i]);

            //inizio a girare su questi elementi

            //e gli dico che se trovo l'ultimo elemento non succede più niente

            if (listClass[i] == "last") {
                last = true;
            }
        }

        //mentre se non trovo l'ultimo elemento succede quello che abbiamo detto (quindi se found == false)




        //non è l'ultimo elemento

        //se nella classlist dell'elemento non c'è last vado con l'if (che sarebbe rimuovere e aggiungere la classe active), altrimenti avrò l'else (cioè dovrò fermarmi)

        if (last == false) {

           //rimuovo active
        itemActive.classList.remove("active");
        thumbActive.classList.remove("active");

        const nextElement = itemActive.nextElementSibling;
        // console.log(nextElement);

        const nextThumb = thumbActive.nextElementSibling;

        //aggiungo l'active

        nextElement.classList.add ("active"); 
        nextThumb.classList.add ("active"); 

        }
        
        
    }


    //copio e incollo tutto perchè è bene o male la stessa cosa, ma facciamo un paio di cambiamenti (non cerco più la classe "last" ma cerco la classe "first", cambio la costante da "nextElement" a "prev" e avrò quindi "previousElementSibling")

)

btnUp.addEventListener ("click",
    function () {

        

        //trovo l'elemento del dom
        const itemActive = document.querySelector(".img.active");
        const thumbActive = document.querySelector (".thumb.active");
        // console.log(itemActive.classList);

        //cerco una stringa in una lista di classi

        //quindi prendo la lista di classi

        const listClass = itemActive.classList;
        console.log(listClass);
        //per cercare in una lista devo "girarci" dentro

        let first = false;

        for (let i = 0; i < listClass.length; i++) {
            // console.log(listClass[i]);

            //inizio a girare su questi elementi

            //e gli dico che se trovo l'ultimo elemento non succede più niente

            if (listClass[i] == "first") {
                first = true;
            }
        }

        //mentre se non trovo l'ultimo elemento succede quello che abbiamo detto (quindi se found == false)




        //non è l'ultimo elemento

        //se nella classlist dell'elemento non c'è last vado con l'if (che sarebbe rimuovere e aggiungere la classe active), altrimenti avrò l'else (cioè dovrò fermarmi)

        if (first == false) {

           //rimuovo active
        itemActive.classList.remove("active");
        thumbActive.classList.remove("active");


        const prevElement = itemActive.previousElementSibling;
        // console.log(nextElement);

        const prevThumb = thumbActive.previousElementSibling;


        //aggiungo l'active

        prevElement.classList.add ("active"); 
        prevThumb.classList.add ("active"); 

        }
        
        
    }

)