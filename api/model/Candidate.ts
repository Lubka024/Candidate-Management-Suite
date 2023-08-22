import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { recruiterRole } from './acl'
import { CandidateStatus } from './enum'
import { File } from './File'
import { Interview } from './Interview'

@acl.allow(recruiterRole, {
	read: true,
	create: true,
	update: true,
	delete: true,
})
export class Candidate {
	name = def.stringColumn()
	contactInfo = def.stringColumn()
	positionAppliedFor = def.stringColumn()
	resume = def.manyHasOne(File, 'candidateResumes').setNullOnDelete()
	status = def.enumColumn(CandidateStatus)
	dateOfApplication = def.dateColumn()
	interviews = def.oneHasMany(Interview, 'candidate')
}
