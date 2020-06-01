// Optional Оператор (?.)

const bill1 = {
  bank: {
    name: 'My Bank',
    amount: {
      value: 1000,
      currency: 'RUB'
    }
  }
}

const bill2 = {
  bank: {}
}

const getBillValueForm = (bill) => {
  // return bill.bank.amount.value
  return bill?.bank?.amount?.value
}

console.log(getBillValueForm(bill1))
console.log(getBillValueForm(bill2))