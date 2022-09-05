var camera = {
	initialize: function() {
	this.bindEvents();
	},
	bindEvents: function() {
			document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function() {
		console.log('deviceready event')
		var button = document.getElementById("take_pictures");
		button.addEventListener("click", takePictures);
	}
};

camera.initialize();


// document.addEventListener('DOMContentLoaded', function () {
// 	alert('DOMContentLoadedイベントが発火しました');
// }, false);

// document.addEventListener('load', function () {
// 	alert('loadイベントが発火しました');
// }, false);

// document.addEventListener('deviceready', function () {
// 	alert('devicereadyイベントが発火しました');
// }, false);

// // 写真撮影ボタンを押した時に呼ばれる
function takePictures(){
	navigator.camera.getPicture(cameraSuccess, cameraError, { quality: 80, destinationType: Camera.DestinationType.DATA_URL });
}
// 写真撮影が成功した時
function cameraSuccess(image){
	var img = document.getElementById("image");
	img.src = "data:image/jpeg;base64," + image;
}
// 失敗した時
function cameraError(message){
	alert("Failed!!: " + message);
}


export default camera;