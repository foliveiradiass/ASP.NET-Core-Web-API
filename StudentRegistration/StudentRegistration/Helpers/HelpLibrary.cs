using Newtonsoft.Json;
using StudentRegistration.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentRegistration.Helpers
{
    public class HelpLibrary
    {
        public static List<Student> DeserializeJson(string json)
        {
            try
            {
                List<Student> listObject = JsonConvert.DeserializeObject<List<Student>>(json);
                return listObject;
            }
            catch
            {
                return null;
            }
        }
    }
}
