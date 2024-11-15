/** @format */

const useCurrentLocation = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (error) => {
        console.log(error, "msg errore");
      }
    );
  } else {
    /* geolocation IS NOT available */
  }
};

export default useCurrentLocation;
