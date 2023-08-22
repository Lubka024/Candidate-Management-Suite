import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { recruiterRole } from './acl'
import { Candidate } from './Candidate'


@acl.allow(recruiterRole, {
	read: true,
	create: true,
	delete: true,
})
export class File {
	url = def.stringColumn().notNull()
	size = def.intColumn()
	type = def.stringColumn()
	name = def.stringColumn()
	createdAt = def.dateTimeColumn().notNull().default('now')
	candidateResumes = def.oneHasMany(Candidate, 'resume')
}
