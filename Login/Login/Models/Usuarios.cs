namespace Login.Models
{
    public class Usuarios
    {

        private int id { get; set; }
        private string nome { get; set; }
        private string login { get; set; }
        private string senha { get; set; }

        public Usuarios(int id, string nome, string login, string senha)
        {
            this.id = id;
            this.nome = nome;
            this.login = login;
            this.senha = senha;
        }


        public Usuarios(string nome, string login, string senha)
        {
            this.nome = nome;
            this.login = login;
            this.senha = senha;
        }


        public Usuarios(string login, string senha)
        {
  
            this.login = login;
            this.senha = senha;
        }



        public Usuarios(int id)
        {
            this.id = id;
 
        }


        public override string ToString()
        {
            return base.ToString();
        }


        public override bool Equals(object obj)
        {
            return base.Equals(obj);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}