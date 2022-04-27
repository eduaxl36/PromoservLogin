using Login.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Login.Controllers
{
    public class AutenticacaoController : Controller
    {

        /// <summary>
        /// login
        /// </summary>
        /// <param name="nome"></param>
        /// <param name="login"></param>
        /// <param name="senha"></param>
        /// <returns></returns>
        public JsonResult autenticaUsuario(String nome, String login, String senha)
        {

            string Nome = Request[nome];
            string Login = Request[login];
            string Senha = Request[senha];

            Usuarios Usuario = new Usuarios(Nome, Login, Senha);


            ////este controler deve retornar um status http 404 ou similares caso usuario nao seja encontrado

            return Json("", JsonRequestBehavior.AllowGet);


        }


        /// <summary>
        /// logout
        /// </summary>
        /// <param name="login"></param>
        /// <param name="senha"></param>
        /// <returns></returns>
        public Boolean deslogarUsuario(String login, String senha)
        {

            string Login = Request[login];
            string Senha = Request[senha];

            Usuarios Usuario = new Usuarios(Login, Senha);

            return true;


        }

        public ActionResult Login()
        {
            return View();
        }
    }
}