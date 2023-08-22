import { AnyUploadField, Component, DateField, SelectField, TextField } from '@contember/admin'

export const CandidateForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="contactInfo" label="Contact info" />
	<TextField field="positionAppliedFor" label="Position applied for" />
	<AnyUploadField baseEntity="resume" urlField="url" fileNameField="name" fileTypeField="type" label="Resume" />
	<SelectField
		field="status"
		label="Status"
		options={[{ value: 'awaitingInterview', label: 'awaitingInterview' }, { value: 'interviewed', label: 'interviewed' }, { value: 'rejected', label: 'rejected' }, { value: 'accepted', label: 'accepted' }]}
		allowNull
	/>
	<DateField field="dateOfApplication" label="Date of application" />
</>)
