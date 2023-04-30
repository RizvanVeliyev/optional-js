let box=document.getElementById("input");
let btn=document.getElementById("print");
let list=document.getElementById("list");
 btn.addEventListener("click",calculation)


function calculation(){
    while(list.firstChild){
        list.removeChild(list.firstChild);

    }
    if(box.value>0 && box.value<100){
        for(let i=1;i<=input.value;i++){
            var element=document.createElement("li");
            element.innerText=i;
            list.appendChild(element);

            if (i%2==0){
                element.classList.add("background1");
            }

            else{
                element.classList.add("background2");
            }
        }
    }

}