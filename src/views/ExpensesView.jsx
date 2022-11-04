import React from 'react'
import Button from '../Components/Button'
import Dropdown from '../Components/Dropdown'

const ExpensesView = () => {
  return (
    <div className='expenses-container flex flex-col mx-auto w-4/5 sm:w-3/5 lg:w-2/5 max-w-screen-lg rounded-xl bg-gradient-to-r from-secondary to-primary  ' >
      <h2 className='pl-5 pt-5'>Charge expenses</h2>
      <form className='w-full p-5 '>
          <div class="mb-3">
            <label for="concept" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mx-0">Concept</label>
            <input type="text" id="concept" className="input-area expenses bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Shops" maxLength={50} required/>
          </div>
          <div class="mb-3">
            <label for="spent" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mx-0">Amount</label>
            <div className='w-full flex dark:bg-gray-600 rounded-lg'>
              <Dropdown
                values={["ARS", "USD", "EUR"]}
                className={""}
                returnValue={console.log}
              />
              <input type="number" id="spent" class="bg-gray-50 border border-gray-300 border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min={1} required/>
            </div>
          </div>
          <div class="mb-6">
            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mx-0">Date</label>
            <input type="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <Button variant="secondary">Go ahead!</Button>
        </form>
    </div>
  )
}

export default ExpensesView