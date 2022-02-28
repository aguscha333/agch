import { RedwoodRecord } from '@redwoodjs/record'

export default class Contact extends RedwoodRecord {
  static validates = {
    name: { presence: true },
    email: { presence: true, email: true },
    message: { presence: true },
  }
}
