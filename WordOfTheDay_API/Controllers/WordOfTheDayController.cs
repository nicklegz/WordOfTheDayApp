using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WordOfTheDay_API.Models;
using WordOfTheDay_API;

namespace WordOfTheDay_API.Controllers
{
    
    [ApiController]
    public class WordOfTheDayController : ControllerBase
    {
        private static Random random = new Random();
        private readonly WordOfTheDayContext _context;
        public WordOfTheDayController(WordOfTheDayContext context)
        {
            _context = context;
        }

        // GET: api/wordoftheday
        [HttpGet]
        [Route("api/newwords")]
        [Produces("application/json")]
        public async Task<ActionResult<IEnumerable<WordOfTheDay>>> GetNewWords()
        {
            return await _context.Words.Where(x => x.NumberTimesUsed == _context.Words.Min(x => x.NumberTimesUsed)).ToListAsync();
        }

        //GET: api/wordoftheday
        //returns a single random word of the day

        [HttpGet]
        [Route("api/wordoftheday")]
        [Produces("application/json")]
        public async Task<ActionResult<WordOfTheDay>> GetWordOfTheDay()
        {
            var words = await _context.Words.Where(x => x.NumberTimesUsed == _context.Words.Min(x => x.NumberTimesUsed)).ToListAsync();
            var word = words.ElementAt(random.Next(0, words.Count()));
            return word;
        }


        private bool WordOfTheDayExists(int id)
        {
            return _context.Words.Any(e => e.Id == id);
        }
    }
}
