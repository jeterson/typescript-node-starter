import { GoogleMapsService } from "./GoogleMapsService";
import { Request, Response } from 'express'
import { LocationDTO } from "./LocationsDTO";
import { DistanceDTO, GoogleMapsDistanceResponseDTO } from "./GoogleMapsDistanceResponseDTO";
export class GoogleMapsController {

    constructor(private service: GoogleMapsService) { }

    async calculateDistance(req: Request, res: Response) {
        try {
            
            const { olat, olng, dlat, dlng } = req.query
            const location: LocationDTO = {
                origem: {
                    lat: parseFloat(olat),
                    lng: parseFloat(olng)
                },
                destino: {
                    lat: parseFloat(dlat),
                    lng: parseFloat(dlng)
                }
            }
            
             const data = await this.service.distance(location.origem, location.destino)            

             const getDistance = (data) => {
                 if(data.rows.length > 0) {
                     if(data.rows[0].elements.length > 0) {
                        return data.rows[0].elements[0].distance
                     }
                 }
             }
             
             const distance: GoogleMapsDistanceResponseDTO = {
                enderecoOrigem: data.origin_addresses ? data.origin_addresses[0] : null,
                enderecoDestino: data.destination_addresses ? data.destination_addresses[0] : null,
                distancia: getDistance(data)
             }

            res.send(distance)
        } catch (error) {
            console.log(error)
            res.status(error.status || 500).send(error)
        }
    }
}