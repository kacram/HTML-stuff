
//get the input fron the input text box
var filterInput = document.getElementById('filterInput');
//add an event listener to sort when something is typed
filterInput.addEventListener('keyup', FilterNames);

//the function that filters the names
function FilterNames(){
	//get the user's input
	var filterValue = document.getElementById('filterInput').value.toUpperCase();
	
	//get the names of the list
	var ul = document.getElementById('contacts');
	
	//get the list elements from the list
	li = ul.querySelectorAll('li.collection-item');
	
	//loop and disable certain list members
	for(i = 0; i < li.length; i++){
		//convert list elements to an array
		var a = li[i].getElementsByTagName('a')[0];
		//if they match the user's query
		if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
			li[i].style.display = "";
		}
		//if the value dosen't match the user's query
		else{
			li[i].style.display = "none";
		}
	}
}



function AddContact() {
	var woot = document.getElementById("contacts");
	c = woot.getElementsByTagName("a");
	var contact = document.getElementById("addContacts").textContent;
	List<contact> list = new ArrayList<>();
	list.add(contact);
}



function Sort() {
  list = document.getElementById("contacts");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done
    switching = false;
    b = list.getElementsByTagName("a");
    // Loop through all list-items
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        //if next item is alphabetically lower than current item, mark a switch and break the loop
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      //If a switch has been marked, make the switch and mark the switch as done
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}