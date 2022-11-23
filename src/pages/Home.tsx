import { Grid } from "@mui/material";
import { Key, useLayoutEffect, useMemo, useState } from "react";
import getCars from "../api/getCars";
import CarCard from "../components/CarCard";
import FilterInput from "../components/FilterInput";
import { Car } from "../types/Car.type";

function Home() {
  const [cars, setCars] = useState<Car[]>([]);

  const [rentDays, setRentDays] = useState<string>("");
  const [rentDistance, setRentDistance] = useState<string>("");

  useLayoutEffect(() => {
    const updateCars = async () => {
      const filteredCars = await getCars(
        parseInt(rentDays),
        parseInt(rentDistance)
      );
      setCars(filteredCars);
    };

    updateCars();
  }, [rentDays, rentDistance]);

  const carsList = useMemo(() => {
    return cars.map((car) => (
      <Grid item xs={12} sm={6} md={4} key={car.id as Key}>
        <CarCard car={car} />
      </Grid>
    ));
  }, [cars]);

  return (
    <Grid
      container
      spacing={4}
      alignItems={"center"}
      justifyContent={"center"}
      padding={5}
    >
      <Grid item sm={6}>
        <FilterInput onChange={setRentDays} value={rentDays} label={"Days"} />
      </Grid>
      <Grid item sm={6}>
        <FilterInput
          onChange={setRentDistance}
          value={rentDistance}
          label={"Distance"}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4} padding={0}>
          {carsList}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
