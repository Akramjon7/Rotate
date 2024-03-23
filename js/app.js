let circle = document.getElementById('circle');
let upBtn = document.getElementById('upBtn');
let downBtn = document.getElementById('downBtn');




let rotateValeu = circle.style.transform;
let rotateSum;

upBtn.onclick = function(){
      rotateSum = rotateValeu + "rotate(-90deg)";
      circle.style.transform = rotateSum;
      rotateValeu = rotateSum;
}
downBtn.onclick = function(){
      rotateSum = rotateValeu + "rotate(90deg)";
      circle.style.transform = rotateSum;
      rotateValeu = rotateSum;
}