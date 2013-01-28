
function createCookie(name, value, expiredays)
{
	var todayDate = new Date();
	// A variable todaydate of type date is created using the date() function.
	todayDate.setDate(todayDate.getDate() + expiredays);
	// Its value is set using setdate which sets the value to be the current date plus how many days it must last.
	document.cookie = name + "=" + value + "; expires=" + todayDate.toGMTString() + ";"
	// The cookie is created using document with contents of name, value and expire days.
	
}

function PrintCookies() {
				// Create an array of cookies by spliting them ";"
				var individualCookies = document.cookie.split(';');
				var temp3=0;
				document.write("<p class = 'special_p'>");

				for (var i = 0; i < individualCookies.length; i++){
					// this for loop will loop through each cookie and create another var array one cookie which will
					// which have three elements, it's name, value and expire days. We are only interested in the name & value.
					// So a new variable name is assigned to oneCookie[0] and value to [1].
					var oneCookie = individualCookies[i].split("=");
					var name =  oneCookie[0];
					var value = oneCookie[1];
					
					
					// This is standard code for removing excess white space
					name = name.replace(/^\s+|\s+$/g, '') ;
					document.write("<ul>");
					// A Series of if else statements which execute by evaluating the name variable.
					if(name=='History of Boxing'){
						var temp= 7;
						var temp2= temp*value;
						//insRow(name,value,temp2);
						document.write("<li class='special_p'>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
						//document.write("<li><input type="button" value="Delete Item" onclick="deleteCookie(History of Boxing);window.location.href=window.location.href;"/></li>")
						var radioInput1 = document.createElement("input");
						radioInput1.setAttribute("type", "button");
						radioInput1.setAttribute("value", "Delete History of Boxing");
						radioInput1.setAttribute("onclick","javascript:deleteCookie('History of Boxing');window.location.href=window.location.href");
						var foo = document.getElementById("fox");
						//document.body.insertBefore(radioInput1,fox);
						foo.appendChild(radioInput1);
						//If the name evaluates to the above item, then the code jumps inside this "if" statement. Temp is assigned the price of the book.
						//Temp 2 is assigned the price multiplied by the number of copies. I then write the name, no of copies, price and total to screen using
						//document.write. I then create a button which when clicked will delete the cookie and refresh the page, thereby eliminating that
						//that item from the page. I do this by creating a input element and assign to a new variable radioInput(number 1-4, depending on which
						//cookie). The onclick attribute will call two functions: deleteCookie and window.location. This new element is appended to the
						//"fox" element which is a <p> element in the html page.
						
					}
						
					else if(name=='Future of Boxing'){
						var temp= 8;
						var temp2= temp*value;
						document.write("<li class='special_p'>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
						var radioInput2 = document.createElement("input");
						radioInput2.setAttribute("type", "button");
						radioInput2.setAttribute("value", "Delete Future of Boxing");
						radioInput2.setAttribute("onclick","javascript:deleteCookie('Future of Boxing');window.location.href=window.location.href;");
						//document.body.insertBefore(radioInput2,fox);
						var foo = document.getElementById("fox");
						foo.appendChild(radioInput2);
						//If the name evaluates to the above item, then the code jumps inside this "if" statement. Temp is assigned the price of the book.
						//Temp 2 is assigned the price multiplied by the number of copies. I then write the name, no of copies, price and total to screen using
						//document.write. I then create a button which when clicked will delete the cookie and refresh the page, thereby eliminating that
						//that item from the page. I do this by creating a input element and assign to a new variable radioInput(number 1-4, depending on which
						//cookie). The onclick attribute will call two functions: deleteCookie and window.location. This new element is appended to the
						//"fox" element which is a <p> element in the html page.
					}
						
					else if(name=='History of TaeKwondo'){
						var temp= 9;
						var temp2= temp*value;
						document.write("<li class='special_p'>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
						var radioInput3 = document.createElement("input");
						radioInput3.setAttribute("type", "button");
						radioInput3.setAttribute("value", "Delete History of TaeKwondo");
						radioInput3.setAttribute("onclick","javascript:deleteCookie('History of TaeKwondo');window.location.href=window.location.href;");
						//document.body.insertBefore(radioInput3,fox);
						var foo = document.getElementById("fox");
						foo.appendChild(radioInput3);
						//If the name evaluates to the above item, then the code jumps inside this "if" statement. Temp is assigned the price of the book.
						//Temp 2 is assigned the price multiplied by the number of copies. I then write the name, no of copies, price and total to screen using
						//document.write. I then create a button which when clicked will delete the cookie and refresh the page, thereby eliminating that
						//that item from the page. I do this by creating a input element and assign to a new variable radioInput(number 1-4, depending on which
						//cookie). The onclick attribute will call two functions: deleteCookie and window.location. This new element is appended to the
						//"fox" element which is a <p> element in the html page.
					}	
					else if(name=='Future of TaeKwondo'){
						var temp= 10;
						var temp2= temp*value;
						document.write("<li class='special_p'>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
						var radioInput4 = document.createElement("input");
						radioInput4.setAttribute("type", "button");
						radioInput4.setAttribute("value", "Delete Future of TaeKwondo");
						radioInput4.setAttribute("onclick","javascript:deleteCookie('Future of TaeKwondo');window.location.href=window.location.href;");
						//document.body.insertBefore(radioInput4,fox);
						var foo = document.getElementById("fox");
						foo.appendChild(radioInput4);
						//If the name evaluates to the above item, then the code jumps inside this "if" statement. Temp is assigned the price of the book.
						//Temp 2 is assigned the price multiplied by the number of copies. I then write the name, no of copies, price and total to screen using
						//document.write. I then create a button which when clicked will delete the cookie and refresh the page, thereby eliminating that
						//that item from the page. I do this by creating a input element and assign to a new variable radioInput(number 1-4, depending on which
						//cookie). The onclick attribute will call two functions: deleteCookie and window.location. This new element is appended to the
						//"fox" element which is a <p> element in the html page.
					}
					document.write("</ul>");
					temp3 += temp2;
					//On each iteration of the for loop i add temp2(total of each item, i.e. price*value) to temp3 which stores the total bill for
					//all items.
				}
				document.write("<p class='special_p'>Grand total = "+temp3+" Euros</p>");
				document.write("</p>");
				//After i exit the for loop i print the total bill with document.write.
				
			}



function deleteCookie(name) {
				document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
				//In order to delete the cookie i change the expiration date to 01/01/170.
			}

function Bill() {
				// Create an array of cookies by spliting them ";"
				var individualCookies = document.cookie.split(';');
				var temp3=0;
				//document.write("<p class = 'special_p'>");
		
				for (var i = 0; i < individualCookies.length; i++){
					
					var oneCookie = individualCookies[i].split("=");
					var name =  oneCookie[0];
					var value = oneCookie[1];
					// this for loop will loop through each cookie and create another var array one cookie which will
					// which have three elements, it's name, value and expire days. We are only interested in the name & value.
					// So a new variable name is assigned to oneCookie[0] and value to [1].
					
					// This is standard code for removing excess white space
					name = name.replace(/^\s+|\s+$/g, '') ;
					//document.write("<ul>");
					//document.write("<ul>");
					// A Series of if else statements which execute by evaluating the name variable.
					if(name=='History of Boxing'){
						var temp= 7;
						var temp2= temp*value;
						document.write("<input type = text name='History of Boxing' value='' id='hb1' size='100'/><br />");
						document.getElementById("hb1").value= name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros"
						//Create a input element(using document.write) assigning a name which corresponds to the cookie. Then i assign a id to it.
						//I then use document.getElementById to to dynamically change the value attribute of this element. Here i put in the
						// the name, no of coppies and totla cost again using name, value and temp2.
					}
						
					else if(name=='Future of Boxing'){
						var temp= 8;
						var temp2= temp*value;
						//document.write("<li>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
						document.write("<input type = text name='Future of Boxing' value='' id='fb1' size='100'/><br />");
						document.getElementById("fb1").value= name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros";
						//Create a input element(using document.write) assigning a name which corresponds to the cookie. Then i assign a id to it.
						//I then use document.getElementById to to dynamically change the value attribute of this element. Here i put in the
						// the name, no of coppies and totla cost again using name, value and temp2.
					}
						
					else if(name=='History of TaeKwondo'){
						var temp= 9;
						var temp2= temp*value;
						//document.write("<li>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
						document.write("<input type = text name='History of TaeKwondo' value='' id='ht1' size='100'/><br />");
						document.getElementById("ht1").value= name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros";
						//Create a input element(using document.write) assigning a name which corresponds to the cookie. Then i assign a id to it.
						//I then use document.getElementById to to dynamically change the value attribute of this element. Here i put in the
						// the name, no of coppies and totla cost again using name, value and temp2.
						
					}	
					else if(name=='Future of TaeKwondo'){
						var temp= 10;
						var temp2= temp*value;
						//document.write("<li>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
						document.write("<input type = text name='future of taeKwondo' value='' id='ft1' size='100'/><br />");
						document.getElementById("ft1").value= name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros";
						//Create a input element(using document.write) assigning a name which corresponds to the cookie. Then i assign a id to it.
						//I then use document.getElementById to to dynamically change the value attribute of this element. Here i put in the
						// the name, no of coppies and totla cost again using name, value and temp2.
					}
					//document.write("</ul>");
					temp3 += temp2;

					
					
				}
				document.write("<input type='text' name=BillTotal value='' id='gd1'/><br />");
				document.getElementById("gd1").value= "Grand total = "+temp3+" Euros";
				// I create another input element to display the total bill amount and manipulate it's value by using getElemnetById. Temp3 stores
				// the overall bill amount.
				// All these new input elements are assigned to the form which are included in the subsequent email.


			}
function Submit() {

				// The function is called from checkout.html and must return a value, either true or false.
				// It evalauates the lenght of the value of each element which is obtained by getElementbyId.
				if(document.getElementById("nameid").value.length == 0) { 
					//if zero, a alert box appears requesting the user to enter a name and returns false to the function call in checkout.html
					window.alert("You must enter a username");
					return false;
				}
				
				if(document.getElementById("mailid").value.length == 0) { 
					//if zero, a alert box appears requesting the user to enter a name and returns false to the function call in checkout.html
					window.alert("You must enter a email address");
					return false;
				}
				
				if(document.getElementById("townid").value.length == 0) { 
					//if zero, a alert box appears requesting the user to enter a town and returns false to the function call in checkout.html
					window.alert("You must enter a town");
					return false;
				}
				if(document.getElementById("Countryid").value.length == 0) { 
					//if zero, a alert box appears requesting the user to enter a country and returns false to the function call in checkout.html
					window.alert("You must enter a Country");
					return false;
				}
				if(document.getElementById("CreditCardNumber").value.length != 16) { 
					//if zero, a alert box appears requesting the user to enter a valid card  and returns false to the function call in checkout.html
					window.alert("You must enter a valid Credit Card Number!");
					return false;
				}
				return true;
			}
function checkCCNumber() {
				var cc = document.getElementById("CreditCardNumber");
				var valid = document.getElementById("cc_num");
				// this function helps the user in that a box is checked when a valid card is entered.
				if (cc.value.length != 16) {
					valid.checked = false;
					window.alert("You must enter a valid Credit Card Number!");
				}
				else {
					valid.checked = true;
				}
			}

			
//the functions listed below are funnctions which were used as possible solutions and the experience gained was later used in the actual functions
//as shown above.


 			
function ViewItems(){
				var myCookies = document.cookie.length;
				var individualCookies = document.cookie.split(';');
				for (var i = 0; i < individualCookies.length; i++)
				 {
					var oneCookie = individualCookies[i].split("=");
					var name =  oneCookie[0];
					var value = oneCookie[1];
					if(name == 'Future Of boxing')
					 {
						var temp= 7;
						var temp2= temp*value;
						document.write(name +"By David Flynn. No. of Copies: "+value+".Total cost = "+temp2);
					 }
				 
				 }
				document.write('test');

			}
function insRow(name,value,temp2)
			{
				var x=document.getElementById("myTable");
				var y=x.insertCell(0);
				//var z=x.insertCell(1);
				y.innerHTML= name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros";
				//z.innerHTML="NEW CELL2";
			}
function remove(id)
{
    return (elem=document.getElementById(id)).parentNode.removeChild(elem);
}
function GetTotal() {
				// Get the individual cookies, by splitting the cookie string
				// Individual cookies is now an array of all the name=value pairs
				var individualCookies = document.cookie.split(';');
				var temp3=0;
				//document.write("<p class = 'special_p'>");

				for (var i = 0; i < individualCookies.length; i++){
					// Loop through each of the cookies, and split them into
					// their name and value, as separate elements in the array
					var oneCookie = individualCookies[i].split("=");
					var name =  oneCookie[0];
					var value = oneCookie[1];
					
					
					// This is standard code for removing excess white space
					name = name.replace(/^\s+|\s+$/g, '') ;
					//document.write("<ul>");
					document.write("<ul>");
					if(name=='History of Boxing'){
						var temp= 7;
						var temp2= temp*value;
						document.write("<li class= 'special_p'>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
								
					}
						
					else if(name=='Future of Boxing'){
						var temp= 8;
						var temp2= temp*value;
						document.write("<li class= 'special_p'>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
					}
						
					else if(name=='History of TaeKwondo'){
						var temp= 9;
						var temp2= temp*value;
						document.write("<li class= 'special_p'>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
						
					}	
					else if(name=='Future of TaeKwondo'){
						var temp= 10;
						var temp2= temp*value;
						document.write("<li class= 'special_p'>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
						
					}
					document.write("</ul>");
					temp3 += temp2;
					//document.write("Grand total = "+temp3"):
					
				}
				document.write("<p class = 'special_p'>Total bill is "+temp3+" Euros</p>");
				//document.write("</p>");
				


			}
function ModifyForm()
	{
	 var s = document.getElementById("form1").Details;
	 s.setAttribute("value", "javascript:GetTotal();");
	 var Input1 = document.createElement("input");
	 Input1.setAttribute("type", "text");
	 Input1.setAttribute("name", "Details");
	 Input1.setAttribute("value","javascript:GetTotal();");
	 //document.body.insertBefore(radioInput1,fox);
	 s.appendChild(Input1);
	}
	 var optionNumber = 3; //The first option to be added is number 3 
        function addOption() { 
                var theForm = document.getElementById("myForm"); 
                var newOption = document.createElement("input"); 
                newOption.name = "poll[option"+optionNumber+"]"; // poll[optionX]
                newOption.type = "text";
				newOption.value=GetTotal();
                theForm.appendChild(newOption); 
                optionNumber++;
        } 
function Total() {
				// Get the individual cookies, by splitting the cookie string
				// Individual cookies is now an array of all the name=value pairs
				var individualCookies = document.cookie.split(';');
				var temp3=0;
				//document.write("<p class = 'special_p'>");

				for (var i = 0; i < individualCookies.length; i++){
					// Loop through each of the cookies, and split them into
					// their name and value, as separate elements in the array
					var oneCookie = individualCookies[i].split("=");
					var name =  oneCookie[0];
					var value = oneCookie[1];
					
					
					// This is standard code for removing excess white space
					name = name.replace(/^\s+|\s+$/g, '') ;
					//document.write("<ul>");
					//document.write("<ul>");
					if(name=='History of Boxing'){
						var temp= 7;
						var temp2= temp*value;
						//document.write("<li>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
								
					}
						
					else if(name=='Future of Boxing'){
						var temp= 8;
						var temp2= temp*value;
						//document.write("<li>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
					}
						
					else if(name=='History of TaeKwondo'){
						var temp= 9;
						var temp2= temp*value;
						//document.write("<li>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
						
					}	
					else if(name=='Future of TaeKwondo'){
						var temp= 10;
						var temp2= temp*value;
						//document.write("<li>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
						
					}
					document.write("</ul>");
					temp3 += temp2;

					//document.write("Grand total = "+temp3"):
					
				}
				//document.write("<p class = 'special_p'>Total bill is "+temp3+" Euros</p>");
				//document.write("</p>");
				


			}
function getTotal() {
    var mail = 'mailto:davidflynn12@hotmail.com';
    var individualCookies = document.cookie.split(';');
				var temp3=0;
				//document.write("<p class = 'special_p'>");

				for (var i = 0; i < individualCookies.length; i++){
					// Loop through each of the cookies, and split them into
					// their name and value, as separate elements in the array
					var oneCookie = individualCookies[i].split("=");
					var name =  oneCookie[0];
					var value = oneCookie[1];
					
					
					// This is standard code for removing excess white space
					name = name.replace(/^\s+|\s+$/g, '') ;
					//document.write("<ul>");
					//document.write("<ul>");
					if(name=='History of Boxing'){
						var temp= 7;
						var temp2= temp*value;
						mail = mail + '&body=temp3+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros"';
						//mail = mail + '&body="temp3"';
								
					}
						
					else if(name=='Future of Boxing'){
						var temp= 8;
						var temp2= temp*value;
						//document.write("<li>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
					}
						
					else if(name=='History of TaeKwondo'){
						var temp= 9;
						var temp2= temp*value;
						//document.write("<li>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
						
					}	
					else if(name=='Future of TaeKwondo'){
						var temp= 10;
						var temp2= temp*value;
						//document.write("<li>"+name +" By David Flynn. No. of Copies: "+value+".Total cost = "+temp2+"Euros</li>");
						
					}
				}
					//document.write("</ul>");
					temp3 += temp2;
	mail = mail + '?subject=subject';
    //mail = mail + '&body="temp3"';
    location.href = mail;
};
function setNameValue(){
    //var x = document.getElementById("test47.name").innerHTML;
	//x.value = "cookieValue";
	var ss = document.getElementsByTagName("form");
	dd = ss[1];
	dd[0].value="testnow";
	//y = x[0];
	//y.customer_contact="testnow";
}
function getCookie (name) {
    var dc = document.cookie;
    var cname = name + "=";

    if (dc.length > 0) {
      begin = dc.indexOf(cname);
      if (begin != -1) {
        begin += cname.length;
        end = dc.indexOf(";", begin);
        if (end == -1) end = dc.length;
        return unescape(dc.substring(begin, end));
        }
      }
    return null;
}
function test123(){
	document.getElementById("p1").innerHTML="New text!";
}
function test1234(){
	document.getElementById("nameid").value= "testvalue";
	document.write("Sale1:<br />");
	document.write("<input type='text' name='sale1' value='' id='sale1id'/><br />");
	var test = 34;
	document.getElementById("sale1id").value = "testvalue2"+test;
}

