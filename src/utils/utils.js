export function getLocation(options) {

  return new Promise(function (resolve, reject) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const coords = {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        };

        resolve(coords);
      }, function (error) {
        reject(locationError(error));
      }, options);
    } else {
      reject('Geo Location not supported by browser');
    }
  });
}

function locationError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      return "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      return "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      return "An unknown error occurred.";
      break;
  }
}
