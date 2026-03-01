let input = document.querySelector("#inp")
text = document.querySelector(".text")


function Add() {
    if (input.value == "") {
        alert("please enter the task")
    }
    else {
        let ne = document.createElement("ul")
        ne.innerHTML = `${input.value}`;


        text.appendChild(ne)
        input.value = ""
        deletetask(ne)



    }
}

function deletetask(ne) {
    const delbtn = document.createElement("button")
    delbtn.textContent = "delete"
    ne.appendChild(delbtn)
    delbtn.className = "db"

    delbtn.onclick = () => {

        if (confirm("are you sure to delete this task")) {

            ne.remove()

        }


    }

}

