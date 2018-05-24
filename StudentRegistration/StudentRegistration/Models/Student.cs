using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StudentRegistration.Models
{
    [Table("students")]
    public class Student
    {        
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage="Informe o campo Cpf")]
        public string Cpf { get; set; }

        [Required(ErrorMessage="Informe o campo Nome")]
        public string Name { get; set; }

        [Column("birth_date"), Required(ErrorMessage="Informe o campo Data Nasc")]
        public DateTime BirthDate { get; set; }

        [Column("date_register"), Required(ErrorMessage="Informe a Data de Cadastro")]
        public DateTime DateRegister { get; set; }

        [Column("date_update")]
        public Nullable<DateTime> DateUpdate { get; set; }
    }
}
