angular.module('comparetravel', ['angular.filter'])
.config(['$interpolateProvider', function($interpolateProvider ,$locationProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
  // $locationProvider.html5Mode(true);
}])


.constant("Constants",{

   Car_types : {

                    1:     'Sedan',
                    2:     'Mini SUV',
                    3:     'Compact Car',
                    4:     'Sports Car',
                    5:     'Convertable',
                    6:     'Coupe',
                    7:     'Mini Van',
                    8:     'Hatchback',
                    9:     'Off rode vehical',
                    10:    'Pickup Truck',
                    11:    'Station Wagon',
                    12:    'Cross Over',
                    13:    'Full Sized Car',
                    14:    'Mid Sized Car',
                    15:    'Utility Vehical',
                    16:    'Hybrid Car',
                    17:    'Roadster',
                    18:    'Touring Car',
                    19:    'Super Car',
                    20:    'Family Car ',
                    21:    'Grand Tourer',
                    22:    'Sub Compact ',
                    23:    'Electric Cars',
                    24:    'Limousine',
                    25:    'Commercial Vehical',
                    26:    'Recreational Vehical',
                    27:    'Carvan',
                    28:    'Economic Car',
                    29:    'Hybrid Electric Vehical ',
                    30:    'Executive Car',
                    31:    'City Car',
                    32:    'Compact SUV',
                    33:    'Super Mini Car',
                    34:    'Micro Car',
                    35:    'Pony Car',
                    36:    'Landaulet',
                    37:    'Light Commercial',
                    38:    'Tempo Traveller',
                    39:    'Kei Car',
                    40:    'Vintage Car',
                    41:    'TUV ',
                    42:    'MUV',
                    43:    'Certified Pre Owned',
                    44:    'Small Cars',
                    45:    'Luxury Cars',
                    46:    'Compact SUV',
                    47:    'Mid Sized SUV',
                    48:    'Full Sized SUV',
                    49:    'Passenger Van',
                    50:    'Cargo Van',
                    51:    'Luxury Gran Saloon',
                    52:    'Muscle Car',
                    53:    'Mini Bus',
                    54:    'Pre Owned',
                    55:    'MPV',
                    56:    'Notchback',
                    57:    'Pheaton',
                    58:    'Hardtop',
                    59:    'Spyder',
                    60:    'Entry Level Luxury ',
                    61:    'Mid Sized Luxury',
                    62:    'Economy Car',
                    63:    'Mid Sized Sedan'

   },


   Cab_types : {
 
    1:     'Monthly Rental',
    2:     'Sightseeing',
    3:     'Luxury', 
    4:     'Outstation',
    5:     'Self Drive', 
    6:     'Hire a Driver ',
    7:     'Quick Cabs'
  

},

    Fuel_types : {
    
      1:     'Petrol',
      2:     'Diesel',
      3:     'CNG'
    },

   Amenities : {
    "air_condition": null, 
    "automatic": null, 
    "baggage_allowance": null, 
    "chauffeur": null, 
    "doorstep_delivery": null, 
    "fuel": null, 
    "verified_driver": null
  },



  Locations : [
    'Abu',
    'Agartala',
    'Ahmedabad',
    'Aizawl',
    'Ajmer',
    'Allahabad',
    'Almora',
    'Along',
    'Alwar',
    'Amarnath',
    'Ambala',
    'Amboli',
    'Amritsar',
    'Andaman',
    'Andhra Pradesh',
    'Araku',
    'Arunachal Pradesh',
    'Assam',
    'Auli',
    'Aurangabad',
    'Badrinath',
    'Bagan',
    'Bagdogra',
    'Bakkhali',
    'Bali',
    'Bandhavgarh',
    'Bandipur',
    'Bangalore',
    'Banjar',
    'Barot',
    'Batala',
    'Bhandardara',
    'Bhangarh',
    'Bharatpur',
    'Bhatinda',
    'Bhimashankar',
    'Bhimtal',
    'Bhopal',
    'Bihar',
    'Bikaner',
    'Bir-Billing',
    'Bundi',
    'Chail',
    'Chalakudy',
    'Chamba',
    'Champawat',
    'Chandigarh',
    'Chattisgarh',
    'Cherrapunji',
    'Chikhaldara',
    'Chikmagalur',
    'Chitkul',
    'Chittorgarh',
    'Chumathang',
    'Coimbatore',
    'Coonoor',
    'Coorg',
    'Corbett',
    'Dadra and Nagar Haveli',
    'Dalhousie',
    'Daman',
    'Daman and Diu',
    'Dandeli',
    'Daranghati',
    'Darjeeling',
    'Dehradun',
    'Delhi',
    'Devprayag',
    'Dhana',
    'Dhanaulti',
    'Dharamshala',
    'Dibrugarh',
    'Digha',
    'Dimapur',
    'Diu',
    'Dudhwa',
    'Dwarka',
    'Faridabad',
    'GHNP',
    'Gangotri',
    'Gangtok',
    'Gaya',
    'Ghaziabad',
    'Gir',
    'Goa',
    'Gokarna',
    'Gopalpur',
    'Gorakhpur',
    'Gujarat',
    'Gulmarg',
    'Guntakal',
    'Guptkashi',
    'Gurdaspur',
    'Gurgaon',
    'Guwahati',
    'Haflong',
    'Hampi',
    'Hanoi',
    'Haridwar',
    'Haryana',
    'Himachal Pradesh',
    'Hogenakkal',
    'Hoshiarpur',
    'Hunder',
    'Igatpuri',
    'Imphal',
    'Indore',
    'Itanagar',
    'Jabalpur',
    'Jagdalpur',
    'Jaisalmer',
    'Jakarta',
    'Jalandhar',
    'Jammu and Kashmir',
    'Jharkhand',
    'Jodhpur',
    'Jorhat',
    'Joshimath',
    'Junagadh',
    'Junnar',
    'Kalimpong',
    'Kamshet',
    'Kanatal',
    'Kanchipuram',
    'Kangra',
    'Kanyakumari',
    'Kargil',
    'Karjat',
    'Karnaprayag',
    'Karnataka',
    'Karsog',
    'Kasauli',
    'Kashid',
    'Kasol',
    'Katra',
    'Kaza',
    'Kaziranga',
    'Kedarnath',
    'Kerala',
    'Keylong',
    'Khajjiar',
    'Khajuraho',
    'Khandala',
    'Kharapathar',
    'Khimsar',
    'Kochi',
    'Kodaikanal',
    'Kohima',
    'Kolad',
    'Kollam',
    'Konark',
    'Kota',
    'Kovalam',
    'Kozhikode',
    'Kudremukha',
    'Kufri',
    'Kullu',
    'Kumarakom',
    'Kumbhalgarh',
    'Kurnool',
    'Kurseong',
    'Kurukshetra',
    'Kutch',
    'Lachung',
    'Lakshadweep',
    'Lamayuru',
    'Lambasingi',
    'Lansdowne',
    'Lavasa',
    'Leh',
    'Likir',
    'Lohajung',
    'Lonar',
    'Lucknow',
    'Ludhiana',
    'Madhya Pradesh',
    'Madurai',
    'Mahabaleshwar',
    'Mahabalipuram',
    'Maharashtra',
    'Male',
    'Malvan',
    'Manali',
    'Mandarmani',
    'Mandi',
    'Mandu',
    'Manipur',
    'Maredumilli',
    'Matheran',
    'Mathura',
    'Mawlynnong',
    'Mawsynram',
    'Mcleodganj',
    'Meghalaya',
    'Mizoram',
    'Mohali',
    'Mukteshwar',
    'Mumbai',
    'Munnar',
    'Mussoorie',
    'Mysore',
    'Nagaland',
    'Naggar',
    'Nagpur',
    'Nainital',
    'Nandaprayag',
    'Nandi',
    'Narkanda',
    'Nashik',
    'Naukuchiatal',
    'Neemrana',
    'Nelliyampathy',
    'Netarhat',
    'Noida',
    'Nongstoin',
    'Odisha',
    'Orchha',
    'Osian',
    'Pahalgam',
    'Palakkad',
    'Palampur',
    'Palanpur',
    'Panchgani',
    'Panna',
    'Pasighat',
    'Pathankot',
    'Patiala',
    'Patna',
    'Patnitop',
    'Pattaya',
    'Peermade',
    'Pelling',
    'Periyar',
    'Pithoragarh',
    'Pondicherry',
    'Pune',
    'Punjab',
    'Puri',
    'Pushkar',
    'Raipur',
    'Rajaji',
    'Rajasthan',
    'Rajgir',
    'Rajkot',
    'Rameswaram',
    'Ramtek',
    'Ranchi',
    'Ranikhet',
    'Ranthambore',
    'Ratnagiri',
    'Ravangla',
    'Rudraprayag',
    'Sagar',
    'Samui',
    'Sanchi',
    'Sangli',
    'Saputara',
    'Sariska',
    'Seoni',
    'Shillong',
    'Shimla',
    'Shirdi',
    'Shivanasamundram',
    'Shoghi',
    'Shravanabelagola',
    'Sikkim',
    'Silchar',
    'Siliguri',
    'Similipal',
    'Singalila',
    'Sirmaur',
    'Solan',
    'Sonamarg',
    'Sonipat',
    'Srinagar',
    'Sundarbans',
    'Surat',
    'Tamenglong',
    'Tamil Nadu',
    'Tanakpur',
    'Tarkarli',
    'Tatapani',
    'Tawang',
    'Telangana',
    'Tezpur',
    'Thanjavur',
    'Thenmala',
    'Thiruvananthapuram',
    'Tiruchirappalli',
    'Tirupati',
    'Tiruvannamalai',
    'Tripura',
    'Tura',
    'Udaipur',
    'Ujjain',
    'Unakoti',
    'Uttar Pradesh',
    'Uttarakhand',
    'Uttarkashi',
    'Vadodara',
    'Vagamon',
    'Varkala',
    'Visakhapatnam',
    'Vishnuprayag',
    'Vrindavan',
    'Wayanad',
    'West Bengal',
    'Yamunotri',
    'Yelagiri',
    'Yousmarg',
    'Zirakpur',
    'Ziro',
  ]

})

