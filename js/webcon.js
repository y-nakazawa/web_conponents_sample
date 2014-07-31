
// x-youtube タグを作る
var XYoutubeProtoType = Object.create(HTMLElement.prototype, {
	createCallBack: {
		value: function() {
			// templateタグを取得する
			var template = document.querySelector('#x-youtube-template');
			// templateのDocumentFragmetからcontentを参照し取得する
			var content = template.content;
			// Shadow Rootにcontentを追加する
			this.createShadowRoot().appendChild(
				document.importNode(content, true)
			);
		}		
	}
});

// ライフタイムコールバックの登録
XYoutubeProtoType.createCallBack = function() {
	console.log('XYoutubeが生成された');
/*
	value: function() {
		// templateタグを取得する
		var template = document.querySelector('#x-youtube-template');
		// templateのDocumentFragmetからcontentを参照し取得する
		var content = template.content;
		// Shadow Rootにcontentを追加する
		this.createShadowRoot().appendChild(
			document.importNode(content, true);
		);
	}
*/
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
	console.log('XYoutubeが追加された');
};

XYoutubeProtoType.detachedCallBack = function() {
	console.log('XYoutubeが削除された');
};

XYoutubeProtoType.atributeChangedCallBack = function() {
	console.log('XYoutubeの属性が変化した');
};

var XYoutube = document.registerElement('x-youtube',{
	prototype: XYoutubeProtoType
});