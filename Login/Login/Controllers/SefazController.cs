using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Login.Controllers
{
    public class SefazController : Controller
    {

        /// <summary>
        /// Realizar um DTO - OBJECT e retornar o Json
        /// </summary>
        /// <returns></returns>
        public JsonResult obterListaPedidosSefaz()
        {

            return Json("seu json aqui", JsonRequestBehavior.AllowGet);


        }

        [HttpPost]
        public Boolean statusAgendados(Boolean seletor)
        {
            Boolean estadoAgendador = Boolean.Parse(Request[""+seletor]);

            return true;

        }


        [HttpPost]
        public Boolean alterarChave(String chave)
        {
            String Chave = Request[chave];

            return true;


        }

        public ActionResult ListaSefaz()
        {
            return View();
        }


        public ActionResult ConfigSefaz()
        {
            return View();
        }

        
    }
}