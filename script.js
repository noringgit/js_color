'use strict';


    // HTMLで、<canvas>要素の幅と高さ、および、id名を指定する
    // getElementByIdメソッドでHTMLと関連付けて、getContextメソッドで描画機能を有効にする
    // canvasAPIの仕様で定められたメソッドやプロパティを使用して、具体的な描画内容を指定する

// getElementByIdメソッドでHTMLと関連付けて、(color)
// getContextメソッドで描画機能を有効にする

//idのcolorの要素をcanvasに代入
let canvas = document.getElementById('color');
//描画機能が利用できるように2Dコンテキストを取得
let ctx = canvas.getContext('2d');

let imageColor  = new Image();
imageColor.src = 'test.png';


//読み込まれたら画像を表示させる
imageColor.onload = function() {
    ctx.drawImage(imageColor, 0, 0, 150, 100);
    let imageData = ctx.getImageData(0, 0, 150, 100);
	console.log(imageData);

	let data = imageData.data;
	console.log(data);

};//表示位置


//描画済みのコンテキストからデータをもらう
//rgbaデータは配列の形でdataに格納される
// let imageData = ctx.getImageData(0, 0, 150, 100);
// console.log(imageData);

// let data = imageData.data;

	// for(let item of data){
	// 	console.log(data);
	// }