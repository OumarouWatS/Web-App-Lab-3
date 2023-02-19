
var prev_x="0"; 
			
function display_desc(x)
{
	//alert(x);
	document.getElementById(x).style.display="block";
	document.getElementById(prev_x).style.display="none";
	if(prev_x == x)
		prev_x='0';
	else
		prev_x = x;
				
}

function addToCart(x)
{
	document.getElementById("mycart").innerHTML+="<br>"+x;
}
	
function popupfunction(x)
{
	 document.getElementById('popup'+x).style.display='block';
	 document.getElementById('fade'+x).style.display='block';
}

function popupclose(x)
{
	document.getElementById('popup'+x).style.display='none';
	document.getElementById('fade'+x).style.display='none';
}

