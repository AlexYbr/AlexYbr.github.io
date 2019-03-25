function init(){
    document.getElementById("flow0").src = "flower1.png";
    document.getElementById("flow1").src = "flower1.png";
    document.getElementById("flow2").src = "flower1.png";
    document.getElementById("flow3").src = "flower1.png";
    document.getElementById("flow4").src = "flower1.png";


    document.getElementById("container").getElementsByTagName("img")[1].src = "flower2.png";
    document.getElementById("container").getElementsByTagName("img")[3].src = "flower2.png";

    document.getElementById("empty").innerHTML = "<div><p> Great job ! </p></div>";

    let img = document.createElement("img");
    img.src="flower1.png";

    document.getElementById("new_element").appendChild(img);

    let spans = document.getElementById('rainbow').children;

    let colors = ["red", "orange","yellow","green","blue","purple","pink"];

    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color =colors[i];
    }


    var changeSrc = (event) => {
        if (event.target.src) {
            let index = event.target.src.search(/flower\d\.png$/);
            switch (event.target.src.slice(index)) {
                case 'flower1.png':
                    event.target.src = 'flower2.png';
                    break;
                case 'flower2.png':
                    event.target.src = 'flower1.png';
                    break;
            }
        }
    };

    document.getElementById("event").addEventListener("mouseover", changeSrc);

}


function addItem() {
    let item = document.getElementById("itemName").value;
    let isImportant = document.getElementById("isImportant").valueOf();
    let groceries = document.getElementById("groceries").valueOf();
    if (/[^\s][a-zA-Z0-9\s]+$/.test(item))
    {
        let addItem = document.createElement("li");
        addItem.appendChild(document.createTextNode(item));
        if (isImportant.checked)
            addItem.style.color = "#B71C1C";
        if (groceries.checked)
            addItem.style["text-decoration"] = "underline";
        document.getElementById("list").appendChild(addItem);
        document.getElementById("itemRemove").max = (parseInt(document.getElementById('itemRemove').getAttribute("max")) +1);
    }
    else
        window.alert("The format is incorrect !");
    document.getElementById("itemName").value = '';
}


function removeItem() {
    let index = document.getElementById("itemRemove").value;
    let length = document.getElementById("list").childElementCount;
    if (/^[0-9]+$/.test(index))
    {
        if (index <= length && index > 0)
        {
            let removeItem = document.getElementById("list").getElementsByTagName("li")[index-1];
            document.getElementById("list").removeChild(removeItem);
            document.getElementById("itemRemove").max = (parseInt(document.getElementById('itemRemove').getAttribute("max")) -1);
        }
        else
            window.alert("The index is incorrect !")
    }
    else
        window.alert("The index should be a number !");
}