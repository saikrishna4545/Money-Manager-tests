// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-amount-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="balance-image-size"
          alt="balance"
        />
        <div>
          <p className="balance-heading">Your Balance</p>
          <p className="balance-description" testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-amount-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="income-image-size"
          alt="income"
        />
        <div>
          <p className="income-heading">Your Income</p>
          <p className="income-description" testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-amount-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="expenses-image-size"
          alt="expenses"
        />
        <div>
          <p className="expenses-heading">Your Expenses</p>
          <p className="expenses-description" testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
