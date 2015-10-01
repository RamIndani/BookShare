/**
 * 
 */
//delete book
function deletebook(bookId,name){
	if (confirm('Are you sure you want to delete book '+name+' ?')) {
		event.preventDefault();
		$.ajax({
			url : "/book/"+bookId,
			type : "DELETE",
			contentType : "application/json",
			success: function(result) {
				window.location.reload();
			},
			failure : function(result) {
				console.log(result);
				alert("Some unexpected error occurred, Please try later");
			}
		}).error(function(status, result, xhr){
			alert(JSON.parse(status.responseText).message);
		});
	} else {
	    // Do nothing!
	}

}

function deletebookConfirm(bookId,name){
$("#deletebook").html(
		$("#deleteBookTemplate").render({bookId:bookId},{name:name})
		);

 $('#deletebook').modal('show');
}


$(function() {
    $('#changeMajorSave').click(function(event) {
			console.log("validation successful");
				event.preventDefault();
				$.ajax({
					url : "/user",
					data :  "{\"major\":\""+document.getElementById("changemjorchoice").value+"\",\"email\":\""+getStoredUserInfo().email+"\"}",
					type : "PUT",
					contentType : "application/json",
					success: function(result) {
						window.location.reload();
					},
					failure : function(result) {
						console.log(result);
						alert("Some unexpected error occurred, Please try later");
					}
				}).error(function(status, result, xhr){
					alert(JSON.parse(status.responseText).message);
				}); 
    	});
});


$(function() {
    $('#changePasswordbutton').click(function(event) {
			console.log("validation successful");
				event.preventDefault();
				$.ajax({
					url : "/user/"+getStoredUserInfo().email+"/passwordreset?old="+document.getElementById("oldpassword").value+"&confirm="+document.getElementById("confirmpassword").value+"&new="+document.getElementById("newpassword").value,
					type : "POST",
					contentType : "application/json",
					success: function(result) {
						clearStoredUserInfo();
					    window.location.replace("/");
					},
					failure : function(result) {
						console.log(result);
						alert("Some unexpected error occurred, Please try later");
					}
				}).error(function(status, result, xhr){
					alert(JSON.parse(status.responseText).message);
				}); 
    	});
});



$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
//add book api
$(function() {
    $('#addbook').click(function(event) {
    	if(!this.checkValidity())
    		{
    			console.log("failed in validation");
  				event.preventDefault();
				return false;
			} else {
			console.log("validation successful");
				event.preventDefault();
    			$.ajax({
    				url : "/user/"+getStoredUserInfo().email+"/book",
    				data :  JSON.stringify($('#addbookform').serializeObject()),
    				type : "POST",
    				contentType : "application/json",
    				success: function(result) {
    					window.location.reload();
    				},
    				failure : function(result) {
    					console.log(result);
    					alert("Some unexpected error occurred, Please try later");
    				}
    			}).error(function(status, result, xhr){
    				alert(JSON.parse(status.responseText).message);
    			});
    		}  
    	});
});


//signup handing
$(function() {
    $('#createnew').click(function(event) {
    	if(!this.checkValidity())
    		{
    			console.log("failed in validation");
  				event.preventDefault();
				return false;
			} else {
			console.log("validation successful");
				event.preventDefault();
    			$.ajax({
    				url : "/"+$( '#createnewform' ).attr( 'action' ),
    				data :  JSON.stringify($('#createnewform').serializeObject()),
    				type : "POST",
    				contentType : "application/json",
    				success: function(result) {
    					window.location.replace("/");
    				},
    				failure : function(result) {
    					console.log(result);
    					alert("Some unexpected error occurred, Please try later");
    				}
    			}).error(function(status, result, xhr){
    				alert(JSON.parse(status.responseText).message);
    			});
    		}  
    	});
});

//logout
function logout(){
	$.ajax({
		url : "/logout",
		data : getStoredUserInfo(),
		type : "POST",
		success: function(result) {
			var resultObj = JSON.parse(result);
			if(resultObj.success == "true") {
				clearStoredUserInfo();
			    window.location.replace("/");
			} else {
				clearStoredUserInfo();
			    window.location.replace("/");
			}
		},
		failure : function(result) {
			clearStoredUserInfo();
		    window.location.replace("/");
		},
		error: function(jqXHR, exception) {
			clearStoredUserInfo();
		    window.location.replace("/");
        }
	}).error(function(status, result, xhr){
		alert(JSON.parse(status.responseText).message);
	});
}  
    
//request book
$(function() {
    $('#requestnewbook').click(function(event) {
    	if(!this.checkValidity())
    		{
    			console.log("failed in validation");
  				event.preventDefault();
				return false;
			} else {
			console.log("validation successful");
				event.preventDefault();
    			$.ajax({
    				url : "/user/"+getStoredUserInfo().email+"/book/request",
    				data :  JSON.stringify($('#requestnewbookform').serializeObject()),
    				type : "POST",
    				contentType : "application/json",
    				success: function(result) {
    					location.reload();
    				},
    				failure : function(result) {
    					console.log(result);
    					alert("Some unexpected error occurred, Please try later");
    				}
    			}).error(function(status, result, xhr){
    				alert(JSON.parse(status.responseText).message);
    			});
    		}  
    	});
});

