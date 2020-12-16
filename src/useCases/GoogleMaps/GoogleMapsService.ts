import { Client } from '@googlemaps/google-maps-services-js'
import { Position } from '@entities/Position';
const client  = new Client({})
export class GoogleMapsService {

    constructor() { }
   
    async distance(origem: Position, destino: Position): Promise<any> {
        try {
            
            const res = await client.distancematrix({
                params: {
                    origins: [{ lat: origem.lat, lng: origem.lng }],
                    destinations: [{ lat: destino.lat, lng: destino.lng }],
                    key: 'AIzaSyAUm8QE8kSOP69HCFN-ka8hMdLAUDULlmM',
                },
                timeout: 5000
            })
            return res.data;
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}