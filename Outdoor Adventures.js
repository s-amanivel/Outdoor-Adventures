//Sources for app:
//https://www.grainger.com/product/43N593?gucid=N:N:PS:Paid:MS:CSM-2295:TVRYAD:20501231&s_kwcid=AL!2966!10!79096265446382!4582695761535067&ef_id=04f54404a1551a12b3f126a2c324c6c7:G:s&gclid=04f54404a1551a12b3f126a2c324c6c7&gclsrc=3p.ds&msclkid=04f54404a1551a12b3f126a2c324c6c7
//https://www.amazon.com/s?k=things+for+cloudy+days&i=hpc&crid=1QHE99RXPDFWH&sprefix=things+for+cloudy+day%2Chpc%2C128&ref=nb_sb_noss
//https://www.weathermanumbrella.com/collapsible/12005-650-221-51.html
//"Daily Weather" Database provided by code.org
//App lab documentation provided by code.org

var mostRecentID = 1;
var userData = {};
var index;
var cityList = getColumn("Daily Weather", "City" );
var city = "";

var weatherList = getColumn("Daily Weather", "Main Condition");

// Creates a new record and stores the user's account information under userData.
onEvent("enter2Button", "click", function(){
  playSound("sound://category_app/app_button_click_1.mp3", false);
  
  if(getText("passwordInput") != getText("confirmPasswordInput"))
  {
    setText("passwordInput", "Passwords don't match.");
    setText("confirmPasswordInput", "Passwords don't match.");
    return;
  }
  userData.phoneNumber = getText("phoneNumberInput");
  userData.password = getText("confirmPasswordInput");
  userData.userLocation = getText("cityInput");
  createRecord("user_Data", userData, function(record) {
    mostRecentID=record.id;
    setScreen("homeScreen");
  });
});

//Checks to see if the user's phone number and password are correct. Then, it finds if the 
//city is in the data set. After this, it checks the weather and reccomends a product to the 
//user.
onEvent("loginButton", "click", function(){
  playSound("sound://category_app/app_button_click_1.mp3", false);
  if(getText("phoneNumberLogin") == userData.phoneNumber)
  {
    if(getText("passwordLogin") == userData.password)
    {
      for(var i = 0; i <= cityList.length; i++)
      {
         if(cityList[i] == userData.userLocation)
         {
           city = cityList[i];
           index = i;
           break;
         }
      }
       console.log(city);
       var a = index+1;
       console.log(weatherList[a]);
       
       if(weatherList[a] == "Clouds")
       {
         setScreen("cloudyScreen");
       }
       else if(weatherList[a] == "Rain")
       {
         setScreen("rainScreen");
       }
       else if(weatherList[a] == "Clear")
       {
         setScreen("clearScreen");
       }
    }
    
    else
    {
      setText("phoneNumberLogin", "Wrong login info. Please try again.");
    }
  }
});

//Controls the different screen switches from the buttons.
onEvent("newAccountButton", "click", function( ) {
  playSound("sound://category_app/app_button_click_1.mp3", false);
  setScreen("createAccountScreen");
});
onEvent("backButton1","click", function(){
  playSound("sound://category_app/app_button_click_1.mp3", false);
  setScreen("homeScreen");
});
onEvent("backButton2","click", function(){
  playSound("sound://category_app/app_button_click_1.mp3", false);
  setScreen("homeScreen");
});
onEvent("backButton3","click", function(){
  playSound("sound://category_app/app_button_click_1.mp3", false);
  setScreen("homeScreen");
});
onEvent("backButton4","click", function(){
  playSound("sound://category_app/app_button_click_1.mp3", false);
  setScreen("homeScreen");
});
onEvent("settingsButton", "click", function(){
  playSound("sound://category_app/app_button_click_1.mp3", false);
  setScreen("settingsScreen");
});
onEvent("account1Button", "click", function(){
  playSound("sound://category_app/app_button_click_1.mp3", false);
  setScreen("createAccountScreen");
});
onEvent("account2Button", "click", function(){
  playSound("sound://category_app/app_button_click_1.mp3", false);
  setScreen("createAccountScreen");
});
onEvent("account3Button", "click", function(){
  playSound("sound://category_app/app_button_click_1.mp3", false);
  setScreen("createAccountScreen");
});

