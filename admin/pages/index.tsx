import { useEffect } from 'react'
import { useProjectUserRoles, useRedirect } from '@contember/admin'

export default () => {
	const redirect = useRedirect()
	const roles = useProjectUserRoles()
	useEffect(() => {
		if (roles.has('admin')) {
			redirect('admin/candidate/list'), [redirect]
		} else if (roles.has('recruiter')) {
			redirect('recruiter/candidate/list'), [redirect]
		}
	})
	return null
}
