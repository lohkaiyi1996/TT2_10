using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("expenses")]
    public class ExpensesController : ControllerBase
    {
        private List<Expense> expenses; // change class accordingly

        public ExpenseController()
        {
            
        }

        // TASK 4
        // GET /expenses
        [HttpGet]
        public List<Expense> GetExpenses()
        {   
            expenses = getAllExpensesFromDB() // function not written yet, change accordingly
            return expenses;
        }

        // TASK 3
        // PUT /expenses
        [HttpPut]
        public ActionResult AddExpense(Expense expense)
        {
            if (expense is valid) // syntax? 
            {   
                expenses = getAllExpensesFromDB() // function not written yet, change accordingly
                // add expense
                expenses.add(Expense)
                updateAllExpensesInDB(); // function not written yet, change accordingly

                return Ok();
            }
            return Invalid(); // This is probably incorrect
        }
        

        // TASK 5
        // PUT /expenses/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateExpense(string id, Expense newExpense)
        {   
            targetExpense = getExpenseFromDB(id=id) // function not written yet, change accordingly
            if (targetExpense is null){
                return NotFound();
            }

            targetExpense = newExpense

            updateExpenseInDB(id=id); // function not written yet, change accordingly

            return Ok()

        }


    }
}