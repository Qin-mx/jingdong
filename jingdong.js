$(function(){
	//轮播
function lunbo(){
	var bos=$(".banner-center")[0];
	var imgs=$(".banner-center-tu");
	var dian=$(".lis");
	var right=$(".right-a")[0];
	var left=$(".left-a")[0];
	var n=0;
	var next=0;
    var t=setInterval(move,5000)
    var flag=true;
    function move(){
    	if(!flag){
    		return;
    	}
    	flag=false;
	    	next=n+1;
	    	if(next>=imgs.length){
	    		next=0;
	    	}
	    	for(var i=0;i<imgs.length;i++){
	    		dian[i].style.background="#3E3E3E";	    		
	    	}
	    	dian[next].style.background="#B61B1F";
	        imgs[next].style.opacity=1;
	        animate(imgs[n],{opacity:1});
	        animate(imgs[next],{opacity:2},function(){
	        	flag=true;
	        });
	        n=next;
	    }

    function move1(){
    	if(!flag){
    		return;
    	}
    	flag=false;
			next=n-1;
	    	if(next<0){
	    		next=imgs.length-1;
	    	}
	    	for(var i=0;i<imgs.length;i++){
	    		dian[i].style.background="#3E3E3E";	    		
	    	}
	    	dian[next].style.background="#B61B1F";
	        imgs[next].style.opacity=0;
	        animate(imgs[n],{opacity:0});
	        animate(imgs[next],{opacity:1},function(){
	        	flag=true;
	        });
	        n=next;
	    }
		bos.onmouseover=function(){
			clearInterval(t);                   //移入停止
			left.style.background="rgba(0,0,0,0.5)";
            left.style.color="#fff";
            right.style.background="rgba(0,0,0,0.5)";
            right.style.color="#fff";
		}
		bos.onmouseout=function(){
			t=setInterval(move,5000)        //移除东
			left.style.background="rgba(0,0,0,0.0)";
			left.style.color="rgba(0,0,0,0.0)";
            right.style.color="rgba(0,0,0,0.0)";
            right.style.background="rgba(0,0,0,0.0)";           
		}
        for(var i=0;i<dian.length;i++){
           dian[i].index=i;   
        dian[i].onmouseover=function(){
        	if(!flag){
    		return;
    	   	}
    		flag=false;
        	for(var i=0;i<imgs.length;i++){
	    		dian[i].style.background="#3E3E3E";	    		
	    	}
	    	dian[this.index].style.background="#B61B1F";
	        imgs[this.index].style.opacity=0;
	        animate(imgs[n],{opacity:0});
	        animate(imgs[this.index],{opacity:1},function(){
	        	flag=true;
	        });
	        n=this.index;
        } 
    }
    left.onclick=function(){
    	move1();
    }
    right.onclick=function(){
    	move();
    }
  }
lunbo();
//轮播2
lunone();
function lunone(){
   var bos=$(".tui")[0];
	var imgs=$(".tuibox");
	var right=$(".tui-right")[0];
	var left=$(".tui-left")[0];
	var n=0;
	var next=0;
    var flag=true;
    function move(){
    	if(!flag){
    		return;
    	}
    	flag=false;
	    	next=n+1;
	    	if(next>=imgs.length){
	    		next=0;
	    	}
	        imgs[next].style.left="1000px";
	        animate(imgs[n],{left:-1000});
	        animate(imgs[next],{left:0},function(){
	        	flag=true;
	        });
	        n=next;
	    }

    function move1(){
    	if(!flag){
    		return;
    	}
    	flag=false;
			next=n-1;
	    	if(next<0){
	    		next=imgs.length-1;
	    	}
	        imgs[next].style.left="-1000px";
	        animate(imgs[n],{left:1000});
	        animate(imgs[next],{left:0},function(){
	        	flag=true;
	        });
	        n=next;
	    }
		bos.onmouseover=function(){               //移入停止
			left.style.background="rgba(0,0,0,0.3)";
            left.style.color="#fff";
            right.style.background="rgba(0,0,0,0.3)";
            right.style.color="#fff";
		}
		bos.onmouseout=function(){      //移除东
			left.style.background="rgba(0,0,0,0.0)";
			left.style.color="rgba(0,0,0,0.0)";
            right.style.color="rgba(0,0,0,0.0)";
            right.style.background="rgba(0,0,0,0.0)";           
		}
	    left.onclick=function(){
	    	move1();
	    }
	    right.onclick=function(){
	    	move();
	    }
}
//关闭
guan()
function guan(){
	var dd=$(".g")[0];
	var gg=$(".g-a")[0];
     gg.onclick=function(){
     	dd.style.display="none"
     }
   }
//按需加载
anxu();
function anxu(){
		var floor=$(".yi");
		var box=$(".boss")[0];
		var lis=$(".dains");
		var cw=document.documentElement.clientWidth;
        var ch=document.documentElement.clientHeight;
        var bh=box.offsetHeight;
        box.style.top=(ch-bh)/2+"px";
        var sign=true;
        for(var i=0;i<lis.length;i++){
        	lis[i].index=i;
        	lis[i].onclick=function(){             
        	sign=false;
        	var obj=document.body.scrollTop?document.body:document.documentElement;       	
        	var top=floor[this.index].offsetTop-40;
        	animate(obj,{scrollTop:top},function(){
        		sign=true;
        	});
      }
   } 
    window.onscroll=function(){         //滚动事件
    	if(!sign){
    		return;
    	}
        var obj=document.body.scrollTop?document.body:document.documentElement;
        for(var i=0;i<lis.length;i++){
        	if(obj.scrollTop>=floor[i].offsetTop-ch){
        		for(var j=0;j<floor.length;j++){
    	        lis[j].style.background="#fff";
    	        lis[j].style.color="#625351";
                }
                lis[i].style.background="#C81623";
                lis[i].style.color="#fff";
                }
                var imgs=$("img",floor[i]);              
                for(var j=0;j<imgs.length;j++){
                	var aa=imgs[j].getAttribute("aa");
                	imgs[j].src=aa;
                
        	}
        }
        var flag=true;
        var flag1=true;        
        if(obj.scrollTop>=floor[0].offsetTop-ch){   
    	    if(flag){
    		flag=false;   
    		animate(box,{opacity:1},300,function(){
    			flag1=true; 
    			});	
    	    }
        }else{
    	    if(flag1){
    	    flag1=false;
    	    animate(box,{opacity:0},300,function(){
    	    flag=true;
    			});	
    	}

    }	

   }
}
//轮播
xiaolunbo();
function xiaolunbo(){
	var bos=$(".yi-d")[0];
	var imgs=$(".yi-tu");
	var dian=$(".yidians");
	var right=$(".yi-right")[0];
	var left=$(".yi-left")[0];
	var n=0;
	var next=0;
    var t=setInterval(move,5000)
    var flag=true;
    function move(){
    	if(!flag){
    		return;
    	}
    	flag=false;
	    	next=n+1;
	    	if(next>=imgs.length){
	    		next=0;
	    	}
	    	for(var i=0;i<imgs.length;i++){
	    		dian[i].style.background="#3E3E3E";	    		
	    	}
	    	dian[next].style.background="#B61B1F";
	        imgs[next].style.left="439px";
	        animate(imgs[n],{left:-439});
	        animate(imgs[next],{left:0},function(){
	        	flag=true;
	        });
	        n=next;
	    }

    function move1(){
    	if(!flag){
    		return;
    	}
    	flag=false;
			next=n-1;
	    	if(next<0){
	    		next=imgs.length-1;
	    	}
	    	for(var i=0;i<imgs.length;i++){
	    		dian[i].style.background="#3E3E3E";	    		
	    	}
	    	dian[next].style.background="#B61B1F";
	        imgs[next].style.left="-439px";
	        animate(imgs[n],{left:439});
	        animate(imgs[next],{left:0},function(){
	        	flag=true;
	        });
	        n=next;
	    }
		bos.onmouseover=function(){
			clearInterval(t);                   //移入停止
			left.style.background="#ccc";
            left.style.color="#fff";
            right.style.background="#ccc";
            right.style.color="#fff";
		}
		bos.onmouseout=function(){
			t=setInterval(move,5000)        //移除东
			left.style.background="rgba(0,0,0,0.0)";
			left.style.color="rgba(0,0,0,0.0)";
            right.style.color="rgba(0,0,0,0.0)";
            right.style.background="rgba(0,0,0,0.0)";           
		}
       for(var i=0;i<dian.length;i++){
        dian[i].index=i;                   
        dian[i].onclick=function(){            
            for(var i=0;i<imgs.length;i++){
               dian[i].style.background="#3E3E3E";
        }
           dian[this.index].style.background="#B61B1F";
           if(this.index<n){                        
           imgs[this.index].style.left="-439px";  
           animate(imgs[n],{left:439});          
           animate(imgs[this.index],{left:0})     
           n=this.index;                           
        }else if(this.index>n){                
           imgs[this.index].style.left="439px";     
           animate(imgs[n],{left:-439});                   
           animate(imgs[this.index],{left:0}) ; 
           n=this.index;
        }
      } 
    }
	    left.onclick=function(){
	    	move1();
	    }
	    right.onclick=function(){
	    	move();
	    }
}
//2lou
two();
function two(){
	var bos=$(".mei")[0];
	var imgs=$(".mei-a");
	var dian=$(".meidians");
	var right=$(".mei-right")[0];
	var left=$(".mei-left")[0];
	var n=0;
	var next=0;
    var t=setInterval(move,5000)
    var flag=true;
    function move(){
    	if(!flag){
    		return;
    	}
    	flag=false;
	    	next=n+1;
	    	if(next>=imgs.length){
	    		next=0;
	    	}
	    	for(var i=0;i<imgs.length;i++){
	    		dian[i].style.background="#3E3E3E";	    		
	    	}
	    	dian[next].style.background="#B61B1F";
	        imgs[next].style.left="339px";
	        animate(imgs[n],{left:-339});
	        animate(imgs[next],{left:0},function(){
	        	flag=true;
	        });
	        n=next;
	    }

    function move1(){
    	if(!flag){
    		return;
    	}
    	flag=false;
			next=n-1;
	    	if(next<0){
	    		next=imgs.length-1;
	    	}
	    	for(var i=0;i<imgs.length;i++){
	    		dian[i].style.background="#3E3E3E";	    		
	    	}
	    	dian[next].style.background="#B61B1F";
	        imgs[next].style.left="-339px";
	        animate(imgs[n],{left:339});
	        animate(imgs[next],{left:0},function(){
	        	flag=true;
	        });
	        n=next;
	    }
		bos.onmouseover=function(){
			clearInterval(t);                   //移入停止
			left.style.background="#ccc";
            left.style.color="#fff";
            right.style.background="#ccc";
            right.style.color="#fff";
		}
		bos.onmouseout=function(){
			t=setInterval(move,5000)        //移除东
			left.style.background="rgba(0,0,0,0.0)";
			left.style.color="rgba(0,0,0,0.0)";
            right.style.color="rgba(0,0,0,0.0)";
            right.style.background="rgba(0,0,0,0.0)";           
		}
       for(var i=0;i<dian.length;i++){
        dian[i].index=i;                   
        dian[i].onclick=function(){            
            for(var i=0;i<imgs.length;i++){
               dian[i].style.background="#3E3E3E";
        }
           dian[this.index].style.background="#B61B1F";
           if(this.index<n){                        
           imgs[this.index].style.left="-439px";  
           animate(imgs[n],{left:339});          
           animate(imgs[this.index],{left:0})     
           n=this.index;                           
        }else if(this.index>n){                
           imgs[this.index].style.left="439px";     
           animate(imgs[n],{left:-339});                   
           animate(imgs[this.index],{left:0}) ; 
           n=this.index;
        }
      } 
    }
	    left.onclick=function(){
	    	move1();
	    }
	    right.onclick=function(){
	    	move();
	    }
}
//3lou
var bos=$(".jiayong-b");
for(var i=0;i<bos.length;i++){
	three(i);
}
function three(n){
	var bos=$(".jiayong-b")[n];
	var imgs=$(".jia-b",bos);
	var dian=$(".jiadians",bos);
	var right=$(".jia-right")[n];
	var left=$(".jia-left")[n];
	var n=0;
	var next=0;
    var t=setInterval(move,5000)
    var flag=true;
    function move(){
    	if(!flag){
    		return;
    	}
    	flag=false;
	    	next=n+1;
	    	if(next>=imgs.length){
	    		next=0;
	    	}
	    	for(var i=0;i<imgs.length;i++){
	    		dian[i].style.background="#3E3E3E";	    		
	    	}
	    	dian[next].style.background="#B61B1F";
	        imgs[next].style.left="439px";
	        animate(imgs[n],{left:-439});
	        animate(imgs[next],{left:0},function(){
	        	flag=true;
	        });
	        n=next;
	    }

    function move1(){
    	if(!flag){
    		return;
    	}
    	flag=false;
			next=n-1;
	    	if(next<0){
	    		next=imgs.length-1;
	    	}
	    	for(var i=0;i<imgs.length;i++){
	    		dian[i].style.background="#3E3E3E";	    		
	    	}
	    	dian[next].style.background="#B61B1F";
	        imgs[next].style.left="-439px";
	        animate(imgs[n],{left:439});
	        animate(imgs[next],{left:0},function(){
	        	flag=true;
	        });
	        n=next;
	    }
		bos.onmouseover=function(){
			clearInterval(t);                   //移入停止
			left.style.background="#ccc";
            left.style.color="#fff";
            right.style.background="#ccc";
            right.style.color="#fff";
		}
		bos.onmouseout=function(){
			t=setInterval(move,5000)        //移除东
			left.style.background="rgba(0,0,0,0.0)";
			left.style.color="rgba(0,0,0,0.0)";
            right.style.color="rgba(0,0,0,0.0)";
            right.style.background="rgba(0,0,0,0.0)";           
		}
       for(var i=0;i<dian.length;i++){
        dian[i].index=i;                   
        dian[i].onclick=function(){            
            for(var i=0;i<imgs.length;i++){
               dian[i].style.background="#3E3E3E";
        }
           dian[this.index].style.background="#B61B1F";
           if(this.index<n){                        
           imgs[this.index].style.left="-439px";  
           animate(imgs[n],{left:439});          
           animate(imgs[this.index],{left:0})     
           n=this.index;                           
        }else if(this.index>n){                
           imgs[this.index].style.left="439px";     
           animate(imgs[n],{left:-439});                   
           animate(imgs[this.index],{left:0}) ; 
           n=this.index;
        }
      } 
    }
	    left.onclick=function(){
	    	move1();
	    }
	    right.onclick=function(){
	    	move();
	    }
}
//6lou

var bos=$(".yun");
for(var i=0;i<bos.length;i++){
	six(i);
}
function six(n){
	var bos=$(".yun")[n];
	var imgs=$(".yun-a",bos);
	var dian=$(".yundians",bos);
	var right=$(".yun-right")[n];
	var left=$(".yun-left")[n];
	var width=parseInt(getStyle(imgs[0],"width"));
	var n=0;
	var next=0;
    var t=setInterval(move,5000)
    var flag=true;
    function move(){
    	if(!flag){
    		return;
    	}
    	flag=false;
	    	next=n+1;
	    	if(next>=imgs.length){
	    		next=0;
	    	}
	    	for(var i=0;i<imgs.length;i++){
	    		dian[i].style.background="#3E3E3E";	    		
	    	}
	    	dian[next].style.background="#B61B1F";
	        imgs[next].style.left=width+"px";
	        animate(imgs[n],{left:-width});
	        animate(imgs[next],{left:0},function(){
	        	flag=true;
	        });
	        n=next;
	    }

    function move1(){
    	if(!flag){
    		return;
    	}
    	flag=false;
			next=n-1;
	    	if(next<0){
	    		next=imgs.length-1;
	    	}
	    	for(var i=0;i<imgs.length;i++){
	    		dian[i].style.background="#3E3E3E";	    		
	    	}
	    	dian[next].style.background="#B61B1F";
	        imgs[next].style.left=-width+"px";
	        animate(imgs[n],{left:width});
	        animate(imgs[next],{left:0},function(){
	        	flag=true;
	        });
	        n=next;
	    }
		bos.onmouseover=function(){
			clearInterval(t);                   //移入停止
			left.style.background="#ccc";
            left.style.color="#fff";
            right.style.background="#ccc";
            right.style.color="#fff";
		}
		bos.onmouseout=function(){
			t=setInterval(move,5000)        //移除东
			left.style.background="rgba(0,0,0,0.0)";
			left.style.color="rgba(0,0,0,0.0)";
            right.style.color="rgba(0,0,0,0.0)";
            right.style.background="rgba(0,0,0,0.0)";           
		}
       for(var i=0;i<dian.length;i++){
        dian[i].index=i;                   
        dian[i].onclick=function(){            
            for(var i=0;i<imgs.length;i++){
               dian[i].style.background="#3E3E3E";
        }
           dian[this.index].style.background="#B61B1F";
           if(this.index<n){                        
           imgs[this.index].style.left=-width+"px";  
           animate(imgs[n],{left:width});          
           animate(imgs[this.index],{left:0})     
           n=this.index;                           
        }else if(this.index>n){                
           imgs[this.index].style.left=width+"px";     
           animate(imgs[n],{left:-width});                   
           animate(imgs[this.index],{left:0}) ; 
           n=this.index;
        }
      } 
    }
	    left.onclick=function(){
	    	move1();
	    }
	    right.onclick=function(){
	    	move();
	    }
}
//11lou
ten();
function ten(){
	var bos=$(".box-c")[0];
	var imgs=$(".box-ca");
	var n=0;
	var next=0;
    var t=setInterval(move,5000)
    function move(){
	    	next=n+1;
	    	if(next>=imgs.length){
	    		next=0;
	    	}
	        imgs[next].style.top="226px";
	        animate(imgs[n],{top:-226});
	        animate(imgs[next],{top:0});
	        n=next;
	    }
	bos.onmouseover=function(){
			clearInterval(t);                   
		}
 	bos.onmouseout=function(){
			t=setInterval(move,5000);          
		}
	}
//下拉
function xiala(){	
	var songzhi=$(".head-song")[0];
	var song=$(".songzhi")[0];
	songzhi.onmouseover=function(){
		song.style.display="block";
	}
	songzhi.onmouseout=function(){
		song.style.display="none";
	}
}
	xiala();
function xiala2(n){	
	var songzhi=$(".head-jing")[n];
	var song=$(".head-shouji")[n];
	songzhi.onmouseover=function(){
		song.style.display="block";
	}
	songzhi.onmouseout=function(){
		song.style.display="none";
	}
}
	xiala2(0);
	xiala2(1);
	xiala2(2);
	xiala2(3);
	xiala2(4);
	xiala2(5);
//中间
function zhong(n){	
	var zong=$(".banner-left-zi")[n];
	var tu=$(".banner-kong")[n];
	zong.onmouseover=function(){
		tu.style.display="block";
	}
	zong.onmouseout=function(){
		tu.style.display="none";
	}
}

var zong=$(".banner-left-zi");
for(var i=0;i<zong.length;i++){
	zhong(i);
}

//选项卡
function xuan(){
	var lis=$(".fu-c");                 
	var ones=$(".yi-you-a");                         
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;                
		lis[i].onmouseover=function(){    
			for(var j=0;j<ones.length;j++){
				ones[j].style.display="none";
				lis[j].style.border=0; 
			}
			ones[this.index].style.display="block"; 
			lis[this.index].style.borderBottom="2px solid #fff"; 
			lis[this.index].style.borderTop="3px solid #C81623"; 
			lis[this.index].style.borderRight="1px solid #C81623"; 
			lis[this.index].style.borderLeft="1px solid #C81623"; 	
		}
	} 	    		  
}
xuan();
//选项卡2楼
function xuan2(n){
	var box=$(".meimei")[n]
	var bos=$(".mei-righttu")[n]
	var lis=$(".meimei-c",box);                 
	var ones=$(".mei-right-tu",bos);                         
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;           
		lis[i].onmouseover=function(){    
			for(var j=0;j<ones.length;j++){
				ones[j].style.display="none";
				lis[j].style.border=0; 
			}
			ones[this.index].style.display="block"; 
			lis[this.index].style.borderBottom="2px solid #fff"; 
			lis[this.index].style.borderTop="3px solid #C81623"; 
			lis[this.index].style.borderRight="1px solid #C81623"; 
			lis[this.index].style.borderLeft="1px solid #C81623"; 	
		}
	} 	    		  
}
var box=$(".meimei");
for(var i=0;i<box.length;i++){
	xuan2(i);
}

//选项卡3楼
function xuan3(n){
	var box=$(".jy")[n]
	var bos=$(".jydq-right")[n]
	var lis=$(".jy-c",box);                 
	var ones=$(".jydq-right-tu",bos);                         
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;                
		lis[i].onmouseover=function(){    
			for(var j=0;j<ones.length;j++){
				ones[j].style.display="none";
				lis[j].style.border=0; 
			}
			ones[this.index].style.display="block"; 
			lis[this.index].style.borderBottom="2px solid #fff"; 
			lis[this.index].style.borderTop="3px solid #C81623"; 
			lis[this.index].style.borderRight="1px solid #C81623"; 
			lis[this.index].style.borderLeft="1px solid #C81623"; 	
		}
	} 	    		  
}
var box=$(".jy");
for(var i=0;i<box.length;i++){
	xuan3(i);
}
})