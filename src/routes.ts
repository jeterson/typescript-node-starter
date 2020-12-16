import { Router, request, Request, Response } from 'express'
import { googleController } from '@useCases/GoogleMaps'


const router = Router()

router.get('/google-maps-service/distance', (req, res) => {
    return googleController.calculateDistance(req, res)
})

export { router }
