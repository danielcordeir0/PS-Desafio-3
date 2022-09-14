function openblocks(home, total,botao,voltar) {
    if (document.getElementById(home).style.display !== "none") {
      document.getElementById(home).style.display = "none";
      document.getElementById(botao).style.display = "none";
      document.getElementById(total).style.display = "block";
      document.getElementById(voltar).style.display = "block";
      return;
    }
    Array.from(document.getElementsByClassName("hidden")).forEach(
      div => (div.style.display = "none")
    );
    document.getElementById(home).style.display = "block";
    
    }


 

  function closeblocks(home,totalPastel,totalBurg,totalchurros,totalmaca,botao,voltar,AlimentoPastel,AlimentoBurg,Alimentochurros,Alimentomaca,ingredientesPastel,ingredientesBurg,ingredienteschurros,ingredientesmaca) {
    if (document.getElementById(voltar).style.display !== "none") {
      document.getElementById(home).style.display = "";
      document.getElementById(botao).style.display = "block";
      document.getElementById(totalPastel).style.display = "none";
      document.getElementById(totalBurg).style.display = "none";
      document.getElementById(totalchurros).style.display = "none";
      document.getElementById(totalmaca).style.display = "none";
      document.getElementById(voltar).style.display = "none";
      document.getElementById(AlimentoPastel).style.display = "none";
      document.getElementById(AlimentoBurg).style.display = "none";
      document.getElementById(Alimentochurros).style.display = "none";
      document.getElementById(Alimentomaca).style.display = "none";
      document.getElementById(ingredientesPastel).style.display = "none";
      document.getElementById(ingredientesBurg).style.display = "none";
      document.getElementById(ingredienteschurros).style.display = "none";
      document.getElementById(ingredientesmaca).style.display = "none";
      return;
    }
    Array.from(document.getElementsByClassName("hidden")).forEach(
      div => (div.style.display = "none")
    );
    document.getElementById(voltar).style.display = "block";
  }  


  //<!-- ----------------HAMBURGUER----------------------- -->