.constant("bank_type",{
    
       bank : {
               1: 'Allahabad Bank',
               2: 'Andhra Bank',
               3: 'Axis Bank',
               4: 'Bank of Bahrain and Kuwait',
               5: 'Bank of Baroda - Corporate Banking',
               6: 'Bank of Baroda - Retail Banking',
               7: 'Bank of India',
               8: 'Bank of Maharashtra',
               9: 'Canara Bank',
               10:'Central Bank of India',
               11:'City Union Bank',
               12:'Corporation Bank',
               13:'Deutsche Bank',
               14:'Development Credit Bank',
               15:'Dhanlaxmi Bank',
               16:'Federal Bank',
               17:'ICICI Bank',
               18:'IDBI Bank',
               19:'Indian Bank',
               20:'Indian Overseas Bank',
               21:'IndusInd Bank',
               22:'ING Vysya Bank',
               23:'Jammu and Kashmir Bank',
               24:'Karnataka Bank Ltd',
               25:'Karur Vysya Bank',
               26:'Kotak Bank',
               27:'Laxmi Vilas Bank',
               28:'Oriental Bank of Commerce',
               29:'Punjab National Bank - Corporate Banking',
               30:'Punjab National Bank - Retail Banking',
               31:'Punjab & Sind Bank',
               32:'Shamrao Vitthal Co-operative Bank',
               33:'South Indian Bank',
               34:'State Bank of Bikaner & Jaipur',
               35:'State Bank of Hyderabad',
               36:'State Bank of India',
               37:'State Bank of Mysore',
               38:'State Bank of Patiala',
               39:'State Bank of Travancore',
               40:'Syndicate Bank',
               41:'Tamilnad Mercantile Bank Ltd.',
               42:'UCO Bank',
               43:'Union Bank of India',
               44:'United Bank of India',
               45:'Vijaya Bank',
               46:'Yes Bank Lt',
    
       }
})


 .factory('dataShare',function($rootScope){
    var service = {};
    service.data = false;
    service.sendData = function(data){
        this.data = data;
        $rootScope.$broadcast('data_shared');
    };
    service.getData = function(){
      return this.data;
    };
    return service;
  })
 

