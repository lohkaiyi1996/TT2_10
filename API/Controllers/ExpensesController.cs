using API.Models;
using API.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace API.Controllers
{
    [ApiController]
    [Route("expenses")]
    public class ExpensesController : ControllerBase
    {
        private readonly IExpensesService _expenseService; 

        public ExpensesController(IExpensesService  expensesService) 
        {
            this._expenseService = expensesService;
        }

        // TASK 4
        // GET /expenses
        [HttpGet]
        public IEnumerable<Expense> GetExpenses()
        {
            return _expenseService.GetAllExpensesFromDb();
        }

        // TASK 3
        // PUT /expenses
        [HttpPut]
        public ActionResult AddExpense(Expense expense)
        {
            if (expense != null) // syntax? 
            {
                var update = _expenseService.AddExpense(expense);
                return update ? NoContent() : Problem();
            }
            return BadRequest();
        }
        

        // TASK 5
        // PUT /expenses/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateExpense(string id, Expense newExpense)
        {
            var expense = _expenseService.GetExpense(id);

            if (expense == null) return NotFound();

            var update = _expenseService.UpdateExpense(newExpense);

            return update ? NoContent() : Problem();

        }


    }
}