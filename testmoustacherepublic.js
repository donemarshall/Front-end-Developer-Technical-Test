


$value = undefined;
$productID = undefined;


    $( ".product-sizes label" ).click(function() {
        $productID = $(this).parent().find('input').attr('value');
		$value = $(this).parent().find('input').attr('id');
        $('.selected').toggleClass('selected');
		$(this).toggleClass('selected');
		$('.selected-product-size').text($(this).text());
		$(".error").text("");
    });
    function checkCookie() {
  		var cookies = document.cookie;
 		if (cookies != "") {
    		$("#contents").html(document.cookie);
    		var item = $("#contents").text().split(";");
    		var itemtotal = $("#contents").text().split(";");
			$("#contents").empty();
			$.each(item, function(i, v) {
    			$("#contents").append($("<div class='cart-item'>").text(v+'x $75.00'));
			});
			$(".cart-item").each(function() {
				$(this).html(function (i, html) {
        			return html.replace("=", ' <br>')
    			});
    			$(this).html(function (i, html) {
        			return html.replace("_", ' ')
    			});
    			$(this).html(function (i, html) {
        			return html.replace("-", '<br>Size: ')
    			});
			});

  		} else {
    		$("#contents").html($("<div class='cart-item'>").text('Your cart is empty'));
    	}
    }
    function getCookie() {
  		var name = $productID + "-" + $value + "=";
  		var decodedCookie = decodeURIComponent(document.cookie);
  		var ca = decodedCookie.split(';');
  		for(var i = 0; i <ca.length; i++) {
    		var c = ca[i];
    		while (c.charAt(0) == ' ') {
      			c = c.substring(1);
    		}
    		if (c.indexOf(name) == 0) {
      			return c.substring(name.length, c.length);
    		}
  		}
  		return "";
	}
    function setCookie() {
            if ($value == undefined) {
            $('.error').html('<i class="fas fa-arrow-left"></i>'+" Please select a size.");
        } else if (document.cookie.includes($productID + "-" + $value + "=")) {
        	document.cookie = $productID + "-" + $value + "=" + (parseInt(getCookie())+1) + ";";
        	alert( "added");
        } else {
            document.cookie = $productID + "-" + $value + "=" + 1 + ";";
            alert( "added");
        }
        $( ".product-sizes label" ).each(function() {
        	$(this).removeClass("selected");
        });
        $( ".product-sizes input" ).each(function() {
        	$(this).attr("checked", false);
        });
        $('.selected-product-size').text("");
        $value = undefined;
		$productID = undefined;
		checkCookie();
    }
checkCookie();

