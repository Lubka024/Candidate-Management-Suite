import { AclDefinition as acl } from '@contember/schema-definition'


export const recruiterRole = acl.createRole('recruiter', { stages: '*', s3: { ['**']: { upload: true, read: true } } })
export const personIdRecruiterVariable = acl.createPredefinedVariable('personId', 'personID', recruiterRole)
