import { Person } from "../src/interfaces/Person";

export interface VariantDefinition {
    source: string,
    fetchUsers: () => Promise<Person[]>
}