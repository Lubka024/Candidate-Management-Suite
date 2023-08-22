import { DataGridScope, DateCell, DeleteEntityButton, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Interviews
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="recruiter/interview/create">
					Create new interview
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Interview" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="recruiter/interview/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<DateCell field="date" header="Date" />
				<DateCell field="time" header="Time" />
				<TextCell field="interviewers" header="Interviewer" />
				<HasOneSelectCell field="candidate" header="Candidate" options="Candidate.name" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
