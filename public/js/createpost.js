// Get references to page elements
var $locationBtn = $(".locationBtn");
var $typeBtn=$(".typeBtn");
var $submit=$("");

// The API object contains methods for each kind of request we'll make
var API = {
      saveLocation: function (location) {
            return $.ajax({
                  headers: {
                        "Content-Type": "application/json"
                  },
                  type: "post",
                  url: "api/createpost",
                  data: JSON.stringify(location)
            }).then(function (err, data) {
                  if (err) throw err;
                  alert("---post--/api/createpost-----" + data);
            });
      },
      getLocation: function () {
            return $.ajax({
                  url: "api/createpost",
                  type: "get"
            });
      }
}
var refreshLocation = function () {
      API.getLocation().then(function (data) {
            alert.log("**888****", data);
            // $("#testId").text(data);
      });
};
var handleLocationFormSubmit = function (event) {
      event.preventDefault();
      // var location = {};
      var radioValue = $("input[name='locationNam']:checked").val();
      if (radioValue) {
            // alert("Your are a - " + radioValue);
            // location.location = radioValue;
            // localStorage.location = JSON.stringify(location);
            var locationVal = JSON.stringify(radioValue);
            // alert("locationVal:: " + locationVal);

            localStorage.setItem("locationVal", locationVal);
      } else {
            // alert("You must choice a location!");
            return;
      }

      // API.saveLocation(location).then(function () {
      //       // refreshLocation();
      //       console.log("----saveLocation--------");
      // });
      //Load createpostType page
      window.location.href = "/createpostType";
      // alert("window.location.href");

      // window.location.href = "/createpostType/?data" + location;
};
var handleTypeFormSubmit = function (event) {
      event.preventDefault();
      var radioTypeValue = $("input[name='typeNam']:checked").val();
      var radiocategoryValue = $("input[name='categoryNam']:checked").val();
      if (radioTypeValue) {
            // alert("Your are a - " + radioTypeValue+" + "+radiocategoryValue);
            // localStorage.location = JSON.stringify(location);
            var radioTypeVal = JSON.stringify(radioTypeValue);
            var radiocategoryVal = JSON.stringify(radiocategoryValue);
            localStorage.setItem("radioTypeValue", radioTypeVal);
            localStorage.setItem("radiocategoryValue", radiocategoryVal);
      } else {
            // alert("You must choice a location!");
            return;
      }
      //Load createpostType page
      window.location.href = "/createpostInfo";
};
$(document).on("click", ".locationBtn", handleLocationFormSubmit);
$(document).on("click", ".typeBtn", handleTypeFormSubmit);
