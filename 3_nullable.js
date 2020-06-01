const values = {
  undefined: undefined,
  null: null,
  false: false,
  zero: 0,
  empty: ''
}

console.log(values.undefined || 'default undefined')
console.log(values.undefined ?? 'default undefined') //default undefined

console.log(values.null || 'default null')
console.log(values.null ?? 'default null') // default null

console.log(values.false || 'default false')
console.log(values.false ?? 'default false') //false

console.log(values.zero || 'default zero')
console.log(values.zero ?? 'default zero') //0

console.log(values.empty || 'default empty')
console.log(values.empty ?? 'default empty') //''