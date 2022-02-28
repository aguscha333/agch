import { UserInputError } from '@redwoodjs/graphql-server'
import { Contact } from 'src/models'
import { filterRecordErrors } from 'src/utils/errors'

export const contacts = () => {
  return Contact.all()
}

export const createContact = async ({ input }) => {
  const contact = Contact.build(input)
  await contact.save()

  if (contact.hasError) {
    throw new UserInputError("Can't create new Contact", {
      messages: filterRecordErrors(contact.errors),
    })
  }

  return contact
}
