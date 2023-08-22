import { DataGridScope, DateCell, DeleteEntityButton, EnumCell, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Candidates
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="recruiter/candidate/create">
					Create new candidate
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Candidate" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="recruiter/candidate/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell field="name" header="Name" />
				<TextCell field="contactInfo" header="Contact info" />
				<TextCell field="positionAppliedFor" header="Position applied for" />
				<EnumCell
					options={{ awaitingInterview: 'awaitingInterview', interviewed: 'interviewed', rejected: 'rejected', accepted: 'accepted' }}
					field="status"
					header="Status"
				/>
				<DateCell field="dateOfApplication" header="Date of application" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
