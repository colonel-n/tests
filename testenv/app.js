function MonaCtrl($scope){
  
  //各Modelの値を初期化する
  $scope.item1 = 0;
  $scope.item2 = 0;
  $scope.item3 = 0;
  $scope.shippingMessage = "";
  $scope.shipping = 0;
  
  $scope.items = {
    item1 : {
      name : "黒あん最中",
      price : 100
    },
    item2 : {
      name : "白あん最中",
      price : 120
    },
    item3 : {
      name : "粒あん最中",
      price : 90
    }
  };
  
  $scope.getAmount = function(){
    return  $scope.item1 + $scope.item2 + $scope.item3;
  }
    
  $scope.getPayment = function(){    
    return  $scope.item1 * $scope.items.item1.price + $scope.item2 * $scope.items.item2.price + $scope.item3 * $scope.items.item3.price; 
  } 
 
  $scope.getTotalcost = function(){    
    return  $scope.getPayment() + $scope.shipping;
  } 
  
  //$watch関数でgetPayment()の値を監視する。監視結果に応じて$scope.shippingMessage、$scope.shipping、すなわち送料メッセージと送料の値を変更。
  $scope.$watch("getPayment()", function(newValue, oldValue){
    if($scope.getPayment() < 5000){
      $scope.shippingMessage = "送料";   
      $scope.shipping = 500; 
    }else if($scope.getPayment() >= 5000){
      $scope.shippingMessage = "送料無料!";     
      $scope.shipping = 0;
    }
  });
}