using Login.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Web.Mvc;
using System.Windows.Forms;

namespace Login.Controllers
{
    public class UsuariosController : Controller
    {



        [HttpPost]
        public Boolean excluirUsuario(int id)
        {

            int Id =  Int32.Parse(Request[""+id]);

            Usuarios Usuario = new Usuarios(Id);

            return true;


        }

        [HttpPost]
        public Boolean cadastrarUsuario(String nome, String login, String senha)
        {

            //   caso haja falha, retornar um http status

            return true;


        }


        /// <summary>
        /// sobre carga para alteracao dos dados menos a senha
        /// </summary>
        /// <param name="id"></param>
        /// <param name="nome"></param>
        /// <param name="login"></param>
        /// <returns></returns>
        [HttpPost]

        public Boolean alterarUsuario(int id, String nome, String login)
        {

            return true;


        }


        /// <summary>
        /// sobre carga para alteracao completa
        /// </summary>
        /// <param name="id"></param>
        /// <param name="nome"></param>
        /// <param name="login"></param>
        /// <param name="senha"></param>
        /// <returns></returns>
        [HttpPost]
        public Boolean alterarUsuario(int id, String nome, String login, String senha)
        {

            return true ;


        }

        /// <summary>
        /// Realizar um DTO - OBJECT e retornar o Json
        /// </summary>
        /// <returns></returns>
        public JsonResult obterListaUsuarios()
        {

           //DTO - object
          //    --> importante :  fazer um parse para object  



            return Json("seu json aqui", JsonRequestBehavior.AllowGet);


        }





        //renderizador

        public ActionResult TabelaUsuarios()
        {
            return View();
        }

    }
}