var btn= document.getElementById('addbtn');
var input=document.getElementById('myInput');
var ul=document.querySelector('ul');

btn.addEventListener("click", function() {
if(input.value.length > 0)
{
var li=document.createElement('li');
li.appendChild(document.createTextNode(input.value));
var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
ul.appendChild(li);
input.value='';
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
}
}
})
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