.controller('Cab_HomeController',["$scope", "$http","dataShare", function($scope, $http, dataShare, $filter) {
    $scope.info = {};
    $scope.loc=[];
    
    $scope.getCabs = function(id) {
        $scope.info.pickup_time = Date.parse($scope.info.pickup_time)/1000;
        $scope.info.drop_time = Date.parse($scope.info.drop_time)/1000;

         var geocoder = new google.maps.Geocoder();

         var paddress = $scope.info.pickup_location;
         
          geocoder.geocode( { 'address': paddress}, function(results, status) {
        
          if (status == google.maps.GeocoderStatus.OK) {
              $scope.loc.push(results[0].geometry.location.lat());
              $scope.loc.push(results[0].geometry.location.lng());
              console.log("in the geo code",$scope.loc);
              redirectPage($scope.loc)

              
              } 

          }); 

          var daddress = $scope.info.drop_location;

          geocoder.geocode( { 'address': daddress}, function(results, status) {
        
            if (status == google.maps.GeocoderStatus.OK) {
                $scope.loc.push(results[0].geometry.location.lat());
                $scope.loc.push(results[0].geometry.location.lng());
                console.log("in the geo code",$scope.loc);
                redirectPage($scope.loc)
  
                
                } 
  
            }); 
          
        
        console.log("$scope.info",$scope.info);
        dataShare.sendData($scope.info);
        $scope.location=document.location.href;
        console.log("$scope.location",$scope.location);
        var redirectPage=function(){
          console.log("$scope.location array",$scope.loc);
         window.open($scope.location + "/list?city=" + $scope.info.pickup_location + "&cab_type=" + id + "&pickup_time="  + $scope.info.pickup_time + "&drop_time=" + $scope.info.drop_time + "&pickup_lat="  + $scope.loc[0] + "&pickup_lon="  + $scope.loc[1]+ "&drop_lat="  + "0" + "&drop_lon="  + "0",'_self'); 
        }
      } 
    
  
  }])


