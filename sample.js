
// window.addEventListener('load', function () {
// 	viewSlide('.slide img');
// });
// function viewSlide(className, slideNo = -1)
// {
// 	let imgArray = document.querySelectorAll(className);
// 	if (slideNo >= 0) {
// 		//初回以外は現在のスライドを消す
// 		imgArray[slideNo].style.opacity = 0;
// 	}
// 	slideNo++;
// 	if (slideNo >= imgArray.length) {
// 		slideNo = 0; //次のスライドがなければ最初のスライドへ戻る
// 	}
// 	imgArray[slideNo].style.opacity = 1;
// 	let msec = document.getElementById('slide_speed').value;
// 	setTimeout(function(){viewSlide(className, slideNo);}, msec);
// }

// let msec = document.getElementById('slide_speed').max - document.getElementById('slide_speed').value;



// 時間の指定
var timer = 6000;

// スライドする要素を取得
var imgs = document.querySelectorAll('.slide a');

// 最初の画像を表示
imgs[0].classList.add('show');

// 画像の番号
var imgNum = 0;
function showImg () {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove('show');
  }
  if (imgNum >= imgs.length - 1) {
    imgNum = 0;
  } else {
    imgNum++;
  }
  imgs[imgNum].classList.add('show');
  showImgTimer();
}
function showImgTimer () {
  setTimeout(showImg, timer);
}
showImgTimer()
