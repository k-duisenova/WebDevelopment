var cnt = 1;
function btnClick(){
    var text = document.getElementById("new_task").value;
    document.getElementById("new_task").value = "";
    if (text.length == 0) { //if there is no task to add
        alert("Try once more. You should enter something!");
    } else if(text.length > 0) {
        var list = document.getElementById("content");
        var any_task = document.createElement("div");
        list.appendChild(any_task);
        any_task.className = "any_task";
        any_task.id = cnt;
        //checkbox
        var checkbox = document.createElement("input");
        checkbox.className = "checkbox";
        any_task.appendChild(checkbox);
        checkbox.type = "checkbox";
        checkbox.onclick = function toLine(){
            var parToLine = this.parentElement.getElementsByClassName('tasks')[0];
            if(this.checked){
                parToLine.style.textDecoration = "line-through";
            }else{
                parToLine.style.textDecoration = "none";
            }
        }
        //tasks list
        var paragraphDiv = document.createElement("div");
        paragraphDiv.className = "tasks";
        var paragraph = document.createElement("p");
        var newP = document.createTextNode(text);
        paragraph.className = cnt;
        any_task.appendChild(paragraphDiv);
        paragraphDiv.appendChild(paragraph);
        paragraph.appendChild(newP);
        //delete button
        var deleteDiv = document.createElement("div");
        var del = document.createElement("button");
        del.className = "del";
        del.innerHTML = "delete";
        any_task.appendChild(deleteDiv);
        deleteDiv.appendChild(del);
        del.onclick = function toDel(){
            this.parentElement.parentElement.remove();
        }
        cnt++;
    }
}