.controller('CabListController',["$scope", "$http","Constants","dataShare","$filter", function($scope, $http, Constants, dataShare, $filter) {
    
    $scope.car_types = Constants.Car_types;
    var info = {};
    $scope.info = {};

    var str = document.location.search.split("&");
    var type = str[0].split("=");
    var type1 = str[2].split("=");
    var type2 = str[3].split("=");
    var type3 = str[0].split("=");
    var pickuplat= str[4].split("=");
    var pickuplon= str[5].split("=");
    
    var droplat=str[6].split("=");
    var droplon=str[7].split("=");

/***********************latlon to address conversion********************************************* */
    var geocoder  = new google.maps.Geocoder();             // create a geocoder object
    var pickuplocation  = new google.maps.LatLng(pickuplat[1],pickuplon[1]);    // turn coordinates into an object          
    var droplocation=new google.maps.LatLng(droplat[1],droplon[1]);
    geocoder.geocode({'latLng': pickuplocation}, function (results, status) {
      if(status == google.maps.GeocoderStatus.OK) {      
        
        // if geocode success
        var pickupadd=results[0].address_components[6].long_name;         // if address found, pass to processing function
        console.log("pickupadd",pickupadd);
        $scope.info.pickup_location = pickupadd;

      }
    }); 
    geocoder.geocode({'latLng': droplocation}, function (results, status) {
      if(status == google.maps.GeocoderStatus.OK) {           // if geocode success
        var dropadd=results[0].address_components[6].long_name;         // if address found, pass to processing function
        console.log("dropadd",dropadd);
        $scope.info.drop_location= dropadd;

      }
    }); 
/*********************************************************************************************** */


    $scope.info.pickup_time=new Date(type1[1]*1000);
    $scope.info.drop_time = new Date(type2[1]*1000);

    

    $scope.getCabs = function(id) {
        // console.log("$location.path",$location.path);
        $scope.info.pickup_time = Date.parse($scope.info.pickup_time)/1000;
        console.log($scope.info.pickup_time);
        $scope.info.drop_time = Date.parse($scope.info.drop_time)/1000;

        var geocoder = new google.maps.Geocoder();
        var paddress = $scope.info.pickup_location;
        var daddress = $scope.info.drop_location;

        geocoder.geocode( { 'address': paddress}, function(results, status) {

          if (status == google.maps.GeocoderStatus.OK) {
             $scope.platitude = results[0].geometry.location.lat();
             $scope.plongitude = results[0].geometry.location.lng();
            
             console.log("$scope.platitude",$scope.platitude);
            
          } 
        }); 
        

        geocoder.geocode( { 'address': daddress}, function(results, status) {

          if (status == google.maps.GeocoderStatus.OK) {
              $scope.dlatitude = results[0].geometry.location.lat();
              $scope.dlongitude = results[0].geometry.location.lng();
              
          } 
        }); 
        var str = document.location.search.split("&");
        var type = str[1].split("=");
        $scope.city = type[1];
        console.log($scope.city);
        
    
        console.log("$scope.info",$scope.info);
        dataShare.sendData($scope.info);
        $scope.location=document.location.href;
        console.log("$scope.location",$scope.location);
        window.open("/cab/list?city=" + $scope.info.pickup_location + "&cab_type=" + id + "&pickup_time="  + $scope.info.pickup_time + "&drop_time=" + $scope.info.drop_time + "&pickup_lat="  + $scope.platitude + "&pickup_lon="  + $scope.plongitude+ "&drop_lat="  + $scope.dlatitude + "&drop_lon="  + $scope.dlongitude,'_self'); 
      } 
    
  
    $scope.cab_type = 1;
    $scope.cab = {};

    var str = document.location.search.split("&");
    var type = str[1].split("=");
    $scope.cab_type = type[1];
    
    


    $scope.$on('data_shared',function(){
                            info =  dataShare.getData();    
             $scope.info = info;

    })
    console.log("$scope.info",$scope.info);

    $http({
      method: 'GET',
      url: '/api/v1/cab/deal'
    }).then(function successCallback(response) {

        $scope.deals= response.data.result.deals;
        console.log("$scope.deals",$scope.deals);
        $scope.min_base_fare = Math.min.apply(Math,$scope.deals.map(function(item){return item.base_fare;}));
        $scope.max_base_fare = Math.max.apply(Math,$scope.deals.map(function(item){return item.base_fare;}));
        $scope.max_initial_km = Math.max.apply(Math,$scope.deals.map(function(item){return item.initial_km;}));
        console.log( $scope.max_initial_km);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    })

    $http({
      method: 'GET',
      url: '/api/v1/cab/amenity'
    }).then(function successCallback(response) {

        $scope.amenities= response.data.result.amenities;
        console.log("$scope.amenities",$scope.amenities);
        $scope.max_fuel_capacity = Math.max.apply(Math,$scope.amenities.map(function(item){return item.fuel_capacity;}));
      

        
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    })

    $scope.getCab_Rating = function(){
      
  
      $http({
        method: 'GET',
        url: '/api/v1/cab' + document.location.search + '&rating=' + $scope.cab.rating
      }).then(function successCallback(response) {
          $scope.cabs = response.data.result.cabs;
          
          console.log("$scope.cabs",$scope.cabs);
          // this callback will be called asynchronously
          // when the response is available
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      })
  
    }

    $scope.getCab_base_fare = function(){
      
      $http({
        method: 'GET',
        url: '/api/v1/cab' + document.location.search + '&min_base_fare=' + $scope.min_base_fare + '&max_base_fare=' + $scope.cab.base_fare
      }).then(function successCallback(response) {
          $scope.cabs = response.data.result.cabs;
          console.log(" $scope.cabs ", $scope.cabs )
          
          // this callback will be called asynchronously
  
          // when the response is available
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      })
      
    }


    $scope.getCab_fuel_capacity = function(){
      $http({
        method: 'GET',
        url: '/api/v1/cab' + document.location.search + '&fuel_capacity=' + $scope.cab.fuel_capacity
      }).then(function successCallback(response) {
          $scope.cabs = response.data.result.cabs;
          console.log(" $scope.cabs ", $scope.cabs );
          console.log($scope.fuel_capacity);

          // this callback will be called asynchronously
  
          // when the response is available
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      })
      
    }

    $scope.getCab_seater = function(){
      
      $http({
        method: 'GET',
        url: '/api/v1/cab' + document.location.search + '&seater=' + $scope.cab.seater
      }).then(function successCallback(response) {
          $scope.cabs = response.data.result.cabs;
          console.log(" $scope.cabs ", $scope.cabs );
          console.log($scope.cab.seater);

          // this callback will be called asynchronously
  
          // when the response is available
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      })
      
    }

    $scope.getCab_free_km = function(){
      // $scope.km_restriction = $scope.cab.km_restriction;
      $http({
        method: 'GET',
        url: '/api/v1/cab' + document.location.search + '&initial_km=' + $scope.cab.initial_km
      }).then(function successCallback(response) {
          $scope.cabs = response.data.result.cabs;
          console.log(" $scope.cabs ", $scope.cabs );
          console.log($scope.initial_km);

          // this callback will be called asynchronously
  
          // when the response is available
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      })
      
    }

    $scope.getCab_fuel_type= function(fuel_type){
       
      $http({
        method: 'GET',
        url: '/api/v1/cab' + document.location.search + '&car_type=' + fuel_type
      }).then(function successCallback(response) {
          $scope.cabs = response.data.result.cabs;
          console.log(" $scope.cabs ", $scope.cabs );

          // this callback will be called asynchronously
  
          // when the response is available
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      })
      
    }

    $scope.getCab_car_type= function(car_name){
      var count = 0;
      var i;
      console.log(car_name)
      for (i in $scope.car_types) {
          if ($scope.car_types.hasOwnProperty(i)) {
              count++;
          }
      }
      
      $scope.car_type =$scope.car_types;
      for ( var j=1; j<=count; j++){
        
        if($scope.car_types[j]==car_name){
        $scope.car=j;
        }
       
      }
      
     
      $http({
        method: 'GET',
        url: '/api/v1/cab' + document.location.search + '&car_type=' + $scope.car
      }).then(function successCallback(response) {
          $scope.cabs = response.data.result.cabs;
          console.log(" $scope.cabs ", $scope.cabs );
          console.log($scope.car);

          // this callback will be called asynchronously
  
          // when the response is available
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      })
      
    }
  
    $scope.reload = function(){
      window.location.reload();
    }

    $scope.getAmenity = function (filterName, filterValue) {


      filter[filterName] = filterValue;
    
      $http.get("/api/v1/cab" + document.location.search, { params: filter })
      
        .then(function (res) {
          $scope.cabs = res.data.result.cabs;
          // $scope.serverSideRender = false;
          console.log($scope.cabs);
        
        }, function (err) {
          console.log(err);
        });

    }

    $scope.showDetail=function(cabid, dealid){
      window.open(document.location.href+"/"+cabid+"/"+dealid);
      
    }
    

    $http({
        method: 'GET',
        url: '/api/v1/cab' + document.location.search
      }).then(function successCallback(response) {

          $scope.cabs= response.data.result.cabs;
          console.log("$scope.cabs",$scope.cabs);
          // this callback will be called asynchronously
          // when the response is available
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      })

    $scope.type = function(id)  {
        return $scope.car_types[id]
    }

  }])





