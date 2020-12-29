using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WordOfTheDay_API.Models
{
    public class WordOfTheDay
    {
        public int Id { get; set; }
        public string Word { get; set; }
        public string  Definition { get; set; }
        public string Type { get; set; }
        public int NumberTimesUsed { get; set; }
    }
}
