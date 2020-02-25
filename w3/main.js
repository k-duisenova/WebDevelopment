document.addEventListener("DOMContentLoaded", () => {
    let addButton = document.querySelector(".add");
    let addInput = document.querySelector("#new_task");

    let removeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"/></svg>` ;

    addButton.addEventListener("click",function(){
        let newItem = document.getElementById("new_task").value;
        if(newItem==='') {
            alert("Enter something!");
        }

        else
        {
            addItemTodo(newItem);
        }
        document.getElementById("new_task").value = "";
    });

    addInput.addEventListener("keypress",function(e){
        if (13 === e.keyCode){
            let newItem = document.getElementById("new_task").value;
            if(newItem==='') {
                alert("Enter something!");
            }

            else
            {
                addItemTodo(newItem);
                document.getElementById("new_task").value = "";
            }
        }
    });

    function addItemTodo(text){
        let list = document.getElementById("list");
        let item = document.createElement('li');
        item.innerText = text;
        let buttons = document.createElement('div');
        buttons.classList.add("buttons");
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');
        checkbox.classList.add("complete");
        let remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = removeSVG;
        remove.addEventListener("click",removeItem);


        checkbox.onclick = function toLine(){
            var parToLine = this.parentElement.getElementById('new_task');
            if(this.checked){
                parToLine.style.textDecoration = "line-through";
            }else{
                parToLine.style.textDecoration = "none";
            }
        }

        buttons.appendChild(remove);
        item.appendChild(buttons);
        item.appendChild(checkbox);
        list.appendChild(item);
        //list.insertBefore(item,list.childNodes[0]);
    }


    function removeItem(){
        let item = this.parentNode.parentNode;
        let parent  = item.parentNode;
        parent.removeChild(item);
    }

});