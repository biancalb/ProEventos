using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProEventos.API.Models
{
    public class Evento
    {
        public int EventoId { get; set; }
        public int Local { get; set; }
        public int DataEvento { get; set; }
        public int Tema { get; set; }
        public int QtdPessoas { get; set; }
        public int Lote { get; set; }
        public int ImagemURL { get; set; }
    }
}
