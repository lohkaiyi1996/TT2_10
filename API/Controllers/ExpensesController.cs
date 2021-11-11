namespace API.Controllers
{
    [ApiController]
    [Route("expenses")]
    public class ExpensesController : ControllerBase
    {
        private List<Expense> expenses; // change class accordingly

        public ExpenseController()
        {
            expenses = getExpensesFromDB() 
        }


        // GET /expenses
        [HttpGet]
        public List<Expense> GetExpenses()
        {
            return expenses;
        }


        // PUT /expenses
        [HttpPut]
        public ActionResult AddExpense(Expense expense):
        {
            if (expense is valid) // syntax? 
            {
                // add expense
                expenses.add(Expense)
                updateExpensesInDB();

                return Ok();
            }
            return Invalid(); // This is probably incorrect
        }
        
        
    }
}