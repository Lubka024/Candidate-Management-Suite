import { Box, DataGrid, DateCell, DeleteEntityButton, DetailScope, DisplayTextField, Divider, GenericCell, Heading, LinkButton, Stack, TextCell } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Candidate detail
			</SlotSources.Title>
			<DetailScope entity="Candidate(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/candidate/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="small">
							<ArrowLeftIcon />
							Candidates
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/candidate/edit(id: $entity.id)">
						Edit candidate
					</LinkButton>
				</SlotSources.Actions>
				<Stack gap="xlarge">
					<Box data-elevated>
						<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="contactInfo" label="Contact info" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="positionAppliedFor" label="Position applied for" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="resume.name" label="File" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="status" label="Status" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="dateOfApplication" label="Date of application" labelPosition="labelLeft" />
					</Box>
					<Box data-elevated>
						<Stack horizontal justify="space-between" align="center">
							<Heading depth={2} size="small">
								Interviews
							</Heading>
							<LinkButton to="admin/interview/create">
								Create new interview
							</LinkButton>
						</Stack>
						<Divider gap={false} />
						<DataGrid entities="Interview[candidate.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/interview/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<DateCell field="date" header="Date" />
							<DateCell field="time" header="Time" />
							<TextCell field="interviewers" header="Interviewer" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
