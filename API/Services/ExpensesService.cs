using API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface IExpensesService
    {
        IEnumerable<Expense> GetAllExpensesFromDb();
        bool AddExpense(Expense expense);
        bool UpdateExpense(Expense expense);
        Expense GetExpense(int id);
    }
    public class ExpensesService : IExpensesService
    {
        private readonly ExpenseContext _expenseContext;
        public ExpensesService(ExpenseContext expenseContext)
        {
            _expenseContext = expenseContext;
        }

        public Expense GetExpense(int id)
        {
            var expense = _expenseContext.Expenses.Find(id);

            return expense;
        }

        public IEnumerable<Expense> GetAllExpensesFromDb()
        {
            var expenses = _expenseContext.Expenses;
            return expenses;
        }

        public bool AddExpense(Expense expense)
        {
            _expenseContext.Expenses.Add(expense);
            var result = _expenseContext.SaveChanges();

            return result >= 1;
        }

        public bool UpdateExpense(Expense expense)
        {
            var originalExpense = _expenseContext.Expenses.Where(u => u.Id == expense.Id).FirstOrDefault();

            if(originalExpense is null)
            {
                return false;
            }

       
            _expenseContext.Entry(originalExpense).CurrentValues.SetValues(expense);
            var result = _expenseContext.SaveChanges();

            return result >= 1;

        }
    }
}
