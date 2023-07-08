let e1 = document.getElementById("todoInput");
let list = document.getElementById("list");
let e3 = document.getElementById("cont2");

function addTodo() {
  if (e1.value === '') {
    alert("Enter Something!");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = e1.value;
    list.appendChild(li);
    let se = document.createElement("span");
    se.innerHTML = "\u00d7";
    li.appendChild(se);
  }
  e1.value = '';
  savedata();
}

let cont = document.querySelector(".cont");

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    if (e.target.classList == "checked") {
      alert("Congratulations For Completing The Task!!");
    }
  }
  else {
    if (e.target.parentElement.classList == "checked") {
      e.target.parentElement.remove();
      savedata();
    }
    else {
      let pop1 = document.createElement("div");
      let p = document.createElement("p");
      p.innerHTML = "The Task is Incomplete! <br> Are You Sure To Delete?";
      pop1.appendChild(p);
      pop1.classList.toggle("confirmation");
      let br = document.createElement("br");
      pop1.appendChild(br);
      let btn_yes = document.createElement("button");
      btn_yes.innerHTML = "YES";
      let btn_no = document.createElement("button");
      btn_no.innerHTML = "NO";
      pop1.appendChild(btn_yes);
      pop1.appendChild(btn_no);
      cont.appendChild(pop1);
      btn_yes.onclick = function () {
        e.target.parentElement.remove();
        pop1.style.display = "none";
        savedata();
      }
      btn_no.onclick = function () {
        pop1.style.display = "none";
      }
    }
  }
}, false);

function savedata(){
  localStorage.setItem("data", list.innerHTML); 
}

function showdata(){
  list.innerHTML=localStorage.getItem("data");
}

showdata()
