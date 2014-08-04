
// x-youtube タグを作る
var XYoutubeProtoType = Object.create(HTMLElement.prototype, {
	createdCallback: {
		value: function() {
			// templateタグを取得する
			var template = document.querySelector('#x-youtube-template');
			// templateのDocumentFragmetからcontentを参照し取得する
			var content = template.content;

			// iframeのsrc属性を入れ替える
			var video = content.querySelector('iframe');
			var videoUrl = "http://www.youtube.com/embed/";
			// カスタム要素の属性値を変更する
			var videoId = this.getAttribute('video-id')
			var videoSrc = videoUrl + videoId;

			// 作られたiframeをsrc属性に設定する
			video.setAttribute('src', videoSrc);

			// Shadow Rootにcontentを追加する
			this.createShadowRoot().appendChild(
				document.importNode(content, true)
			);
		}		
	}
});

// ライフタイムコールバックの登録
XYoutubeProtoType.attachedCallBack = function() {
	console.log('XYoutubeが追加された');
};

XYoutubeProtoType.detachedCallBack = function() {
	console.log('XYoutubeが削除された');
};

XYoutubeProtoType.atributeChangedCallBack = function() {
	console.log('XYoutubeの属性が変化した');
};

var XYoutube = document.registerElement('x-youtube', {prototype: XYoutubeProtoType});