import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { recruiterRole } from './acl'
import { Candidate } from './Candidate'


@acl.allow(recruiterRole, {
	read: true,
	create: true,
	update: true,
	delete: true,
})
export class Interview {
	date = def.dateTimeColumn()
	time = def.dateTimeColumn()
	interviewers = def.stringColumn()
	candidate = def.manyHasOne(Candidate, 'interviews')
	notes = def.stringColumn()
	scores = def.stringColumn()
	followUpActions = def.stringColumn()
}
