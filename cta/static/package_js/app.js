var app = angular.module("packageApp", ['angular.filter'])
  .config(['$interpolateProvider', function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  }])

  .controller("dashboardController", ["$scope", "$http",  function ($scope, $http) {
    $scope.addWebsite= true;
    var put_package_id = null;
    $scope.packageData = {
        "collections": {

        }
    };

    $scope.packageData.restaurent_chain = {};

    $scope.image_types = {
      1: "Ambience",
      2: "Food",
      3: "Menu"
    }

    $scope.packageData.images = [
      {

        "image_type": null,
        "image_url": ""
      }
    ]


    $scope.packageData.deals = [
      {
        "cancellation_charges": null, 
        "featured_deal": null, 
        "flight": null, 
        "is_partner": null, 
        "package_deal_url": null, 
        "price_per_person": null, 
        "total_price": null, 
        

      }
    ]

    $scope.addMoreDeal = function () {
      var moreDeals = {
        "cancellation_charges": null, 
        "featured_deal": null, 
        "flight": null, 
        "is_partner": null, 
        "package_deal_url": null, 
        "price_per_person": null, 
        "total_price": null, 

      }

      $scope.packageData.deals.push(moreDeals);
    };

    $http.get("/package/location")
      .then(function (res) {
        $scope.locations = res.data.result.locations;
      })

    $scope.getpackageByLocation = function (location) {
      $http.get("/api/v1/package", {params : {city: location}})
        .then(function (res) {
          $scope.packages = res.data.result.packages;
          
          $scope.serchFilter = location;
        }, function (err) {
          console.log(err);
        });
    }

    $scope.getpackageByLocation("Delhi");
    


    $http.get("/api/v1/package/cuisine")
      .then(function (res) {
        $scope.cuisine = res.data.result.cuisine;
      }, function (err) {
        console.log(err);
      });

    $http.get("/api/v1/package/chain")
      .then(function (res) {
        $scope.restaurent_chain = res.data.result.restaurent_chain;
      }, function (err) {
        console.log(err);
      });

    $http.get("/api/v1/package/collection")
      .then(function (res) {
        $scope.collection = res.data.result.collection;
      }, function (err) {
        console.log(err);
      });

    $scope.functionCalling = "Add";

    $scope.Add = function () {
      // $scope.packageData.Deals = $scope.Deals;
      console.log($scope.packageData);

      // return;
      $http.post("/api/v1/package", $scope.packageData)
        .then(function (res) {
          // $scope.packages.push(res.data.result.package);
          console.log(res);
          alert("package added!");
        }, function (err) {
          alert("Error =>\n" + err);

          console.log(err);
        })
    }
    $scope.Update = function () {

      delete $scope.packageData.amenities
      delete $scope.packageData.association;
      delete $scope.packageData.Deals;
      delete $scope.packageData.id;
      delete $scope.packageData.images;
      delete $scope.packageData.menus;

      console.log(" $scope.packageData =", $scope.packageData);

      $http.put("/api/v1/package/" + put_package_id, $scope.packageData)
        .then(function (res) {
          console.log(res);

        }, function (err) {
          console.log(err);
        })




    }
    $scope.deletepackage = function (packageId, index) {

      $http.delete("/api/v1/package/" + packageId)
        .then(function (res) {
          $scope.packages.splice(index, 1);
          alert("Deleted!!");
        }, function (err) {
          alert("err " + err);
        })

    }




    $scope.addMorepackageImages = function () {
      var addImages = {

        "image_type": null,
        "image_url": ""
      }

      $scope.packageData.images.push(addImages);
    };




    $scope.addMoreAssociation = function () {
      var addAssociation = {
        "collections": {

        },
        "cuisines": {

        }
      }
      $scope.packageData.association.push(addAssociation);



    }


    $scope.editpackage = function (packageData) {
      $scope.functionCalling = "Update";
      $scope.disable_amenity = true;
      $scope.disable_association = true;
      $scope.disable_dish = true;
      $scope.disable_menu = true;
      $scope.disable_images = true;

      packageData.phone = parseInt(packageData.phone);
      put_package_id = packageData.id;

      for (i in packageData.association) {
        packageData.association[i].collections.collection_id = packageData.association[i].collections.id + ""
        packageData.association[i].cuisines.cuisine_id = packageData.association[i].cuisines.id + ""
        packageData.association[i].collections.collection = null;
        packageData.association[i].collections.image = null;
        packageData.association[i].collections.desc = null;
        packageData.association[i].collections.featured = null;
      }

      for (i in packageData.images) {
        packageData.images[i].image_type = packageData.images[i].image_type + ""
      }

      packageData.category = packageData.category + ""

      $scope.packageData = packageData;
      console.log(packageData);
      console.log($scope.packageData);




    }





    $scope.amenities = {
      "alcohol": null,
      "beer": null,
      "brunch": null,
      "buffet": null,
      "city_view": null,
      "desserts_and_bakes": null,
      "full_bar_available": null,
      "gastro_pub": null,
      "group_meal": null,
      "home_delivery": true,
      "kid_friendly": true,
      "live_entertainment": null,
      "live_music": true,
      "live_sports_screening": null,
      "nightlife": null,
      "outdoor_seating": null,
      "parking": null,
      "private_dining_area_available": true,
      "seating": null,
      "serves_jain_food": null,
      "serves_non_veg": null,
      "smoking_area": null,
      "sunday_roast": null,
      "table_booking_recommended": null,
      "table_reservation_required": null,
      "takeaway": null,
      "valet_parking": null,
      "vegetarian_only": null,
      "wheelchair_accessible": null,
      "wifi": true
    }

    $scope.categories_data = [
      {
        "bistro": 1
      },
      {
        "ethnic": 2
      },
      {
        "fine_dining": 3
      },
      {
        "trattoria": 4
      },
      {
        "teppanyaki_ya": 5
      },
      {
        "osteria": 6
      },
      {
        "drive_in": 7
      },
      {
        "drive_thru": 8
      },
      {
        "pizzeria": 9
      },
      {
        "taverna": 10
      },
      {
        "fast_casual": 11
      },
      {
        "pop_up": 12
      },
      {
        "Café": 13
      },
      {
        "iner": 14
      },
      {
        "ramen_ya": 15
      },
      {
        "teahouse": 16
      },
      {
        "fast_food": 17
      },
      {
        "buffet": 18
      },
      {
        "cafeteria": 19
      },
      {
        "luncheonette": 20
      },
      {
        "tapas_bar": 21
      },
      {
        "steakhouse": 22
      },
      {
        "all_you_can_eat_package": 23
      },
      {
        "kosher": 24
      },
      {
        "dinner_in_the_Sky": 25
      },
      {
        "dark_package": 26
      },
      {
        "a_la_carte": 27
      },
      {
        "gastropub": 28
      },
      {
        "brasserie": 29
      },
      {
        "chiringuito": 30
      },
      {
        "food_truck": 31
      },
      {
        "churrascaria": 32
      },
      {
        "food_court": 33
      },
      {
        "restrobars": 34
      },
      {
        "street_stalls": 35
      },
      {
        "theme_resturants": 36
      },
      {
        "coffee_shop": 37
      },
      {
        "coffee_house": 38
      },
      {
        "cabaret": 39
      },
      {
        "tea_shop": 40
      }
    ]

    $scope.categories = [
      "bistro",
      "ethnic",
      "fine_dining",
      "trattoria",
      "teppanyaki_ya",
      "osteria",
      "drive_in",
      "drive_thru",
      "pizzeria",
      "taverna",
      "fast_casual",
      "pop_up",
      "Café",
      "iner",
      "ramen_ya",
      "teahouse",
      "fast_food",
      "buffet",
      "cafeteria",
      "luncheonette",
      "tapas_bar",
      "steakhouse",
      "all_you_can_eat_package",
      "kosher",
      "dinner_in_the_Sky",
      "dark_package",
      "a_la_carte",
      "gastropub",
      "brasserie",
      "chiringuito",
      "food_truck",
      "churrascaria",
      "food_court",
      "restrobars",
      "street_stalls",
      "theme_resturants",
      "coffee_shop",
      "coffee_house",
      "cabaret",
      "tea_shop",
    ]

    $scope.menu = [
      "bars",
      "breakfast",
      "cafe",
      "diet",
      "dinner",
      "family",
      "lounge",
      "lunch",
      "luxury",
      "nightlife",
      "pocket_friendly",
      "street_stalls"
    ]

    $scope.locations = [
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
  }])