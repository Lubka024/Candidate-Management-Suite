import { Box, DetailScope, DisplayTextField, Divider, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Interview detail
			</SlotSources.Title>
			<DetailScope entity="Interview(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/interview/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="small">
							<ArrowLeftIcon />
							Interviews
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/interview/edit(id: $entity.id)">
						Edit interview
					</LinkButton>
				</SlotSources.Actions>
				<Stack gap="xlarge">
					<Box data-elevated>
						<DisplayTextField field="date" label="Date" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="time" label="Time" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="interviewers" label="Interviewer" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="candidate.name" label="Candidate" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="notes" label="Note" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="scores" label="Score" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="followUpActions" label="Follow up action" labelPosition="labelLeft" />
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
