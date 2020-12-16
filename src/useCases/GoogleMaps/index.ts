import { GoogleMapsService } from "./GoogleMapsService";
import { GoogleMapsController } from "./GoogleMapsController";

const service = new GoogleMapsService()
const googleController = new GoogleMapsController(service)


export {googleController}