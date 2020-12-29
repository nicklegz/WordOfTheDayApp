using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WordOfTheDay_API.Models;

namespace WordOfTheDay_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WordOfTheDayController : ControllerBase
    {
        private readonly WordOfTheDayContext _context;

        public WordOfTheDayController(WordOfTheDayContext context)
        {
            _context = context;
        }
        

        // GET: api/WordOfTheDay
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WordOfTheDay>>> GetWords()
        {
            int min = GetNewWords().Min(x => x.NumberTimesUsed);
            return await GetNewWords().Where(x => x.NumberTimesUsed == min).ToListAsync();
        }
        private IQueryable<WordOfTheDay> GetNewWords()
        {
            return _context.Words.AsQueryable();
        }

        private bool WordOfTheDayExists(int id)
        {
            return _context.Words.Any(e => e.Id == id);
        }
    }
}
