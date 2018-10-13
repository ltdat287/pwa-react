export function getLocation(options) {
  if (navigator.geolocation) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const coords = showPositions(position);

        resolve(coords);
      }, function (error) {
        showLocationsErrors(error);
      }, options);
    });
  } else {
    console.log('Geo Location not supported by browser');
  }
}

function showPositions(position) {
  return {
    longitude: position.coords.longitude,
    latitude: position.coords.latitude,
  };
}

function showLocationsErrors(error) {
  console.log('location errors: ', locationError(error));
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
