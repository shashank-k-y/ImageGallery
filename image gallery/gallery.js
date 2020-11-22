function display(previewPic){
   var src = previewPic.getAttribute( "src" );
   var alt = previewPic.getAttribute( "alt" );
   document.getElementById('image').style.backgroundImage = "url('" + src + "')";
   document.getElementById('image').innerHTML = alt;
}

function unDo(x){
 x = document.getElementById('image');
	x.style.backgroundImage="url('')";
	x.innerHTML='Hovwer on the image to display';

}