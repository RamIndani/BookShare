<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<title>BookShare!</title>
<link rel="stylesheet" href="resources/css/bootstrap.css"></link>
<link rel="stylesheet" href="resources/css/bookshare.css"></link>
<script type="text/javascript" src="resources/js/jquery.js"></script>
<script type="text/javascript" src="resources/js/jsrender.js"></script>
<script type="text/javascript" src="resources/js/bootstrap.js"></script>
</head>
<body class="content" onload="javascript:validate_login();">
	<nav class="navbar">
  		<div class="container-fluid">
  			<div class="navbar-header">
      			<a class="navbar-brand" href="#">
      				<h3 class="brand"><b>BookShare!</b></h3>
      			</a>
    		</div>
  		  	<ul class="nav navbar-nav">
				<li class="navbar-text">
					<p class="navbar-text">
						<a href="#">Home</a>
					</p>
				</li>
				<li class="navbar-text">
					<p class="navbar-text">
						<a href="#" data-toggle="modal" data-target="#profile">Profile</a>
					</p>
				</li>
        <li class="navbar-text">
          <p class="navbar-text">
            <a href="#" data-toggle="modal" data-target="#addEntry">Add Entry</a>
          </p>
        </li>
        <li class="navbar-text">
          <p class="navbar-text">
            <a href="mybooks">My Books</a>
          </p>
        </li>
		</ul>
		 <ul class="nav navbar-nav navbar-right">
			<li class="navbar-text navbar-right">
         		<p class="navbar-text">
           			<a href="javascript:logout();">Logout</a>
         		</p>
        	</li>
		</ul>
  		</div>
	</nav>


	<form class="searchbook" action="/book" method="GET" id="searchForm">
        <div class="row">
         <div class="col-md-8"> <input type="text" name="searchString" id="searchString" class="form-control" placeholder="Search Book by Name/ISBN/Author">
         </div>
         <button type="submit" id="search" class="btn btn-search"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
        </div>
    </form>

	<div class="row booksgrid" id="books">
	</div>
	
	<script id="booksTemplate" type="text/x-jsrender">
  			<div class="col-md-1 indibook">
  				<p>
  					Name : <b>{{:name}}</b><br/>
  					<img default="Book" src="resources/img/books.png" width="20%"></img>
  					<p>
  						Price : {{:price}}<br/>
  						Condition : {{:condition}}<br/>
  						Seller  : {{:seller}}<br/>
  					</p>
  					<form action="javascript:purchase_book({{:bookId}});">
  						<input type="hidden" value="book1" name="bookid"></input>
  						<input type="submit" value="Buy" class="btn btn-success"></input>
						<input type="button" value="Make-An-Offer" onclick="load_model({{:bookId}})" class="btn btn-warning"></input>
  					</form>
  				</p>
  			</div>
		</script>
	<div class="footer">
		<b> All Rights Reserved BookShare!</b>
	</div>

<!-- Make an offer model -->
<div class="modal fade" id="make_an_offer" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"></div>
<script id="make_an_offer_template" type="text/x-jsrender">
<div class="modal-dialog">
<div class="modal-content">
	<div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Make an offer!</h4>
      </div>
		<div class="modal-body">
			<form action="priceOffer" method="POST">
				<label>Your offer:</label><br/>
				<input type="range" max="30" min="1" name="offerPrice" id="offer_price" onchange="updateTextInput(this.value);"></input>
				<label>Value:</label><br/>
				<label id="textInput"></label>
			</form>
		</div>
		<div class="modal-footer">
			 <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		<button type="submit" class="btn btn-default" data-toggle="modal" onclick="javascript:price_offer({{:bookId}});">Send</button>
		</div>
	</div>
</div>
</script>


<!-- Modal -->
<div class="modal fade" id="profile" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"></div>
<script id="profileTemplate" type="text/x-jsrender">
<div>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">BookShare! Profile</h4>
      </div>
      <div class="modal-body">
          <form action="#">      
            <label>Email ID </label>: {{>email}}
            <br/>
            <label>Name : </label>{{>firstName}} {{>lastName}}
			<br/>
			  <label>Major : </label>{{>major}}
            <br/><br/>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		<button type="button" class="btn btn-default" data-toggle="modal" data-target="#changeMajor">Change Major</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#changePassword">Change Password</button>
		<button type="button" class="btn btn-warning" onclick="javascript:disable_account();" id="#disable_account">Disable Account</button>
      </div>
    </div>
  </div>
</div>
</script>


<!-- Modal change major -->
<div class="modal fade" id="changeMajor" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">BookShare! Profile</h4>
      </div>
      <div class="modal-body">
          <form action="#" id="changeMajorForm">      
           <select name="major" required id="changemjorchoice">
           <option>Computer Science</option>
           <option>Software Engineering</option>
           <option>Electrical Engineering</option>
           <option>Engineering Management</option>
           </select>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-dismiss="modal" id="changeMajorSave">Save</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal profile-->


<div class="modal fade" id="changePassword" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">BookShare! Profile</h4>
      </div>
      <div class="modal-body">
          <form action="#" id="changePasswordForm">      
            <label>Current Password</label><br/>
            <input type="password" required id ="oldpassword" name="old" class="form-control col-md-4" required placeholder="Current Password">
            <br/><br/>
            <label>New Password</label><br/>
            <input type="password" required id="newpassword" name="new" class="form-control col-md-4" required placeholder="New Password">
            <br/><br/>
            <label>Confirm Password</label><br/>
            <input type="password" required id="confirmpassword" name="confirm" class="form-control col-md-4" required placeholder="Confirm Password">
            <br/><br/>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-dismiss="modal" id="changePasswordbutton">Change Password</button>
      </div>
    </div>
  </div>
</div>





<!-- Modal addEntry-->
<div class="modal fade" id="addEntry" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">BookShare! Add New Book</h4>
      </div>
      <div class="modal-body">
           <form action="#" id="addbookform">      
            <label>Book Title</label><br/>
            <input type="text" name="name" required="required" class="form-control col-md-4" placeholder="Book Title">
            <br/><br/>
            <label>Author</label><br/>
            <input type="text" name="author" required class="form-control col-md-4" placeholder="Author">
            <br/><br/>
            <label>ISBN</label><br/>
            <input type="text" name="isbn" required class="form-control col-md-4" placeholder="Book ISBN">
            <br/><br/>
            <label>Price</label><br/>
            <input type="number" name="price" required class="form-control col-md-4" placeholder="Book price">
            <br/><br/>
            <label>Condition</label><br/>
            <input type="text" name="condition" required class="form-control col-md-4" placeholder="New/Old">
            <br/><br/>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" id="addbook">Save</button>
      </div>
    </div>
  </div>
</div>



<script type="text/javascript" src="resources/js/BookShare.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	get_books();
});
</script>
</body>
</html>