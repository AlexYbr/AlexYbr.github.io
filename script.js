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