
let btn = document.getElementsByTagName("button")[0];
let inp = document.getElementsByTagName("input")[0];;
let nav = document.getElementsByTagName("nav")[0];
let ul = document.getElementsByTagName("ul")[0];

const btnFunc = () => {
    let num = inp.value;
    let createli = document.createElement("li");
    let createinp;
    
    for(i=1; i <= num; i++){
        
        createinp = document.createElement("input");
        ul.appendChild(createli);
        createli.appendChild(createinp);
        
    }

    
    let btn2 = document.createElement("button");
    let btnText = document.createTextNode("click here");
    btn2.appendChild(btnText);
    createli.appendChild(btn2);

    const btnFunc2 = () => {
        let inputs = createli.querySelectorAll("input"); 
        for (let i = 0; i < num; i++) {
            let navli = document.createElement("li");
            let livalue = document.createTextNode(inputs[i].value); 
            navli.appendChild(livalue);
            ul.appendChild(navli);

        }
       
        
        nav.setAttribute("class","navbar");
        createli.style.display = "none";
        
    }


    btn2.addEventListener('click', btnFunc2 );
}


btn.addEventListener('click', btnFunc );
