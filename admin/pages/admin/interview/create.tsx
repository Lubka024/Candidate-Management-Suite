import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { InterviewForm } from '../../../components/forms/InterviewForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create interview
			</SlotSources.Title>
			<CreateScope entity="Interview" redirectOnSuccess="admin/interview/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create interview" labelSaved="Create interview" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/interview/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="small">
							<ArrowLeftIcon />
							Interviews
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<InterviewForm />
				</>
			</CreateScope>
		</>
	)
}