//login handling

$(function() {
    $('#login').click(function(event) {
    	if(!this.checkValidity())
    		{
    			console.log("failed in validation");
  				event.preventDefault();
				return false;
			} else {
			console.log("validation successful");
				event.preventDefault();
    			$.ajax({
    				url : "/"+$( '#loginform' ).attr( 'action' ),
    				data :  JSON.stringify($('#loginform').serializeObject()),
    				type : "POST",
    				contentType : "application/json",
    				success: function(result) {
    					console.log(result);
    					var resultObj = JSON.parse(result);
    					if(resultObj.success == "true") {
    						storeUserInfo(resultObj.token, resultObj.email);
    						window.location.replace("/home");
    					} else {
    						alert("Invalid login details");
    					}
    				},
    				failure : function(result) {
    					console.log("login failed");
    					
    					alert("Some unexpected error occurred, Please try later");
    				},
    				error: function(jqXHR, exception) {
    		            if (jqXHR.status === 401) {
    		            	console.log(jqXHR);
    		                location.href="/?error_message=Invalid username or password!";
    		            } else if(jqXHR.status === 400){
    		            	location.href="/?error_message=User disabled contact admin";
    		            }else {
    		                alert('Error Logging in try again');
    		            }
    		        }
    			}).error(function(status, result, xhr){
    				alert(JSON.parse(status.responseText).message);
    			});
    		}  
    	});
});


//purchase book 
function purchase_book(bookId) {
	var email = getStoredUserInfo().email;
	console.log(getStoredUserInfo().email);
	$.ajax({
		url : "/user/"+email+"/book/"+bookId,
		//data :  getStoredUserInfo(),
		type : "POST",
		success: function(result) {
			 window.location.replace("/home");
		},
		failure : function(result) {
			console.log(result);
			alert("Some unexpected error occurred, Please try later");
		}
	}).error(function(status, result, xhr){
		alert(JSON.parse(status.responseText).message);
	});

}



//price offer 
function price_offer(bookId) {
	var email = getStoredUserInfo().email;
	$.ajax({
		url : "/user/"+email+"/book/"+bookId+"/"+document.getElementById("offer_price").value,
		//data :  getStoredUserInfo(),
		type : "POST",
		success: function(result) {
			 window.location.replace("/home");
		},
		failure : function(result) {
			console.log(result);
			alert("Some unexpected error occurred, Please try later");
		}
	}).error(function(status, result, xhr){
		alert(JSON.parse(status.responseText).message);
	});

}

function validate_login() {

	$.ajax({
		url : "/getuser",
		data :  getStoredUserInfo(),
		type : "POST",
		success: function(result) {
			$("#profile").html(
					$("#profileTemplate").render(result)
					);
		},
		failure : function(result) {
			console.log(result);
			alert("Some unexpected error occurred, Please try later");
		}
	}).error(function(status, result, xhr){
		alert(JSON.parse(status.responseText).message);
	});

}
function ratesellermodel(seller){
	console.log("seller rate model");
	$("#rateseller").html(
			$("#rateseller_template").render({seller:seller})
			);
	
	 $('#rateseller').modal('show');
}


//display model range
function updateTextInput(val) {
    document.getElementById('textInput').innerHTML="$"+val; 
  }

function load_model(bookId){
	$("#make_an_offer").html(
			$("#make_an_offer_template").render({bookId:bookId})
			);
	
	 $('#make_an_offer').modal('show');
}


function rate(seller) {
	console.log(seller);
	var email = getStoredUserInfo().email;
	$.ajax({
		url : "/user/"+email+"/rate/"+seller+"/"+document.getElementById("sellerrating").value+"?comment="+document.getElementById("comment").value,
		type : "POST",
		success: function(result) {
			window.location.replace("/mybooks");
		},
		failure : function(result) {
			console.log(result);
			alert("Some unexpected error occurred, Please try later");
		}
	}).error(function(status, result, xhr){
		alert(JSON.parse(status.responseText).message);
	});
}



//disable account 
function disable_account(){
	console.log("validation successful");
					event.preventDefault();
	    			$.ajax({
	    				url : "/user/"+getStoredUserInfo().email+"/false",
	    				//data :  JSON.stringify($('#searchForm').serializeObject()),
	    				type : "GET",
	    				contentType : "application/json",
	    				success: function(result) {
	    					clearStoredUserInfo();
						    window.location.replace("/");
	    				},
	    				failure : function(result) {
	    					console.log(result);
	    					alert("Some unexpected error occurred, Please try later");
	    				}
	    			}).error(function(status, result, xhr){
	    				alert(JSON.parse(status.responseText).message);
	    			});
	    		}  

