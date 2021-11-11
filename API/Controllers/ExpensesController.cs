using API.Models;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace API.Controllers
{
    [ApiController]
    [Route("expenses")]
    //[Authorize]
    public class ExpensesController : ControllerBase
    {
        private readonly IExpensesService _expenseService;

        public ExpensesController(IExpensesService expensesService)
        {
            this._expenseService = expensesService;
        }

        // TASK 4
        // GET /expenses
        [HttpGet]
        public ActionResult<IEnumerable<Expense>> GetExpenses()
        {
            try
            {
                return Ok(_expenseService.GetAllExpensesFromDb());
            } 
            catch(Exception e)
            {
                if(e.InnerException != null)
                {
                    return Problem(e.InnerException.Message);
                }
                return Problem(e.Message);
            }
        }

        // TASK 3
        // PUT /expenses
        [HttpPut]
        public ActionResult AddExpense(Expense expense)
        {
            try
            {
                if (expense != null) // syntax? 
                {
                    var update = _expenseService.AddExpense(expense);
                    return update ? NoContent() : Problem();
                }
                return BadRequest();
            } 
            catch(Exception e)
            {
                if (e.InnerException != null)
                {
                    return Problem(e.InnerException.Message);
                }
                return Problem(e.Message);
            }
        }


        // TASK 5
        // PUT /expenses/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateExpense([FromRoute] int id, [FromBody] Expense newExpense)
        {
            try
            {
                var expense = _expenseService.GetExpense(id);

                if (expense == null) return NotFound();


                var update = _expenseService.UpdateExpense(newExpense);

                return update ? NoContent() : Problem("Unable to update");
            } 
            catch(Exception e)
            {
                if (e.InnerException != null)
                {
                    return Problem(e.InnerException.Message);
                }

                return Problem(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteExpense([FromRoute] int id)
        {
            try
            {
                var delete = _expenseService.DeleteExpense(id);
                return delete ? NoContent() : Problem();
            }
            catch(Exception e)
            {
                if (e.InnerException != null)
                {
                    return Problem(e.InnerException.Message);
                }

                return Problem(e.Message);
            }
         }


    }
}