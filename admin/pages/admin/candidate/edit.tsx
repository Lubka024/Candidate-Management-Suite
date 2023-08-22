import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CandidateForm } from '../../../components/forms/CandidateForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit candidate
			</SlotSources.Title>
			<EditScope entity="Candidate(id=$id)" redirectOnSuccess="admin/candidate/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/candidate/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<CandidateForm />
			</EditScope>
		</>
	)
}
