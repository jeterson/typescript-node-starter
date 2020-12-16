export interface DistanceDTO {
    text: string,
    value: number
}
export interface GoogleMapsDistanceResponseDTO {
    enderecoOrigem: string,
    enderecoDestino: string
    distancia: DistanceDTO
}