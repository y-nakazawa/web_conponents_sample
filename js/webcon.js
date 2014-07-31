
// x-youtube タグを作る
var XYoutubeProtoType = Object.create(HTMLElement.prototype);

// ライフタイムコールバックの登録
XYoutubeProtoType.createCallBack = function() {
	console.log('XYoutubeが生成された');

	// mouseover時のイベントを指定
	this.addEventListener('#mouseover', function(event) {
		this.style.color = '#fff';
		this.style.backgroundColor = '#000';
	});

	// mouseout時のイベントを指定
	this.addEventListener('#mouseout', function(event) {
		this.style.color = '#000';
		this.style.backgroundColor = '#fff';
	});
};

XYoutubeProtoType.attachedCallBack = function() {
	
};

var XYoutube = document.registerElement('x-youtube',{
	prototype: XYoutubeProtoType
});