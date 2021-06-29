
function total(){
    var name = document.getElementById("flavor").value;

    var price = parseInt(document.getElementById("size").value);

    var crust = parseInt(document.getElementById("crust").value);

    var quantity = parseInt(document.getElementById("number").value);

    var toppings= 60;

    var delivery = parseInt(document.getElementById("delivery").value);

    var cost= ((price+crust+toppings) * quantity);

    var total = ((price+crust+toppings) * quantity)+ delivery;


    var location = document.getElementById("place").value;

    document.getElementById("order-name").innerHTML = "<li>"+ name + "</li>";

    document.getElementById("location").innerHTML = "Delivery to; " + location +" Ksh. 200";

    document.getElementById("total").innerHTML = "Total: Kshs. "+ total;

    document.getElementById("orders-name").innerHTML = name;
    document.getElementById("orders-cost").innerHTML = "Flavor cost: " + cost;
    document.getElementById("orders-delivery").innerHTML =  "Delivery cost: " + delivery;
    document.getElementById("orders-total").innerHTML =  "Grand total: " +total;
};
total();


$(document).ready(function(){
    $("#place-order").click(function(){
        var location= $("#place").val();
        alert("We have received your order. We will deliver it at " + location);
        $(".toggle").show();
        $(".toggle-details").show();
      });

      function PizzaSummary( name, total, delivery){
          this.name= name;
          this.total= total;
          this.delivery= delivery;
      };
      
      var name = document.getElementById("flavor").value;
      var total = ((price+crust+toppings) * quantity)+ delivery;


      

         
});