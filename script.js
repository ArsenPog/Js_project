// var x = 0;
// var s = setInterval(function(){
// 	document.write('barev')
// 	x++;
// 	if(x==5){
// 		clearInterval(s)
// 	}
// }, 2000);

//  setInterval(function(){
// 	var s = document.createElement('div')
// 	s.style.width = "400px"
// 	s.style.height = "400px"
// 	s.style.border = "1px solid"
// 	document.body.appendChild(s)
// }, 2000);


//unenal zangvac mek varkyany mek tpi zangvaci elmementnery hertov
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var s = 0;
// setInterval(function(){
// 	for (var i = 0; i < arr.length; i++) {
// 		if(s==i){
// 			document.write(arr[i])
// 		}
// 	}
// 	s = s+1;
// }, 1000)

//unenal mec div ira mej klor div,klor divy gnalu e depi aj
var q = document.createElement('div')
q.style.width = "700px"
q.style.height = "700px"
q.style.border = "1px solid"
q.style.position = "relative"

document.body.appendChild(q)
 var x = document.createElement('div')
 x.style.width = "100px"
 x.style.height = "100px"
 x.style.borderRadius = "50px"
 x.style.border = "1px solid"
 x.style.position = "absolute"
 q.appendChild(x) 
 var w = 0;
 var u = 0;
var r = 600;
var b = 600;
var le = setInterval(function(){
	w = w+1
	if(w<600){
	   x.style.left = w+"px"
	}
    else{
        clearInterval(le);
        var to = setInterval(function(){
            u= u+1
            if(u<600){
                x.style.top = u+"px"
            }
            else{
                clearInterval(to);
                var ri = setInterval(function(){
                    r = r-1;
                    if(r>0){
                        x.style.left = r+'px';
                    }
                    else{
                        clearInterval(ri);
                        var bott = setInterval(function(){
                            b = b-1;
                            if (b>0) {
                                x.style.top = b+'px'
                            }
                        }, 10)
                    }
                }, 10)
            }

        }, 10)
    }

}, 10)

