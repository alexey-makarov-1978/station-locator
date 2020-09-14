// encapsulates the station with methods to calculate the distance to the point
// as well as the power of the station to that point
export default function Station(location, reach) {
  this.Location = location;
  this.Reach = reach;

  this.getDistance = function (point) {
    return Math.sqrt(
      Math.pow(Math.abs(this.Location.X - point.X), 2) +
        Math.pow(Math.abs(this.Location.Y - point.Y), 2)
    );
  };

  this.getPower = function (point) {
    const distance = this.getDistance(point);
    return distance > this.Reach ? 0 : Math.pow(this.Reach - distance, 2);
  };
}
