import { Component, HasRole, Menu } from '@contember/admin'
import { CalendarIcon, UsersIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item icon={<UsersIcon />} title="Candidates" to="admin/candidate/list" />
		<Menu.Item icon={<CalendarIcon />} title="Interviews" to="admin/interview/list" />
	</HasRole>
	<HasRole role={roles => roles.has('recruiter')}>
		<Menu.Item icon={<UsersIcon />} title="Candidates" to="recruiter/candidate/list" />
		<Menu.Item icon={<CalendarIcon />} title="Interviews" to="recruiter/interview/list" />
	</HasRole>
</Menu>)
