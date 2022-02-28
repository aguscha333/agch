import {
  FieldError,
  Label,
  InputFieldProps,
  TextAreaFieldProps,
} from '@redwoodjs/forms'

interface FieldProps extends InputFieldProps {
  label: string
  component: React.FC<InputFieldProps | TextAreaFieldProps>
}

const Field: React.VFC<FieldProps> = ({
  name,
  label,
  component: Component,
  ...restProps
}) => {
  return (
    <div className="flex flex-col mb-4">
      <Label name={name} errorClassName="text-error">
        {label}
      </Label>
      <Component
        name={name}
        {...restProps}
        errorClassName="border-2 border-error"
      />
      <FieldError name="name" className="text-error" />
    </div>
  )
}

export default Field
