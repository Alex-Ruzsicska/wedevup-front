import { Car } from "../../types/Car.type";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type Props = {
  car: Car;
};

function CarCard({ car }: Props) {
  const image = car.imageUrl ? (
    <CardMedia component="img" height="140" image={car.imageUrl} />
  ) : null;

  return (
    <Card>
      {image}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${car.brand} ${car.model}`}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {`Price per day: ${car.pricePerDay}`}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {`Price per km: ${car.pricePerKm}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Max days: ${car.availability.maxDuration} `}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Max distance: ${car.availability.maxDistance}`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CarCard;
