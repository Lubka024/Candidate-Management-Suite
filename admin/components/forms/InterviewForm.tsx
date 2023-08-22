import { Component, DateTimeField, SelectField, TextField } from '@contember/admin'

export const InterviewForm = Component(() => <>
	<DateTimeField field="date" label="Date" />
	<DateTimeField field="time" label="Time" />
	<TextField field="interviewers" label="Interviewer" />
	<SelectField field="candidate" label="Candidate" lazy options="Candidate.name" allowNull />
	<TextField field="notes" label="Note" />
	<TextField field="scores" label="Score" />
	<TextField field="followUpActions" label="Follow up action" />
</>)
