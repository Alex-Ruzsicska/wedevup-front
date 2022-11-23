import axios from 'axios';

import API_BASE_URL from '../common/apiBaseUrl';
import { Car } from '../types/Car.type';
import { AddImageUrlToCarsUsecase } from '../useCases/AddimageUrlToCars.useCase';

const carsRoute = `${API_BASE_URL}cars`
const addImageUrlToCars = new AddImageUrlToCarsUsecase()

const getCars = async (rentDays?: Number, rentDistance?: Number) =>{
    let params: {rentDays?: Number, rentDistance?: Number} = {}

    if(rentDays){
        params.rentDays = rentDays
    }

    if(rentDistance){
        params.rentDistance = rentDistance
    }

    const response = await axios.get(carsRoute, {params})

    const cars: Car[] = response.data ? addImageUrlToCars.execute(response.data) : []

    return cars
}

export default getCars