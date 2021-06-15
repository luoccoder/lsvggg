let drawPoints=[];
let cachePoints='';
let isNext=false;
let mainBox='';
let bsvg='';
let isStart=false;
let isCurrentEnd=false;
function getPoints(event){

  let e = event || window.event ;

  let mouseClick=(event)=>{};
  let mouseMove=(event)=>{};
  let mouseUp=(event)=>{};
  let keyDown=(event)=>{
    let e=event||window.event;
    if(e.keyCode===13){
      isCurrentEnd=true;
      cachePoints='';
    }
    if(e.keyCode===32){
      let pushIn=()=>{
        for(let p of drawPoints){
          let poly=document.createElementNS("http://www.w3.org/2000/svg","polygon");
          poly.setAttribute("style","border:1px red solid");
          poly.setAttribute("points",p);
          bsvg.appendChild(poly);
        }
      }
      if(!isCurrentEnd){
        if(drawPoints){
          drawPoints.splice(-1,1);
          drawPoints.push(cachePoints);
          pushIn();
        }
      }else{
        drawPoints.push(cachePoints);
        isCurrentEnd=false;
        pushIn();
      }
    }
    if(e.keyCode==27){
      let urlObject = window.URL || window.webkitURL || window;
      let text=``;
      for(let p of drawPoints){
        text+=`${p}\n`
      }
      let export_blob = new Blob([text]);
      let save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
      save_link.href = urlObject.createObjectURL(export_blob);
      save_link.download = 'name';
      save_link.click();

    }
  }
  
  if(!isStart){
    mainBox=document.elementFromPoint(event.clientX,event.clientY);
    bsvg=document.createElementNS("http://www.w3.org/2000/svg","svg");
    bsvg.setAttribute("height",mainBox.offsetHeight);
    bsvg.setAttribute("width",mainBox.offsetWidth);
    bsvg.setAttribute("class","sgPoly");
    mainBox.appendChild(bsvg);
    isStart=true;
  }
  if(!isNext){
    cachePoints+=`${e.pageX},${e.pageY} `;
  };
  window.addEventListener('click',mouseClick);
  window.addEventListener('mousemove',mouseMove);
  window.addEventListener('mouseup',mouseUp);
  window.addEventListener('keydown',keyDown);
}

module.exports=getPoints