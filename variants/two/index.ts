import { Person } from '../../src/interfaces/Person';
import {VariantDefinition} from '../definition';

const definition: VariantDefinition = {
    source: 'two',
    fetchUsers: async () => {
        const res = await fetch("https://reqres.in/api/users?page=2")
        const data = await res.json();
        return data.data as Person[];
    }
}

export default definition;