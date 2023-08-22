import { SchemaDefinition as def } from '@contember/schema-definition'


export const CandidateStatus = def.createEnum('awaitingInterview', 'interviewed', 'rejected', 'accepted')
