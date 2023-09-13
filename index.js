let photoDrag;
let beforeDiv

const position = document.querySelectorAll(".position")
const finish = document.querySelector(".finish")
const scoreContainer = document.querySelector(".score-container")

document.addEventListener("dragstart", (event) => {
  photoDrag = event.target;
  event.target.style.opacity = 0.6;
  // console.log(event.target.parentNode);
  beforeDiv = event.target.parentNode
});

// ドラッグ中
document.addEventListener("drag", () => {});

// ドロップ可能エリアに入った時
document.addEventListener("dragenter", (event) => {
  if (event.target.className == "position") {
    event.target.style.background = "#a9a9a9";
  }
});

document.addEventListener("dragover", (event) => {
    event.preventDefault();
  },
  false
);

// ドロップ可能エリアから離れた時
document.addEventListener("dragleave", (event) => {
  if (event.target.className == "position") {
    event.target.style.background = "";
  }
});

// ドラッグが終了した時
document.addEventListener("dragend", (event) => {
  event.target.style.opacity = 1;
});

// ドロップ時の処理
document.addEventListener("drop", (event) => {

  // 上の候補地間での入れ替え用
  if (event.target.className == "photo-each" || event.target.parentElement.className == "position") {
    let targetPosition = event.target.parentElement
    let beforeDrag = event.target
    photoDrag.parentNode.removeChild(photoDrag);  
    beforeDiv.appendChild(beforeDrag)
    targetPosition.appendChild(photoDrag);
  }
  // 下と上を行き来する用
  if (event.target.className == "position") {
    event.target.style.background = "";
    photoDrag.parentNode.removeChild(photoDrag);
    if(event.target.innerHTML != ""){
      let beforeDrag = event.target.innerHTML
      beforeDiv.innerHTML = beforeDrag
      event.target.innerHTML = ""
    }
    event.target.appendChild(photoDrag);
  }
  // 格納している変数を初期化
  photoDrag = null;
});




finish.addEventListener("click", ()=>{
  let score = 0
  for(let i = 0; i < 4; i++){
    if(position[i].innerHTML != ""){
      if(position[i].id[5] == position[i].children[0].id){score++}
    }
  }
  console.log(score);
  scoreContainer.innerText = score
})























// <お手本>
// ドラッグしている要素を格納する変数
let dragItem;

// ドラッグが開始された時
document.addEventListener("dragstart", (event) => {
  // ドラッグした要素を変数に格納
  dragItem = event.target;
  event.target.style.opacity = 0.6;
});

// ドラッグ中
document.addEventListener("drag", () => {});

// ドロップ可能エリアに入った時
document.addEventListener("dragenter", (event) => {
  if (event.target.className == "box") {
    event.target.style.background = "#a9a9a9";
  }
});

// ドロップ可能エリア内にある時
document.addEventListener("dragover", (event) => {
    event.preventDefault();
  },
  false
);

// ドロップ可能エリアから離れた時
document.addEventListener("dragleave", (event) => {
  if (event.target.className == "box") {
    event.target.style.background = "";
  }
});

// ドラッグが終了した時
document.addEventListener("dragend", (event) => {
  event.target.style.opacity = 1;
});

// ドロップ時の処理
document.addEventListener("drop", (event) => {
  if (event.target.className == "box") {
    event.target.style.background = "";
    dragItem.parentNode.removeChild(dragItem);
    event.target.appendChild(dragItem);
  }
  // 格納している変数を初期化
  dragItem = null;
});
