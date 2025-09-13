




export class Person {
  constructor(fullName, birthDay) {
    this.fullName = fullName
    this.birthDay = birthDay
  }

  getInfo() {
    let age = new Date().getFullYear() - new Date(this.birthDay).getFullYear()
    return `Full name: ${this.fullName}, Age: ${age}`
  }
}