//<!-- ----------------IMAGEM-ALIMENTO----------------------- -->
  function getSelectValueAlimentoburg(ingredientes,Alimento,botao,voltar,total)
  {
    var selectedValueAlimentoburg = document.getElementById("box-alimento-burg").value;
    console.log(selectedValueAlimentoburg);
    if (selectedValueAlimentoburg  == "Ingre")
    {
      document.getElementById(ingredientes).style.display = "block";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
    

    if (selectedValueAlimentoburg  == "Prato")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(Alimento).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueAlimentoburg  == "Modo")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
  }

  

  //<!-- ----------------PREPARO----------------------- -->
  function getSelectValueModoburg(ingredientes,Alimento,botao,voltar,total)
  {
    var selectedValueModoburg = document.getElementById("box-menu-burg").value;
    console.log(selectedValueModoburg);
    if (selectedValueModoburg  == "Ingre")
    {
      document.getElementById(ingredientes).style.display = "block";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
  

    if (selectedValueModoburg  == "Prato")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(Alimento).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueModoburg  == "Modo")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
  }

  //<!-- ----------------INGREDIENTES----------------------- -->

  function getSelectValueIngreburg(ingredientes,Alimento,botao,voltar,total)
  {
    var selectedValueingreburg = document.getElementById("box-ingre-burg").value;
    console.log(selectedValueingreburg);
    if (selectedValueingreburg == "Ingre")
    {
      document.getElementById(ingredientes).style.display = "block";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueingreburg == "Prato")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(Alimento).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueingreburg == "Modo")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
  }

  //<!-- ----------------------------------PASTEL----------------------- ------------------------------------------------------------------>
  function getSelectValueAlimentopastel(ingredientes,Alimento,botao,voltar,total)
  {
    const selectedValueAlimentopastel = document.getElementById("box-alimento-pastel").value;
    console.log(selectedValueAlimentopastel);
    if (selectedValueAlimentopastel  == "Ingre")
    {
      document.getElementById(ingredientes).style.display = "block";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
    

    if (selectedValueAlimentopastel  == "Prato")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(Alimento).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueAlimentopastel  == "Modo")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
    selectedValueAlimentopastel = null;
  }

  

  //<!-- ----------------PREPARO----------------------- -->
  function getSelectValueModopastel(ingredientes,Alimento,botao,voltar,total)
  {
    const selectedValueModopastel = document.getElementById("box-menu-pastel").value;
    console.log(selectedValueModopastel);
    if (selectedValueModopastel  == "Ingre")
    {
      document.getElementById(ingredientes).style.display = "block";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
  

    if (selectedValueModopastel  == "Prato")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(Alimento).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueModopastel  == "Modo")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
    selectedValueModopastel = null;
  }

  //<!-- ----------------INGREDIENTES----------------------- -->

  function getSelectValueIngrepastel(ingredientes,Alimento,botao,voltar,total)
  {
    const selectedValueingrepastel = document.getElementById("box-ingre-pastel").value;
    console.log(selectedValueingrepastel);
    if (selectedValueingrepastel == "Ingre")
    {
      document.getElementById(ingredientes).style.display = "block";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueingrepastel == "Prato")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(Alimento).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueingrepastel == "Modo")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
    selectedValueingrepastel = null;
  }

  //<!-- ----------------------------------CHURROS---------------------- ------------------------------------------------------------------>

  function getSelectValueAlimentochurros(ingredientes,Alimento,botao,voltar,total)
  {
    var selectedValueAlimentochurros = document.getElementById("box-alimento-churros").value;
    console.log(selectedValueAlimentochurros);
    if (selectedValueAlimentochurros  == "Ingre")
    {
      document.getElementById(ingredientes).style.display = "block";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
    

    if (selectedValueAlimentochurros  == "Prato")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(Alimento).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueAlimentochurros  == "Modo")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
  }

  

  //<!-- ----------------PREPARO----------------------- -->
  function getSelectValueModochurros(ingredientes,Alimento,botao,voltar,total)
  {
    var selectedValueModochurros = document.getElementById("box-menu-churros").value;
    console.log(selectedValueModochurros);
    if (selectedValueModochurros  == "Ingre")
    {
      document.getElementById(ingredientes).style.display = "block";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
  

    if (selectedValueModochurros  == "Prato")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(Alimento).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueModochurros  == "Modo")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
  }

  //<!-- ----------------INGREDIENTES----------------------- -->

  function getSelectValueIngrechurros(ingredientes,Alimento,botao,voltar,total)
  {
    var selectedValueingrechurros = document.getElementById("box-ingre-churros").value;
    console.log(selectedValueingrechurros);
    if (selectedValueingrechurros == "Ingre")
    {
      document.getElementById(ingredientes).style.display = "block";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueingrechurros == "Prato")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(Alimento).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueingrechurros == "Modo")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
  }
  //<!-- ----------------------------------Macarrao--------------------- ------------------------------------------------------------------>

  function getSelectValueAlimentomacarrao(ingredientes,Alimento,botao,voltar,total)
  {
    var selectedValueAlimentomacarrao = document.getElementById("box-alimento-macarrao").value;
    console.log(selectedValueAlimentomacarrao);
    if (selectedValueAlimentomacarrao == "Ingre")
    {
      document.getElementById(ingredientes).style.display = "block";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
    

    if (selectedValueAlimentomacarrao == "Prato")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(Alimento).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueAlimentomacarrao  == "Modo")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
  }

  

  //<!-- ----------------PREPARO----------------------- -->
  function getSelectValueModomacarrao(ingredientes,Alimento,botao,voltar,total)
  {
    var selectedValueModomacarrao = document.getElementById("box-menu-macarrao").value;
    console.log(selectedValueModomacarrao);
    if (selectedValueModomacarrao  == "Ingre")
    {
      document.getElementById(ingredientes).style.display = "block";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
  

    if (selectedValueModomacarrao  == "Prato")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(Alimento).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueModomacarrao  == "Modo")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
  }

  //<!-- ----------------INGREDIENTES----------------------- -->

  function getSelectValueIngremacarrao(ingredientes,Alimento,botao,voltar,total)
  {
    var selectedValueingremacarrao = document.getElementById("box-ingre-macarrao").value;
    console.log(selectedValueingremacarrao);
    if (selectedValueingremacarrao == "Ingre")
    {
      document.getElementById(ingredientes).style.display = "block";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueingremacarrao== "Prato")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(total).style.display = "none";
      document.getElementById(Alimento).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }

    if (selectedValueingremacarrao== "Modo")
    {
      document.getElementById(ingredientes).style.display = "none";
      document.getElementById(Alimento).style.display = "none";
      document.getElementById(total).style.display = "block";
      document.getElementById(botao).style.display = "none";
      document.getElementById(voltar).style.display = "block";
    }
  }