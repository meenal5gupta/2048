var game = (function() {
    var mat = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    var prev = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    var score = 0;
    var show2048dialog = false;
    var gameO= false;
    var el;
var store = false; 
    

    // function to change state of mat;
    // and set show2048dialog variable if required
    function moveRight() {
        for(var i = 0; i<4; i++)
        {
            for(var j =0 ;j<4; j++)
            {
                prev[i][j] = mat[i][j];
            }
        }
        store=true;
	var n=mat.length;
			for (var i=0; i<n/2; i++) {
				for (var j=i; j<n-i-1; j++) {
					var tmp=mat[i][j];
					mat[i][j]=mat[n-j-1][i];
				mat[n-j-1][i]=mat[n-i-1][n-j-1];
					mat[n-i-1][n-j-1]=mat[j][n-i-1];
					mat[j][n-i-1]=tmp;
					}
			}
			moveDown();
			var n=mat.length;
			for (var i=0; i<n/2; i++) {
				for (var j=i; j<n-i-1; j++) {
					var tmp=mat[i][j];
					mat[i][j]=mat[j][n-i-1];
					mat[j][n-i-1]=mat[n-i-1][n-j-1];
					mat[n-i-1][n-j-1]=mat[n-j-1][i];
					mat[n-j-1][i]=tmp;
				}
			}
            store = false;
    }
    function moveLeft() {
for(var i = 0; i<4; i++)
        {
            for(var j =0 ;j<4; j++)
            {
                prev[i][j] = mat[i][j];
            }
        }
        store = true;
var n=mat.length;
			for (var i=0; i<n/2; i++) {
				for (var j=i; j<n-i-1; j++) {
					var tmp=mat[i][j];
					mat[i][j]=mat[j][n-i-1];
					mat[j][n-i-1]=mat[n-i-1][n-j-1];
					mat[n-i-1][n-j-1]=mat[n-j-1][i];
					mat[n-j-1][i]=tmp;
				}
			}
			moveDown();
			var n=mat.length;
			for (var i=0; i<n/2; i++) {
				for (var j=i; j<n-i-1; j++) {
					var tmp=mat[i][j];
					mat[i][j]=mat[n-j-1][i];
				mat[n-j-1][i]=mat[n-i-1][n-j-1];
					mat[n-i-1][n-j-1]=mat[j][n-i-1];
					mat[j][n-i-1]=tmp;
					}
			}
            store = false;


    }
    function moveTop() {
       for(var i = 0; i<4; i++)
        {
            for(var j =0 ;j<4; j++)
            {
                prev[i][j] = mat[i][j];
            }
        }
store = true;
var n=mat.length;
			for (var i=0; i<n/2; i++) {
				for (var j=i; j<n-i-1; j++) {
					var tmp=mat[i][j];
					mat[i][j]=mat[j][n-i-1];
					mat[j][n-i-1]=mat[n-i-1][n-j-1];
					mat[n-i-1][n-j-1]=mat[n-j-1][i];
					mat[n-j-1][i]=tmp;
				}
			}
			var n=mat.length;
			for (var i=0; i<n/2; i++) {
				for (var j=i; j<n-i-1; j++) {
					var tmp=mat[i][j];
					mat[i][j]=mat[j][n-i-1];
					mat[j][n-i-1]=mat[n-i-1][n-j-1];
					mat[n-i-1][n-j-1]=mat[n-j-1][i];
					mat[n-j-1][i]=tmp;
				}
			}
			moveDown();
			var n=mat.length;
			for (var i=0; i<n/2; i++) {
				for (var j=i; j<n-i-1; j++) {
					var tmp=mat[i][j];
					mat[i][j]=mat[n-j-1][i];
				mat[n-j-1][i]=mat[n-i-1][n-j-1];
					mat[n-i-1][n-j-1]=mat[j][n-i-1];
					mat[j][n-i-1]=tmp;
					}
			}

			var n=mat.length;
			for (var i=0; i<n/2; i++) {
				for (var j=i; j<n-i-1; j++) {
					var tmp=mat[i][j];
					mat[i][j]=mat[n-j-1][i];
				mat[n-j-1][i]=mat[n-i-1][n-j-1];
					mat[n-i-1][n-j-1]=mat[j][n-i-1];
					mat[j][n-i-1]=tmp;
					}
			}


store = false;

    }
    function moveDown() {
        if(store===false)
        {
        for(var i = 0; i<4; i++)
        {
            for(var j =0 ;j<4; j++)
            {
                prev[i][j] = mat[i][j];
            }
        }
    }
    	var array =[0,0,0,0];
    	// for(var i = 0;i<3; i++)
    	// {
    	// 	for(var j = 0; j<4; j++)
    	// 	{
    	// 		if(mat[i+1][j] ===0)
    	// 		{
    	// 			mat[i+1][j]= mat[i][j];
    	// 			mat[i][j] = 0;
    	// 		}
    	// 	}
    	// }
    	// for(var i = 2; i>=0; i--)
    	// {
     //       for(var j = 0; j<4; j++)
     //       {
     //       	if(mat[i][j]==mat[i+1][j]&&array[j]==0)
     //       	{
     //       		mat[i+1][j]=2*mat[i][j];
     //       		mat[i][j] = 0;
     //       		if(mat[i+1][j]===2048&&show2048dialog===false)
     //       		{
     //       			show2048Dialog();
     //       		}
     //       		if(mat[i+1][j]!=0)
     //       		{
     //       		array[j]=1;
     //       	}
     //       		score = score+ mat[i+1][j];
     //       	}
           	
     //       	if(mat[i+1][j]===0)
     //       	{
     //       		mat[i+1][j]=mat[i][j];
     //       		mat[i][j] = 0;
           	
     //       }
     //   }
    	// }
    	// for(var i= 0; i<4; i++)
    	// {
    	// 	if(array[i]===0)
    	// 	{
    	// 		continue;
    	// 	}
    	// 	if(i===3)
    	// 	{
    			
    	// 		return ;
    	// 	}
    	// }
        for(var j = 0; j<4; j++)
        {
            for(var  k= 0; k<4; k++)
            {
                for(var i = 2; i>=0; i--)
                {
                     if(mat[i+1][j] ===0)
                    {
                        mat[i+1][j] = mat[i][j];
                        mat[i][j] = 0;
                    }
                    else if(mat[i][j] ==mat[i+1][j]&&array[j]==0)
                    {
                        array[j] = 1;
                        mat[i+1][j] = 2*mat[i][j];
                        mat[i][j] = 0;
                        score +=mat[i+1][j];
                        el.innerHTML = "Score:"+ score;

                        if(mat[i+1][j]===2048&&show2048dialog===false)

                        {
                                show2048dialog();
                                show2048dialog = true;
                        }
                    }
                   
                }
            }
        }
    	fillOneRandomEmptyCell();
    	
    }


    // reflect state of mat
    function redraw() {
    	var list = document.getElementById("game").querySelectorAll("div");
    for(var i =0; i< mat.length; i++)
    {
    	for (var j=0; j<mat.length; j++)
    	{
    		if(mat[i][j]===0)
    		{
    			list[(i*4)+j].className="tile";
    		}
    		else if(mat[i][j]===2)
    		{
    			list[(i*4)+j].className="tile_2";
    		}

    		else
    		{
    		list[(i*4)+j].className = "tile_"+mat[i][j];
    	}
    	
    	}
    }

    }

    // randomw number between 2 and 4
    function getRandomValue() {
    	var x =  Math.random();
    	if(x<=0.7)
    	{
    		return 2;
    	}
    	return 4;
    }

    // returns x.y of a random empty cell
    function getRandomEmptyCell() {
    	var count  =0;
    	for(var i =0 ; i<mat.length; i++)
    	{
    		for(var j = 0; j<mat.length; j++)
    		{
    			if(mat[i][j]===0)
    			{
    				count++;
    			}
    		}
    	}
    	
    	if(count===0)
    	{
    		gameO = true;
    	return null;
    	}
    	var a = Math.random()*10;
    	a = Math.floor(a);
    	var k = a%count;
    	for(var i =0 ; i<4; i++)
    	{
    		for(var j = 0; j<4; j++)
    		{
    			
    			if(mat[i][j]===0)
    			{
                    if(k===0)
                {
                    var x = i;
                    var y =j;
                    return [x,y];

                }
    				k--;
    				
    			}
    			
    		}
    	}
    	
    	return null;

    	


    }

    function fillOneRandomEmptyCell() {
        var coord = getRandomEmptyCell();
        var value = getRandomValue();
        if(coord!=null)
        {
        mat[coord[0]][coord[1]] = value;
    }
    else{
        gameO  = true;
    }
    
    }

    // checks if gameover
    function isGameOver() {
    	if(gameO)
    	{
    		gameO = false;
    		return true;
    	}
    	return false;
   

    }

    // show Dialog for GameOver()
    function showGameOverDialog() {
    	 if(confirm("Game Over\nWould u like to try again?"))
            {
                reset();
            }
            else{
                alert("Thanks for playing");
                window.close();
            }

    }

    // show dialog for 2048
    function show2048Dialog() {

        if(!confirm("2048 reached!!! Would u like to continue??"))
        {
        	reset();
        }
    }

    function move(e) {
        //depending upon keypress you call the respective function
        if(e.which===40)
        {
        	moveDown();
        }
        else if(e.which===37)
        {
        	moveLeft();
        }
        else if(e.which===38)
        {
        	moveTop();
        }
        else if(e.which===39)
        {
        	moveRight();
        }
        
        redraw();
        for(var i = 0; i<4; i++)
        {
            for(var j = 0; j<4; j++)
            {

                localStorage.setItem(i*4+j, mat[i][j]); //It's saved!
// var test = localStorage.getItem("test"); //Let's grab it and save it to a variable
// console.log(test);
            }
        }
        if (isGameOver()) {
           showGameOverDialog();
        }
        if (show2048dialog === true) {
            show2048Dialog();
            
        }
    }
    function reset(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        mat = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
        prev = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
        score = 0;
         el.innerHTML="Score:0";
        fillOneRandomEmptyCell();
        for(var i = 0; i<4; i++)
        {
            for(var j =0 ;j<4; j++)
            {
                prev[i][j] = mat[i][j];
            }
        }
        // fillOneRandomEmptyCell();
        redraw();
    }
    function undo() {
        for(var i = 0; i<4; i++)
        {
            for(var j =0 ;j<4; j++)
            {
                mat[i][j] = prev[i][j];
            }
        }
        redraw();

    }
    function reset2() {
         for(var i = 0; i<4; i++)
        {
            for(var j = 0; j<4; j++)
            {

               mat[i][j]= localStorage.getItem(i*4+j);
               prev[i][j]= localStorage.getItem(i*4+j); //It's saved!

// var test = localStorage.getItem("test"); //Let's grab it and save it to a variable
// console.log(test);
            }
        }
        redraw();

    }
    function init() {
        el =  document.getElementById('score');
        document.getElementById('reset').addEventListener('click',reset);
        document.getElementById('undo').addEventListener('click',undo);
        reset();
        
       

        // fillOneRandomEmptyCell();
        redraw();


        // add reset method on click actions of all the reset elements
        window.addEventListener('keydown', move);
    }
    return {
        init : init
    };
})();