using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WordOfTheDay_API.Models
{
    public class WordOfTheDayContext : DbContext
    {
        public WordOfTheDayContext(DbContextOptions<WordOfTheDayContext> options)
            : base(options)
        {
        }
        public DbSet<WordOfTheDay> Words { get; set; }
    }
}
