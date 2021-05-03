var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_width = 30;
block_heigth = 30;

var player_object = "";
var block_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){

        player_object = Img;
        player_object.scaleToWidth(150); 
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(player_object);

    })
}


function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){

        block_object = Img;
        block_object.scaleToWidth(block_width); 
        block_object.scaleToHeight(block_heigth);
        block_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(block_object);
        
    })
}

window.addEventListener("keydown",my_keyDown);

function my_keyDown(e){

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == '80')
    {

        console.log("p and shift key pressed together");

        block_width = block_width + 10;
        block_heigth = block_heigth + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_heigth").innerHTML = block_heigth;
    }
    
    if (e.shiftKey == true && keyPressed == '77')
    {

        console.log("m and shift key pressed together");

        block_width = block_width - 10;
        block_heigth = block_heigth - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_heigth").innerHTML = block_heigth;
    }

        if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
        if(keyPressed == '87')
		{
			new_image('wall.jpg');
			console.log("w");
		}
        if(keyPressed == '71')
		{
			new_image('ground.png');
			console.log("g");
		}
        if(keyPressed == '76')
		{
			new_image('light_green.png');
			console.log("l");
		}
        if(keyPressed == '84')
		{
			new_image('trunk.jpg');
			console.log("t");
		}
        if(keyPressed == '82')
		{
			new_image('roof.jpg');
			console.log("r");
		}
        if(keyPressed == '89')
		{
			new_image('yellow_wall.png');
			console.log("y");
		}
        if(keyPressed == '68')
		{
			new_image('dark_green.png');
			console.log("d");
		}
        if(keyPressed == '85')
		{
			new_image('unique.png');
			console.log("u");
		}
        if(keyPressed == '67')
		{
			new_image('cloud.jpg');
			console.log("c");
		}
}

function up()
{

	if (player_y > 0)
	{
		player_y = player_y - 10;
		console.log("block image height = " + block_heigth);
		console.log("when up arrow key is pressed x = " + player_x + " y = " + player_y);
		canvas.remove(player_object);
		player_update();

	}
}

function down()
{

	if (player_y <= 500)
	{
		player_y = player_y + 10;
		console.log("block image height = " + block_heigth);
		console.log("when down arrow key is pressed x = " + player_x + " y = " + player_y);
		canvas.remove(player_object);
		player_update();

	}
}
function left()
{

	if (player_x > 0)
	{
		player_x = player_x - 10;
		console.log("block image width = " + block_width);
		console.log("when left arrow key is pressed x = " + player_x + " y = " + player_y);
		canvas.remove(player_object);
		player_update();

	}
}

function right()
{

	if (player_x <= 850)
	{
		player_x = player_x + 10;
		console.log("block image width = " + block_width);
		console.log("when right arrow key is pressed x = " + player_x + " y = " + player_y);
		canvas.remove(player_object);
		player_update();

	}
}