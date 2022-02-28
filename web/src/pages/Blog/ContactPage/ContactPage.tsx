import {
  Form,
  FormError,
  Submit,
  TextAreaField,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'
import Field from 'src/components/ui/form/Field'

const CREATE_CONTACT_MUTATION = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()

  const [create, { loading, error }] = useMutation(CREATE_CONTACT_MUTATION, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <Toaster />
      <MetaTags title="Contact" description="Contact page" />

      <h1 className="text-2xl">Contact me</h1>
      <Form
        onSubmit={onSubmit}
        className="flex flex-col max-w-[500px]"
        config={{ mode: 'onBlur' }}
        formMethods={formMethods}
        error={error}
      >
        <FormError error={error} wrapperClassName="text-error my-2" />
        <Field
          name="name"
          label="Name"
          component={TextField}
          validation={{ required: true }}
        />
        <Field
          name="email"
          label="Email"
          component={TextField}
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
        />
        <Field
          name="message"
          label="Message"
          component={TextAreaField}
          validation={{ required: true }}
        />

        <Submit disabled={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
