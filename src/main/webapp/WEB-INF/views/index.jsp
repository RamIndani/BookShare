<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
<script type="text/javascript" src="resources/js/bootstrap.js"></script>
<script type="text/javascript" src="resources/js/BookShare.js"></script>
</head>
<body class="content">
	<nav class="navbar">
  		<div class="container-fluid">
  			<div class="navbar-header">
      			<a class="navbar-brand" href="#">
      				<h3 class="brand"><b>BookShare!</b></h3>
      			</a>
    		</div>
  		  	<ul class="nav navbar-nav">
				<!--<li class="navbar-text">
					<p class="navbar-text">
						<a href="#">Home</a>
					</p>
				</li>-->
				<li class="navbar-text">
					<p class="navbar-text">
						<a href="#" data-toggle="modal" data-target="#myModal">Sign Up</a>
					</p>
				</li>
			</ul>
  		</div>
	</nav>

<div class="login col-md-6">
	<form action="login" method="post" id="loginform">      
      <label>Email ID</label><br/>
      <input type="email" class="form-control col-md-4" name="email" placeholder="Email ID">
      <br/><br/>
      <label>Password</label><br/>
      <input type="password" class="form-control col-md-4" name="password" placeholder="Password">
      <label class="error">${error_message}</label><br/>
      <button type="button" class="btn btn-warning loginbutton" value="Login" id="login">Login</button>
    </form>
</div>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">BookShare! Sign Up</h4>
      </div>
      <div class="modal-body">
          <form action="signup" id="createnewform">      
            <label>Email ID</label><br/>
            <input type="email" name="email" class="form-control col-md-4" placeholder="Email ID">
            <br/><br/>
            <label>Password</label><br/>
            <input type="password" name="password" class="form-control col-md-4" placeholder="Password">
            <br/><br/>
             <label>First Name</label><br/>
            <input type="text" name="firstName" class="form-control col-md-4" placeholder="First Name">
            <br/><br/>
             <label>Last Name</label><br/>
            <input type="text" name="lastName" class="form-control col-md-4" placeholder="Last Name">
            <br/><br/>
            <label>Major</label><br/>
           <select name="major">
           <option>Computer Science</option>
           <option>Software Engineering</option>
           <option>Electrical Engineering</option>
           <option>Engineering Management</option>
           </select>
            <br/><br/>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" id="createnew">Sign Up</button>
      </div>
    </div>
  </div>
</div>
</body>
</html>