//--------------------cab detail/booking controller-----------------------  


  .controller('detailController',["$scope", "$http","bank_type", function($scope, $http, bank_type, $filter) {
    $scope.bank = bank_type.bank;
    
    $scope.cab= {}; // main cab model
    $http({
        method: 'GET',
        url: '/api/v1/cab' 
      }).then(function successCallback(response) {
          $scope.cab= response.data.result.cabs;
          console.log("$scope.bank",$scope.bank);
          
          console.log("cab data",$scope.cab);
          // this callback will be called asynchronously
          // when the response is available
          getdeal();
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      })
   
      var getdeal=function(){
        $scope.deal={};
        $scope.cabs={};
        var search =location.pathname;
        var id = search.split("/");
        $http({
          method: 'GET',
          url: '/api/v1/cab'
        }).then(function successCallback(response) {
            for(var i=0; i<response.data.result.cabs.length; i++){
                for(var j=0; j<response.data.result.cabs[i].deals.length; j++){
                    if(response.data.result.cabs[i].id==1 && response.data.result.cabs[i].deals[j].id==1){
                        $scope.cabs =response.data.result.cabs[i];
                        $scope.deal =response.data.result.cabs[i].deals[j];

                        console.log("cab[]",$scope.cabs );         
                        console.log("deal[]",$scope.deal );     
                        
                        return $scope.cabs,$scope.deal ;
                        
                        
              }
            }
        }
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
      }

  }]) 

  .controller('adminCabController',["$scope", "$http","Constants", function($scope, $http, Constants, $filter) {
    $scope.cab = {}; // main cab model
    $scope.cabImg = []; //for all images array
    $scope.images={}; //for one image
    $scope.myVar= true;
    $scope.cabDeals = [];
    $scope.deals = {};
    $scope.locations = Constants.Locations;
    $scope.car_types = Constants.Car_types;
    $scope.fuel_types = Constants.Fuel_types;
    $scope.amenities = Constants.Amenities;
    $scope.cab_types = Constants.Cab_types;
    $scope.cabs={};

    
    // $scope.cab = {
    //   association: [{

    //     "collections": {

    //     },
    //     "products": {

    //     }
    //   }]
    // };
    $http.get("/api/v1/cab/collection/product")
      .then(function (res) {
        $scope.product  = res.data.result.product;

      }, function (err) {
        console.log(err);

      });

    

    $http.get("/api/v1/cab/collection")
      .then(function (res) {
        $scope.collection = res.data.result.collection;
      }, function (err) {
        console.log(err);
      });
    // $scope.image_types ={
 
    //   1:  "Monthly Rental",
    //   2:  "Sightseeing",
    //   3:  "Luxury", 
    //   4:  "Outstation",
    //   5:  "Self Drive", 
    //   6:  "Hire a Driver",
    //   7:  "Quick Cabs"
  
    // },
    $scope.cab.deals = [
      {
          "base_fare": null,
          "base_fare_peak_season": null,
          "base_fare_weekend": null,
          "base_fare_with_fuel": null,
          "cab_url": "",
          "cancellation_charges": null,
          "car_night_allowance_charge":null,
          "different_pickup_drop_point_charge":null,
          "driver_daily_allowance_charge":null,
          "different_pickup_drop_point_charge": null,
          "driver_daily_allowance_charge": null,
          "driver_per_hr_allowance_charge": null,
          "fare_exceeded_per_hr": null,
          "fare_exceeded_per_km": null,
          "initial_km": null,
          "initial_km_fare": null,
          "is_partner": null,
          "km_restriction": null,
          "one_way": null,
          "outstation":null,
          "slab": null,

      }
    ]

    $scope.addMoreDeal = function () {

      var moreDeals = {
        "base_fare": null,
          "base_fare_peak_season": null,
          "base_fare_weekend": null,
          "base_fare_with_fuel": null,
          "cab_url": "",
          "cancellation_charges": null,
          "car_night_allowance_charge":null,
          "different_pickup_drop_point_charge":null,
          "driver_daily_allowance_charge":null,
          "different_pickup_drop_point_charge": null,
          "driver_daily_allowance_charge": null,
          "driver_per_hr_allowance_charge": null,
          "fare_exceeded_per_hr": null,
          "fare_exceeded_per_km": null,
          "initial_km": null,
          "initial_km_fare": null,
          "is_partner": null,
          "km_restriction": null,
          "one_way": null,
          "outstation":null,
          "slab": null,
      }

      $scope.cab.deals.push(moreDeals);
    };

    $scope.cabType = function(id){

      $http.get("/api/v1/cab?cab_type=" + id)
      .then(function (res) {
        $scope.cabs = res.data.result.cabs;
      }, function (err) {
        console.log(err);
      });
    }

    var createToast=function(msg, color){
      var x= document.getElementById("snackbar");
      x.innerHTML=msg;
      x.style.backgroundColor=color;
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    $http({
      method: 'GET',
      url: '/api/v1/cab/website' 
    }).then(function successCallback(response) {
        // hotelData = response.data.result;
        $scope.websites = response.data.result.website;
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    })

    // $http({
    //   method: 'GET',
    //   url: '/api/v1/cab/deal?website_id=' + $scope.deals.website_id
    // }).then(function successCallback(response) {

    //     $scope.availableDeals= response.data.result.deals;
    //     // this callback will be called asynchronously
    //     // when the response is available
    //   }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    // })


    var sendPostCall = function(url, data) {
      //$scope.cab.city = $scope.cab.city.toLowerCase();
      console.log(data);
      
      $http({
        method: 'POST',
        url: url,
        data: data
      }).then(function (res) {
        console.log(res);
        
        createToast("'cab successfully created!!!'","green");
  
        },
        // failed callback
        function (req) {
         createToast("'Something went wrong!!!'","red");
        })
    }
    $scope.cab.images = [
      {
        "image_url": ""
      }
    ]

    $scope.addImg=function(){
      var addImages = {

        "image_url": ""
      }
      addImages.cab=$scope.cab.id;
      $scope.cab.images.push(addImages);
      createToast("'Image Added!!'","green");
    }
  
    

    $scope.show=function(){
      $scope.myVar= false;
  }

    // $scope.addDeal=function(){
    //   $scope.cabDeals.push($scope.deals);
    //   $scope.deals={};
    //   createToast("'Deal Added!!'","green");
  
    // }
    $scope.functionCalling = "Add";
    $scope.Add = function () {
      console.log("$scope.cab",$scope.cab);
      sendPostCall('/api/v1/cab', $scope.cab)
    }


    $scope.deleteCab = function (cabId, index) {

      $http.delete("/api/v1/cab/" + cabId)
        .then(function (res) {
          $scope.cabs.splice(index, 1);
    
          createToast("'Deleted!!'","green");

        }, function (err) {
        
         createToast("'Something went wrong!!!'","red");

        })

    }
    // $scope.addMoreAssociation = function () {
    //   var addAssociation = {
    //     "collections": {

    //     },
    //     "products": {

    //     }
    //   }
    //   $scope.cab.association.push(addAssociation);



    // }
    $scope.Update = function () {

      delete $scope.cab.amenities
      delete $scope.cab.cab_collection;
      delete $scope.cab.deals;
      delete $scope.cab.id;
      delete $scope.cab.images;

      console.log(" $scope.cab =", $scope.cab);

      $http.put("/api/v1/cab/" + put_cab_id, $scope.cab)
        .then(function (res) {
          console.log(res);
         createToast("'Updated!!'","green");

        }, function (err) {
          console.log(err);
         createToast("'Something went wrong!!!'","red");

        })




    }
    $scope.editCab = function (cabData) {
      $scope.functionCalling = "Update";
      $scope.disable_amenity = true;
      $scope.disable_images = true;
      $scope.disable_collection = true;

      $scope.disable_deal=true;
      cabData.cab_type = cabData.cab_type + ""
      cabData.car_type = cabData.car_type + ""
      cabData.amenities.fuel_type = cabData.amenities.fuel_type + ""
      put_cab_id = cabData.id;
      for (i in cabData.deals) {
        cabData.deals[i].website_id = cabData.deals[i].website + ""
      }

      // for (i in cabData.association) {
      //   cabData.association[i].collections.collection_id = cabData.association[i].collections.id + ""
      //   cabData.association[i].cuisines.cuisine_id = cabData.association[i].cuisines.id + ""
      //   cabData.association[i].collections.collection = null;
      //   cabData.association[i].collections.image = null;
      //   cabData.association[i].collections.desc = null;
      //   cabData.association[i].collections.featured = null;
      // }

      $scope.cab=cabData;

      console.log($scope.cab);
      // $scope.ecabDeals=cabData.deals;
      // $scope.ecabAmenities=cabData.amenities;
      // $scope.ecabImages=cabData.images;

      // console.log("Constants.Cab_types",Constants.Cab_types);
      
      // for(i in Constants.Cab_types){
      //     if(cabData.cab_type==i){

      //       $scope.ecab.cab_type=Constants.Cab_types[i];
      //       console.log("$scope.cab.cab_type",$scope.ecab.cab_type);
      //       console.log("$scope.ecab",$scope.ecab);
      //     }
      // }

    }

  }])

  .controller("dashboardAmenityController", ["$scope", "$http", function ($scope, $http) {
    $scope.disable_update = true;

    var createToast=function(msg, color){
      var x= document.getElementById("snackbar");
      x.innerHTML=msg;
      x.style.backgroundColor=color;
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
    $http.get("/api/v1/cab/amenity")
      .then(function (res) {
        $scope.amenity = res.data.result.amenities;
        $scope.amenities = $scope.amenity[0]
        delete $scope.amenities.id;
        delete $scope.amenities.cab;


      }, function (err) {
        console.log(err);
      })
    $scope.cabType = function(id){
    

      $http.get("/api/v1/cab?cab_type=" + id)
      .then(function (res) {
        $scope.cabs = res.data.result.cabs;
      }, function (err) {
        console.log(err);
      });
    }
   

    $scope.editAmenity = function (cabData) {
      console.log(cabData);
      $scope.disable_update = false;
      $scope.cabData = {}
      $scope.cabData.amenities = cabData.amenities;

    }

    $scope.update = function () {
      var amenityId = $scope.cabData.amenities.id

      delete $scope.cabData.amenities.id;
      delete $scope.cabData.amenities.cab;

      console.log($scope.cabData.amenities);

      $http.put("/api/v1/cab/amenity/" + amenityId, $scope.cabData.amenities)
        .then(function (res) {
          console.log(res);
        
         createToast("'Upadted!!'","green");

        }, function (err) {
          
          console.log(err);
         createToast("'Something went wrong!!!'","red");

        })
    }


  }])
  .controller("dashboardImagesController", ["$scope", "$http", "$q", function ($scope, $http, $q) {

    
    var createToast=function(msg, color){
      var x= document.getElementById("snackbar");
      x.innerHTML=msg;
      x.style.backgroundColor=color;
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
  
    $scope.disable_update = true;
    var cab_id = null;
    $scope.functionCall = "update";

    $scope.cabType = function(id){
      $http.get("/api/v1/cab?cab_type=" + id)
      .then(function (res) {
        $scope.cabs = res.data.result.cabs;
      }, function (err) {
        console.log(err);
      });
    }

    $scope.editImages = function (cabData) {
      $scope.disable_update = false;
      cab_id = cabData.id;
      // for (i in cabData.images) {
      //   cabData.images[i].cab = cabData.images[i].cab_id;
      // }
      $scope.cabData = {}
      $scope.cabData.images = cabData.images;


    }

    $scope.update = function () {

      var imageList = [];

      for (i in $scope.cabData.images) {
        var imageId = $scope.cabData.images[i].id;
        delete $scope.cabData.images[i].id;
        delete $scope.cabData.images[i].cab;

        imageList.push($http.put("/api/v1/cab/image/" + imageId, $scope.cabData.images[i]))
      }


      $q.all(imageList)
        .then(function (res) {
      
         createToast("'Updated!!'","green");

        }, function (err) {
    
         createToast("'Something went wrong!!!'","red");

          console.log(err);
        })


    }

    $scope.deleteImage = function (imageId) {
      $http.delete("/api/v1/cab/image/" + imageId)
        .then(function (res) {

  
         createToast("'deleted!!'","green");


        }, function (err) {
        
         createToast("'Something went wrong!!!'","red");

        })
    }


    $scope.addMoreImages = function () {
      $scope.addImages = true;
      $scope.functionCall = "Add";

      $scope.cabData = {};
      $scope.cabData.images = [
        {

          "image_url": ""
        }
      ]
    }

    $scope.addMorecabImages = function () {
      var addImages = {

        "image_url": ""
      }
      $scope.cabData.images.push(addImages);
    };


    $scope.Add = function () {

      console.log($scope.cabData);
      var imageList = [];

      for (i in $scope.cabData.images) {

        $scope.cabData.images[i].cab_id= cab_id;
        imageList.push($http.post("/api/v1/cab/images", $scope.cabData.images[i]))
      }


      $q.all(imageList)
        .then(function (res) {
    
          createToast("'Image Added!!'","green");

        }, function (err) {
      
         createToast("'Something went wrong!!!'","red");

          console.log(err);
        })

    }
  }])
  .controller("dashboardDealController", ["$http", "$scope", "$q", function ($http, $scope, $q) {


    $scope.disable_update = true;
    $scope.myVar= true;
    $scope.functionCall = "update";
    var cab_id = null;

    $scope.show=function(){
      $scope.myVar= false;
    }
    var createToast=function(msg, color){
      var x= document.getElementById("snackbar");
      x.innerHTML=msg;
      x.style.backgroundColor=color;
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
    $scope.editDeal = function (cabData) {
      console.log(cabData);
      $scope.disable_update = false;
      $scope.addDeal = false;
      $scope.functionCall = "update";
      cab_id = cabData.id;

      $scope.cabData = cabData;
      // $scope.website=$scope.cabData.deals

    }

    $scope.update = function () {
      var dealList = [];
      
      for (i in $scope.cabData.deals) {
        var dealId = $scope.cabData.deals[i].id
        delete $scope.cabData.deals[i].id;
        delete $scope.cabData.deals[i].cab;
        delete $scope.cabData.deals[i].website;

        dealList.push($http.put("/api/v1/cab/deal/" + dealId, $scope.cabData.deals[i]))
      }


      $q.all(dealList)
        .then(function (res) {
          
          createToast("'updated!!'","green");

        }, function (err) {
      
          createToast("'Something went wrong!!!'","red");

          console.log(err);
        })


    }

    $scope.deletedeal = function (dealId, index) {
      $http.delete("/api/v1/cab/deal/" + dealId)
        .then(function (res) {

          $scope.cabData.deals.splice(index, 1)

          createToast("'Deleted'","green");

        },
        function (err) {
          console.log(err);
         createToast("'Something went wrong!!!'","red");

  
        })
    }


    $scope.addMoreDeal = function () {
      $scope.addDeal = true;
      $scope.functionCall = "Add"
      $scope.cabData = {};

      $scope.cabData.deals = [
        {
          "base_fare": null,
          "base_fare_peak_season": null,
          "base_fare_weekend": null,
          "base_fare_with_fuel": null,
          "cab_url": "",
          "cancellation_charges": null,
          "car_night_allowance_charge":null,
          "different_pickup_drop_point_charge":null,
          "driver_daily_allowance_charge":null,
          "different_pickup_drop_point_charge": null,
          "driver_daily_allowance_charge": null,
          "driver_per_hr_allowance_charge": null,
          "fare_exceeded_per_hr": null,
          "fare_exceeded_per_km": null,
          "initial_km": null,
          "initial_km_fare": null,
          "is_partner": null,
          "km_restriction": null,
          "one_way": null,
          "outstation":null,
          "slab": null,


        }
      ]
    }


    $scope.addMore = function () {
      var moreDeals = {
          "base_fare": null,
          "base_fare_peak_season": null,
          "base_fare_weekend": null,
          "base_fare_with_fuel": null,
          "cab_url": "",
          "cancellation_charges": null,
          "car_night_allowance_charge":null,
          "different_pickup_drop_point_charge":null,
          "driver_daily_allowance_charge":null,
          "different_pickup_drop_point_charge": null,
          "driver_daily_allowance_charge": null,
          "driver_per_hr_allowance_charge": null,
          "fare_exceeded_per_hr": null,
          "fare_exceeded_per_km": null,
          "initial_km": null,
          "initial_km_fare": null,
          "is_partner": null,
          "km_restriction": null,
          "one_way": null,
          "outstation":null,
          "slab": null,

      }

      $scope.cabData.deals.push(moreDeals);
    }

    $scope.Add = function () {

      var dealList = [];

      for (i in $scope.cabData.deals) {
        $scope.cabData.deals[i].cab_id = cab_id;

        dealList.push($http.post("/api/v1/cab/deal", $scope.cabData.deals[i]))
      }


      $q.all(dealList)
        .then(function (res) {
    
          createToast("'Deal Added'","green");

        }, function (err) {
      
          console.log(err);
          createToast("'Something went wrong!!!'","red");

        })
    }

    $http({
      method: 'GET',
      url: '/api/v1/cab/website' 
    }).then(function successCallback(response) {
        $scope.websites = response.data.result.website;
      }, function errorCallback(response) {
    })
    $scope.cabType = function(id){

      $http.get("/api/v1/cab?cab_type=" + id)
      .then(function (res) {
        $scope.cabs = res.data.result.cabs;
      }, function (err) {
        console.log(err);
      });
    }
  }])
  .controller("dashboardCollectionController", ["$scope", "$http", "$q", function ($scope, $http, $q) {

    $scope.disable_update = true;
    $scope.addCollection = false;
    $scope.functionCall = "update";
    var cab_id = null;
    var createToast=function(msg, color){
      var x= document.getElementById("snackbar");
      x.innerHTML=msg;
      x.style.backgroundColor=color;
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
    $http.get("/api/v1/cab/collection")
      .then(function (res) {
        $scope.collections = res.data.result.collection;
      }, function (err) {
        console.log(err)
      })

    $scope.editCollection = function (cabData) {

      $scope.disable_update = false;
      $scope.addCollection = false;
      $scope.functionCall = "update";
      $scope.collectionData = cabData.collection;
      console.log($scope.collectionData)

    }

    $scope.deleteCollection = function (collectionId, index) {

      $http.delete("/api/v1/cab/collection/" + collectionId)
        .then(function (res) {
        
         createToast("'Deleted!!'","green");

          $scope.collections.splice(index, 1);
        }, function (err) {
        
         createToast("'Something went wrong!!!'","red");

        })

    }

    $scope.addMoreCollection = function () {
      $scope.addCollection = true;
      $scope.disable_update = false;
      $scope.functionCall = "Add"
      $scope.cabData = {}
      $scope.cabData.collections = [
        {
          "collection_name": "",
          "image": "",
          "desc": "",
          "featured": null
        }
      ]
    }

    $scope.addMore = function () {

      var addCollection = {
        "collection_name": "",
        "image": "",
        "desc": "",
        "featured": null
      }
      $scope.cabData.collections.push(addCollection);
    }

    $scope.Add = function () {

      console.log($scope.cabData);
      var collectionList = [];

      for (i in $scope.cabData.collections) {

        collectionList.push($http.post("/api/v1/cab/collection", $scope.cabData.collections[i]))
      }


      $q.all(collectionList)
        .then(function (res) {
          
         createToast("'Added!!'","green");

        }, function (err) {
    
         createToast("'Something went wrong!!!'","red");

          console.log(err);
        })





    }

    $scope.update = function () {
      var collectionId = $scope.collectionData.id;
      delete $scope.collectionData.id

      $http.put("/api/v1/cab/collection/" + collectionId, $scope.collectionData)
        .then(function (res) {
      
         createToast("'Updated!!'","green");


        }, function (err) {
          
         createToast("'Something went wrong!!!'","red");

          console.log(err);
        })

    }

    $scope.cabType = function(id){

      $http.get("/api/v1/cab?cab_type=" + id)
      .then(function (res) {
        $scope.cabs = res.data.result.cabs;
      }, function (err) {
        console.log(err);
      });
    }
  }])