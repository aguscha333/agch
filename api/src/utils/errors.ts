import { pickBy, isEmpty } from 'lodash'

export const filterRecordErrors = (errors: Record<string, string[]>) =>
  pickBy(errors, (value: string[]) => !isEmpty(value))
