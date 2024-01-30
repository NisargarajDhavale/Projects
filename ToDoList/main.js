// To get all the <li> elements and store them in myNodeList
var myNodeList = document.getElementsByTagName("LI");

// To loop through each <li> element in myNodeList
for (var i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("span");
    // Creates a text-node with the content "×"
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// To get all elements with class name "close"
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    // Set an onclick event for each "close" element
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// To get all the <ul> element
var list = document.querySelector('ul');
// To add a click event listener to the <ul> element
list.addEventListener('click', function(ev) {
    if (ev.target.tagName == "LI") {
        ev.target.classList.toggle('checked');
    }
}, false);

// Function to add a new <li> element to the list
function newElement() {
    var li = document.createElement("li");
    // Get the value of the input field with id "item"
    var inputValue = document.getElementById("item").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue == '') {
        alert("Invalid input");
    } else {
        document.getElementById("list").appendChild(li);
    }

    document.getElementById("item").value = "";

    var span = document.createElement("SPAN");

    var txt = document.createTextNode('\u00D7');

    span.className = "close";

    span.appendChild(txt);

    li.appendChild(span);

    // Loop through each "close" element
    for (var i = 0; i < close.length; i++) {
        // Set an onclick event for each "close" element
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
