import {type CreateExpressContextOptions} from '@trpc/server/adapters/express'
import type Umbreld from '../../../index.js'

export const createContext = ({req, res}: CreateExpressContextOptions) => {
	const umbreld = req.app.get('umbreld') as Umbreld
	const logger = req.app.get('logger') as Umbreld['logger']
	const server = umbreld.server
	const user = umbreld.user
	return {
		request: req,
		response: res,
		umbreld,
		server,
		user,
		logger,
		dangerouslyBypassAuthentication: false,
	}
}

export type Context = ReturnType<typeof createContext>
