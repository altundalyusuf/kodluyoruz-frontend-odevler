// Ekleme butonu
let ekleButton = document.querySelector("#liveToastBtn");
// ul etiketi
let list = document.querySelector("#list");
// Girilen değer
let inputValue = document.querySelector("#task");
// Başarılı ekleme uyarısı
let successAlert = document.querySelector(".toast.success.hide");
// Hatalı ekleme uyarısı
let failAlert = document.querySelector(".toast.error.hide");


//------------------------------------ To-Do Ekleme Fonksiyonu--------------------------

ekleButton.addEventListener("click", function newElement() {
	// Boş Girildiyse Bildirim Fırlat
	if (inputValue.value.trim() === "") {
		let bootstrapAlert = new bootstrap.Toast(failAlert);
		bootstrapAlert.show();
	}
	// Girilen Değeri To-Do'lara ekle
	else {
		let liDOM = document.createElement("li");
		liDOM.innerHTML = `${inputValue.value.trim()}<button type="button" class="close close-todo" aria-label="Close">
        <span class="close-x" aria-hidden="true">&times;</span>
        </button>
        `;
		list.append(liDOM);
		// Storage'a ekle ve boşlukları sil
		addTodoToStorage(inputValue.value.trim());
		inputValue.value = "";
		// Ekleme başarılı bildirimi
		let bootstrapAlert = new bootstrap.Toast(successAlert);
		bootstrapAlert.show();
	}
});

// Storage'dan mevcut to-do'ları çeken fonksiyon. Eğer to-do yok ise to-do dizisi başlatıyor
function getTodosFromStorage() {
	let todos;

	if (localStorage.getItem("todos") === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	return todos;
}

// To-do'ları storage'dan alıp ekleme yapan fonksiyon
function addTodoToStorage(newTodo) {
	let todos = getTodosFromStorage();

	todos.push(newTodo);

	localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener("DOMContentLoaded", loadAllTodosToUI);

// Storage'daki to-do'ları sayfa yenilendiğinde ekrana eklemek
function loadAllTodosToUI() {

	let todos = getTodosFromStorage();

	todos.forEach(function (todo) {
		let liDOM = document.createElement("li");
		liDOM.innerHTML = `${todo.trim()}<button type="button" class="close close-todo" aria-label="Close">
        <span class="close-x" aria-hidden="true">&times;</span>
        </button>
        `;
		list.append(liDOM);
	});
}

//------------------------------------ To-Do Silme Fonksiyonu--------------------------

list.addEventListener("click", deletingTodos);

function deletingTodos(e) {
	if (e.target.className === "close-x") {
		let li = e.target.parentElement.parentElement
		e.target.parentElement.parentElement.remove();
		// Storage'dan silme
		deleteTodoFromStorage(li.firstChild.textContent);
		
	}
}

// To-Do'ları Storage'dan silme

function deleteTodoFromStorage(deletetodo){

	let todos = getTodosFromStorage();

	todos.forEach(function(todo,index){
		if(todo === deletetodo){
			todos.splice(index,1);
		}
	});	
	localStorage.setItem("todos",JSON.stringify(todos));
}

//------------------------------------ Alternatif To-Do Silme Fonksiyonu--------------------------

// document.getElementById('list').addEventListener('click', function (e) {
//     if (e.target.parentElement.parentElement.nodeName == 'LI') {
//         e.target.parentElement.parentElement.remove();
//     }
// });


// ----------------------------------- Yapıldı İşaretleme Fonksiyonu--------------------------------

list.addEventListener("click", (e) => {
	if (e.target.nodeName === "LI") {
		e.target.classList.toggle("checked");
	}
});
