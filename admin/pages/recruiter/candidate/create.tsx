import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CandidateForm } from '../../../components/forms/CandidateForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create candidate
			</SlotSources.Title>
			<CreateScope entity="Candidate" redirectOnSuccess="recruiter/candidate/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create candidate" labelSaved="Create candidate" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="recruiter/candidate/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="small">
							<ArrowLeftIcon />
							Candidates
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<CandidateForm />
				</>
			</CreateScope>
		</>
	)
}
