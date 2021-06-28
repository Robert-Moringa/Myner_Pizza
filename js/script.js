//business logic
// function Order(name, total, delivery) {
//     this.orderName = name;
//     this.total = total;
//     this.delivery = delivery;
//   }
  
  
//   Order.prototype.wholeOrder = function() {
//     return this.orderName;
//   }
  



function total(){
    var name = document.getElementById("flavor").value;

    var price = parseInt(document.getElementById("size").value);

    var crust = parseInt(document.getElementById("crust").value);

    var toppings= 60;

    var delivery = parseInt(document.getElementById("delivery").value);

    var total = price+crust+toppings+delivery;

    var name = document.getElementById("flavor").value;

    var location = document.getElementById("place").value;

    document.getElementById("order-name").innerHTML = "<li>"+ name + "</li>";

    document.getElementById("location").innerHTML = "Delivery to; " + location +" Ksh. 200";

    document.getElementById("total").innerHTML = "Total: Kshs. "+ total;
};
total();


$(document).ready(function(){
    $("button").click(function(){
        var location= $("#place").val();
        alert("We have received your order. We will deliver it at " + location);

        $(".toggle").show();
      });
         
});