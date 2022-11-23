import PICTURES_FOLDER from "../common/picturesFolder";
import { Car } from "../types/Car.type";

export class AddImageUrlToCarsUsecase{
    execute(cars: Car[]){
        return cars.map((car)=>({...car, imageUrl: `${PICTURES_FOLDER}${car.id}.jpg`} as Car))
    }
}