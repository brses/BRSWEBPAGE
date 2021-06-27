		var httpObject = null;
	
		var base_url = "https://www.brses.com.np";

		function getHTTPObject() {
		    if (window.ActiveXObject) {
		        return new ActiveXObject("Microsoft.XMLHTTP");
		    } else if (window.XMLHttpRequest) {
		        return new XMLHttpRequest();
		    } else {
		        alert("Your browser does not support AJAX.");
		        return null;
		    }
		}

		
		

		

	


		

		

	

		