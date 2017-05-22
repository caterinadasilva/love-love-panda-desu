function imgs() {
	var container = document.getElementById('pic-container');
	var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
	
	pictures.forEach(function(img) {
		var foto = document.createElement('img');
		foto.src = img;
		container.appendChild(foto);
	})
}

