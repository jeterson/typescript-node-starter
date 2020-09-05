import knexfile from '../knexfile'
import Knex, {Config} from 'knex'

const postgres = Knex(knexfile)

export {postgres}