//search book
$(function() {
	    $('#search').click(function(event) {
	    	if(!this.checkValidity())
	    		{
	    			console.log("failed in validation");
	  				event.preventDefault();
					return false;
				} else {
				console.log("validation successful");
					event.preventDefault();
	    			$.ajax({
	    				url : "/book/"+document.getElementById("searchString").value,
	    				//data :  JSON.stringify($('#searchForm').serializeObject()),
	    				type : "GET",
	    				contentType : "application/json",
	    				success: function(result) {
	    					$("#books").html(
	    							$("#booksTemplate").render(result)
	    							);
	    				},
	    				failure : function(result) {
	    					console.log(result);
	    					alert("Some unexpected error occurred, Please try later");
	    				}
	    			}).error(function(status, result, xhr){
	    				alert(JSON.parse(status.responseText).message);
	    			});
	    		}  
	    	});
	});


function get_books() {
	$.ajax({
		url : "/book",
		data :  getStoredUserInfo(),
		type : "GET",
		success: function(result) {
			$("#books").html(
					$("#booksTemplate").render(result)
					);
		},
		failure : function(result) {
			console.log(result);
			alert("Some unexpected error occurred, Please try later");
		}
	}).error(function(status, result, xhr){
		alert(JSON.parse(status.responseText).message);
	});
}


function get_mybooks() {
	$.ajax({
		url : "/user/"+getStoredUserInfo().email+"/book",
		//data :  getStoredUserInfo(),
		type : "GET",
		success: function(result) {
			$("#mybooks").html(
					$("#mybooksTemplate").render(result)
					);
		},
		failure : function(result) {
			console.log(result);
			alert("Some unexpected error occurred, Please try later");
		}
	}).error(function(status, result, xhr){
		alert(JSON.parse(status.responseText).message);
	});
}
function supportsLocalStorage()
{
	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} 
	catch (e)  {
		return false;
	}
}

function storeUserInfo(token, email)
{
	if(supportsLocalStorage()) {
		localStorage.setItem("token", token);
		localStorage.setItem("email", email);
	}
	else {
		console.log("Browser doesn't support local storage");
	}
}

function getStoredUserInfo()
{
	if(supportsLocalStorage()) {
		return {
			"token": localStorage.getItem("token"),
			"email": localStorage.getItem("email")}
	} else {
		console.log("Browser doesn't support local storage");
	}
}

function clearStoredUserInfo()
{
	if(supportsLocalStorage()) {
		localStorage.removeItem("token");
		localStorage.removeItem("email");
	} else {
		console.log("Browser doesn't support local storage");
	}
}

//list purchased book
function purchased_books(){

	$.ajax({
		url : "user/"+getStoredUserInfo().email+"/purchasedBook",
		//data :  getStoredUserInfo(),
		type : "GET",
		success: function(result) {
			$("#mybooks").html(
					$("#purchasedBooksTemplate").render(result)
					);
		},
		failure : function(result) {
			console.log(result);
			alert("Some unexpected error occurred, Please try later");
		}
	}).error(function(status, result, xhr){
		alert(JSON.parse(status.responseText).message);
	});

}

//list offered books
function offered_books(){

	$.ajax({
		url : "/user/"+getStoredUserInfo().email+"/offerTo",
		//data :  getStoredUserInfo(),
		type : "GET",
		success: function(result) {
			$("#mybooks").html(
					$("#offeredBooksTemplate").render(result)
					);
		},
		failure : function(result) {
			console.log(result);
			alert("Some unexpected error occurred, Please try later");
		}
	}).error(function(status, result, xhr){
		alert(JSON.parse(status.responseText).message);
	});

}


//list requested books
function requested_books() {

	$.ajax({
		url : "user/"+getStoredUserInfo().email+"/requestedBook/",
		//data :  getStoredUserInfo(),
		type : "GET",
		success: function(result) {
			$("#mybooks").html(
					$("#requestedBooksTemplate").render(result)
					);
		},
		failure : function(result) {
			console.log(result);
			alert("Some unexpected error occurred, Please try later");
		}
	}).error(function(status, result, xhr){
		alert(JSON.parse(status.responseText).message);
	});

}

//list sold books
function sold_books() {

	$.ajax({
		url : "/user/"+getStoredUserInfo().email+"/soldBook",
	//	data :  getStoredUserInfo(),
		type : "GET",
		success: function(result) {
			$("#mybooks").html(
					$("#soldBooksTemplate").render(result)
					);
		},
		failure : function(result) {
			console.log(result);
			alert("Some unexpected error occurred, Please try later");
		}
	}).error(function(status, result, xhr){
		alert(JSON.parse(status.responseText).message);
	});

}


function offers_byme_books() {
	$.ajax({
		url : "/user/"+getStoredUserInfo().email+"/offerFrom",
	//	data :  getStoredUserInfo(),
		type : "GET",
		success: function(result) {
			$("#mybooks").html(
					$("#offeredByMeBooksTemplate").render(result)
					);
		},
		failure : function(result) {
			console.log(result);
			alert("Some unexpected error occurred, Please try later");
		}
	}).error(function(status, result, xhr){
		alert(JSON.parse(status.responseText).message);
	});
}
