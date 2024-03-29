﻿
function GuardarExamenFisico() {
    idpaciente = 21;//$('#identificacion').text();
    tension_art_sist = $('#tension_sistolica').val();
    tension_art_dist = $('#tension_diastolica').val();
    frec_cardiaca = $('#frec_cardiaca').val();
    frec_respiratoria = $('#frec_respiratoria').val();
    temperatura = $('#temp').val();
    peso = $('#peso').val();
    talla = $('#talla').val();
    tension_art_media = $('#tension_media').val();
    imc = $('#imc').val();
    aspecto_gen_paciente = $('input:radio[name=aspecto_gen]:checked').val();
    cabeza = $('input:radio[name=cabeza]:checked').val();
    cuello = $('input:radio[name=cuello]:checked').val();
    torax = $('input:radio[name=torax]:checked').val();
    pulmon = $('input:radio[name=pulmon]:checked').val();
    exam_cardiovas = $('input:radio[name=ecardio]:checked').val();
    abdomen = $('input:radio[name=abdomen]:checked').val();
    genitales = $('input:radio[name=genitales]:checked').val();
    musculoesq = $('input:radio[name=musculo]:checked').val();
    neurologico = $('input:radio[name=neuro]:checked').val();
    piel = $('input:radio[name=piel]:checked').val();
    fanera = $('input:radio[name=fanera]:checked').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
       
        // data:JSON.stringify(object),        
        data: "{idpaciente:" + JSON.stringify(idpaciente) +
              ",tension_art_sist:" + JSON.stringify(tension_art_sist) +
              ",tension_art_dist:" + JSON.stringify(tension_art_dist) +
              ",frec_cardiaca:" + JSON.stringify(frec_cardiaca) +
              ",frec_respiratoria:" + JSON.stringify(frec_respiratoria) +
              ",temperatura:" + JSON.stringify(temperatura) +
              ",peso:" + JSON.stringify(peso) +
              ",talla:" + JSON.stringify(talla) +
              ",tension:" + JSON.stringify(tension_art_media) +
              ",imc:" + JSON.stringify(imc) +
              /*",aspecto:" + JSON.stringify(aspecto_gen_paciente) +
              ",cabeza:" + JSON.stringify(cabeza) +
              ",cuello:" + JSON.stringify(cuello) +
              ",torax:" + JSON.stringify(torax) +
              ",pulmon:" + JSON.stringify(pulmon) +
              ",exam_cardiovas:" + JSON.stringify(exam_cardiovas) +
              ",abdomnen:" + JSON.stringify(abdomen) +
              ",genitales:" + JSON.stringify(genitales) +
              ",musculo:" + JSON.stringify(musculoesq) +
              ",neurologico:" + JSON.stringify(neurologico) +
              ",piel:" + JSON.stringify(piel) +
              ",fanera:" + JSON.stringify(fanera) +*/
              "}",
        url: "/Examen/GuardarExamen",
        success: function (data) {
            if (data == 1) {

                //$("#mensaje").html("Se ha Registrado la Ana guardado exitosamente").fadeIn("slow");
                $("#mensaje").html("&nbsp;&nbsp;&nbsp; Examen Físico guardado exitosamente").css({ 'color': 'green' });
            }
            else {
                $("#mensaje").html("&nbsp;&nbsp;&nbsp;  No se completo con éxito el registro").css({ 'color': 'red' });
            }

        },
        error: function (result) {
            //alert("ha ocurrido un error");
            $("#mensaje").html(" &nbsp;&nbsp;&nbsp;Ha Ocurrido un error en el proceso").css({ 'color': 'red' });
        }
    });
              
}


function GuardarAntecedentes() {
    idpaciente = $('#identificacion').text();
    ant_hipert = $('input:radio[name=radio_hiper]:checked').val();
    obs_org = $('input:text[name=obs_ant_hiper]').val();
    cardiopatia = $('input:radio[name=radio_cardio]:checked').val();
    obs_cardiopatia = $('input:text[name=obs_cardio]').val();
    infarto_miocardio = $('input:radio[name=radio_infarto]:checked').val();
    obs_infarto = $('input:text[name=obs_infarto]').val();
    otrapato = $('#otrapato').val();
    obs_otrapato = $('input:text[name=obs_otrapato]').val();
    ant_cirugia = $('#ant_cirugia').val();
    obs_ant_cirugia = $('input:text[name=obs_ant_cirugia]').val();
    traumatico = $('input:radio[name=radio_trauma]:checked').val();
    obs_traumatico = $('input:text[name=obs_trauma]').val();
    toxico = $('input:radio[name=radio_toxico]:checked').val();
    obs_toxico = $('input:text[name=obs_toxico]').val();
    transfusion = $('input:radio[name=radio_trans]:checked').val();
    obs_transfusion = $('input:text[name=obs_trans]').val();
    hospitalario = $('input:radio[name=radio_hosp]:checked').val();
    obs_hospitalario = $('input:text[name=obs_hosp]').val();
    alergicos = $('input:radio[name=radio_alerg]:checked').val();
    obs_alergicos = $('input:text[name=obs_alerg]').val();
    gineco = $('input:radio[name=radio_gineco]:checked').val();
    obs_gineco = $('input:text[name=obs_gineco]').val();
    familiares = $('#famipato').val(); 
    tabaquismo = $('input:radio[name=tabaco]:checked').val();
    conducta_alimento = $('input:radio[name=alimentacion]:checked').val();
    estres = $('#estres').val();
    otro = $('#otro').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
       
        // data:JSON.stringify(object),        
        data: "{idpaciente:" + JSON.stringify(idpaciente) +
              ",ant_hipert :" + JSON.stringify(ant_hipert) +
              ",obs_ant_hipert:" + JSON.stringify(obs_org) +
              ",cardiopatia :" + JSON.stringify(cardiopatia) +
              ",obs_cardiopatia:" + JSON.stringify(obs_cardiopatia) +
              ",infarto_miocardio:" + JSON.stringify(infarto_miocardio) +
              ",obs_infarto:" + JSON.stringify(obs_infarto) +
              ",otrapato:" + JSON.stringify(otrapato) +
              ",obs_otrapato:" + JSON.stringify(obs_otrapato) +
              ",ant_cirugia:" + JSON.stringify(ant_cirugia) +
              ",obs_ant_cirugia:" + JSON.stringify(obs_ant_cirugia) +
              ",traumatico:" + JSON.stringify(traumatico) +
              ",obs_traumatico:" + JSON.stringify(obs_traumatico) +
              ",toxico:" + JSON.stringify(toxico) +
              ",obs_toxico:" + JSON.stringify(obs_toxico) +
              ",transfusion:" + JSON.stringify(transfusion) +
              ",obs_transfusion:" + JSON.stringify(obs_transfusion) +
              ",hospitalario:" + JSON.stringify(hospitalario) +
              ",obs_hospitalario:" + JSON.stringify(obs_hospitalario) +
              ",alergicos:" + JSON.stringify(alergicos) +
              ",obs_alergicos:" + JSON.stringify(obs_alergicos) +
              ",gineco:" + JSON.stringify(gineco) +
              ",obs_gineco:" + JSON.stringify(obs_gineco) +
              ",familiares:" + JSON.stringify(familiares) +
              ",tabaquismo:" + JSON.stringify(tabaquismo) +
              ",conducta_alimento:" + JSON.stringify(conducta_alimento) +
              ",estres:" + JSON.stringify(estres) +
              ",otro:" + JSON.stringify(otro) +
              "}",
          url: "/Antecedentes/GuardarAntecedentes",
          success: function (data) {
              if (data == 1) {

                  //$("#mensaje").html("Se ha Registrado la Ana guardado exitosamente").fadeIn("slow");
                  $("#mensaje").html("&nbsp;&nbsp;&nbsp; Antecedentes guardado exitosamente").css({ 'color': 'green' });
              }
              else {
                  $("#mensaje").html("&nbsp;&nbsp;&nbsp;  No se completo con éxito el registro").css({ 'color': 'red' });
              }

          },
          error: function (result) {
              //alert("ha ocurrido un error");
              $("#mensaje").html(" &nbsp;&nbsp;&nbsp;Ha Ocurrido un error en el proceso").css({ 'color': 'red' });
          }
      });
}

function GuardarAnamnesis() {
    idpaciente = $('#identificacion').val();
    motivo_consulta = $('#motivoconsulta').val();
    enfermedadact = $('#enfermedadact').val();
    radio_org = $('input:radio[name=radio_org]:checked').val(); 
    obs_org =  $('input:text[name=obs_org]').val();
    radio_scardio = $('input:radio[name=radio_scardio]:checked').val();
    obs_cardio = $('input:text[name=obs_cardio]').val();
    radio_respi =  $('input:radio[name=radio_respi]:checked').val();
    obs_respi = $('input:text[name=obs_respi]').val();
    radio_digestivo = $('input:radio[name=radio_digestivo]:checked').val();
    obs_digestivo = $('input:text[name=obs_digestivo]').val();
    radio_genito = $('input:radio[name=radio_genito]:checked').val();
    obs_genito = $('input:text[name=obs_genito]').val();
    radio_endocrino = $('input:radio[name=radio_endocrino]:checked').val();
    obs_endocrino = $('input:text[name=obs_endocrino]').val();
    radio_hemato = $('input:radio[name=radio_hemato]:checked').val();
    obs_hemato = $('input:text[name=obs_hemato]').val();
    radio_musculo = $('input:radio[name=radio_musculo]:checked').val();
    obs_musculo = $('input:text[name=obs_musculo]').val();
    radio_nervioso = $('input:radio[name=radio_nervioso]:checked').val();
    obs_nervioso = $('input:text[name=obs_nervioso]').val();
    radio_mental = $('input:radio[name=radio_mental]:checked').val();
    obs_mental = $('input:text[name=obs_mental]').val();
    radio_tegumentario = $('input:radio[name=radio_tegumentario]:checked').val();
    obs_tegumentario = $('input:text[name=obs_tegumentario]').val();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
       
        // data:JSON.stringify(object),        
        data: "{idpaciente:" + JSON.stringify(idpaciente) +
              ",motivo_consulta:" + JSON.stringify(motivo_consulta) +
              ",enfermedad_actual:" + JSON.stringify(enfermedadact) +
              ",organos:" + JSON.stringify(radio_org) +
              ",obs_organos:" + JSON.stringify(obs_org) +
              ",sist_cardio:" + JSON.stringify(radio_scardio) +
              ",obs_cardio:" + JSON.stringify(obs_cardio) +
              ",sist_respi:" + JSON.stringify(radio_respi) +
              ",obs_respi:" + JSON.stringify(obs_respi) +
              ",digestivo:" + JSON.stringify(radio_digestivo) +
              ",obs_digestivo:" + JSON.stringify(obs_digestivo) +
              ",sist_genito:" + JSON.stringify(radio_genito) +
              ",obs_sist_genito:" + JSON.stringify(obs_genito) +
              ",sist_endocrino:" + JSON.stringify(radio_endocrino) +
              ",obs_endocrino:" + JSON.stringify(obs_endocrino) +
              ",sist_hemato:" + JSON.stringify(radio_hemato) +
              ",obs_hemato:" + JSON.stringify(obs_hemato) +
              ",sist_musculoesq:" + JSON.stringify(radio_musculo) +
              ", obs_sist_musculoesq:" + JSON.stringify(obs_musculo) +
              ",sist_nervioso:" + JSON.stringify(radio_nervioso) +
              ",obs_nervioso:" + JSON.stringify(obs_nervioso) +
              ",estado_mental:" + JSON.stringify(radio_mental) +
              ",obs_mental:" + JSON.stringify(obs_mental) +
              ",sist_tegumentario:" + JSON.stringify(radio_tegumentario) +
              ",obs_tegu:" + JSON.stringify(obs_tegumentario) +
              "}",
        url: "/Anamnesis/GuardarAnamnesis",
        success: function (data) {
            if (data == 1) {

                //$("#mensaje").html("Se ha Registrado la Ana guardado exitosamente").fadeIn("slow");
                $("#mensaje").html("&nbsp;&nbsp;&nbsp; Anamnesis guardado exitosamente").css({ 'color': 'green' });
            }
            else {
                $("#mensaje").html("&nbsp;&nbsp;&nbsp;  No se completo con éxito el registro").css({ 'color': 'red' });
            }

        },
        error: function (result) {
            //alert("ha ocurrido un error");
            $("#mensaje").html(" &nbsp;&nbsp;&nbsp;Ha Ocurrido un error en el proceso").css({ 'color': 'red' });
        }
    });
}

function GuardarAdmision() {
    historia = $('#historia').val();
    fechaadm = $('#fechaadm').val();
    idocontrato = $('select[name="idcontrato"]').val();
    idprograma = $('select[name="idprograma"]').val();
    acompa = $('#acompa').val();
    parentesco = $('#parentesco').val();    
    direccion = $('#direccion').val();
    telefono = $('#telefono').val();
    responsable = $('#responsable').val();
    observaciones = $('#observaciones').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        // data:JSON.stringify(object),        
        data: "{historia:" + JSON.stringify(historia) +
              ",fechaadm:" + JSON.stringify(fechaadm) +
              ",idocontrato:" + JSON.stringify(idocontrato) +
              ",idprograma:" + JSON.stringify(idprograma) +
              ",acompa:" + JSON.stringify(acompa) +
              ",parentesco:" + JSON.stringify(parentesco) +              
              ",direccion:" + JSON.stringify(direccion) +
              ",telefono:" + JSON.stringify(telefono) +
              ",responsable:" + JSON.stringify(responsable) +
              ",observaciones:" + JSON.stringify(observaciones) +              
              "}",
        url: "/Admisiones/GuardarAdmision",
        success: function (data) {
            if (data == 1) {
                //$("#mensaje").html("Paciente guardado exitosamente").fadeIn("slow");
                $("#mensaje").html("&nbsp;&nbsp;&nbsp; Admisión se ha guardado exitosamente").css({ 'color': 'green' });
            }
            else {
                $("#mensaje").html("&nbsp;&nbsp;&nbsp;  No se completo con éxito el registro del paciente").css({ 'color': 'red' });
            }

        },
        error: function (result) {
            //alert("ha ocurrido un error");
            $("#mensaje").html(" &nbsp;&nbsp;&nbsp;Ha Ocurrido un error en el proceso").css({ 'color': 'red' });
        }
    });

}

function GuardarPaciente() {
    par_id = $('#identificacion').val();
    tipodoc = $('select[name="tipodoc"]').val();
    papellido = $('#primerApellido').val();
    sapellido = $('#segundoApellido').val();
    pnombre = $('#primerNombre').val();
    snombre = $('#segundoNombre').val();
    fechanac = $('#fechanac').val();
    sexo = $('select[name="sexo"]').val();
    direccion = $('#direccion').val();
    telefono = $('#telefono').val();
    email = $('#email').val();
    municipio = $('select[name="municipio"]').val();
    barrio = $('#barrio').val();
    zona = $('select[name="zona"]').val();
    educativo = $('select[name="educativo"]').val();
    ocupacion = $('select[name="ocupacion"]').val();
    etnia = $('select[name="etnia"]').val();

    //var object = { '"id"': 18 };

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
       
        // data:JSON.stringify(object),        
        data: "{id:" + JSON.stringify(par_id) +
              ",tipodoc:" + JSON.stringify(tipodoc) +
              ",papellido:" + JSON.stringify(papellido) +
              ",sapellido:" + JSON.stringify(sapellido) +
              ",pnombre:" + JSON.stringify(pnombre) +
              ",snombre:" + JSON.stringify(snombre) +
              ",fechanac:" + JSON.stringify(fechanac) +
              ",sexo:" + JSON.stringify(sexo) +
              ",direccion:" + JSON.stringify(direccion) +
              ",telefono:" + JSON.stringify(telefono) +
              ",email:" + JSON.stringify(email) +
              ",municipio:" + JSON.stringify(municipio) +
              ",barrio:" + JSON.stringify(barrio) +
              ",zona:" + JSON.stringify(zona) +
              ",educativo:" + JSON.stringify(educativo) +
              ",ocupacion:" + JSON.stringify(ocupacion) +
              ",etnia:" + JSON.stringify(etnia) +
              "}",
       

        url: "/Paciente/GuardarPaciente",
        success: function (data) {
            if (data == 1) {

                //$("#mensaje").html("Paciente guardado exitosamente").fadeIn("slow");
                //$("#mensaje").html("&nbsp;&nbsp;&nbsp; Paciente guardado exitosamente").css({ 'color': 'green' });
                //$("#mensaje").html("<div class='alert alert-success fade in'><a href='#' class='close' data-dismiss='alert'>&times;</a><strong>Success!</strong> Your message has been sent successfully.</div>");
                $("#mostrarmodal").modal("show");
                $("#mensaje").html("Paciente se ha Guardado Exitosamente");


            }
            else {
                $("#mostrarmodal").modal("show");
                $("#mensaje").html("Ha ocurrido un error al registrar el paciente");
                //$("#mensaje").html("&nbsp;&nbsp;&nbsp;  No se completo con éxito el registro del paciente").css({ 'color': 'red' });
            }
           
        },
        error: function (result) {
            //alert("ha ocurrido un error");
            $("#mostrarmodal").modal("show");            
            $("#mensaje").html(" Ha Ocurrido un error en el proceso de registro del paciente").css({ 'color': 'red' });
        }
    });
}

function obtenerPaciente() {
    var identificacion = $("#identificacion").val();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",        
        url: "/Eventos_Programacion/obtenerPaciente?identificacion="+identificacion,
        dataType:'json',
        success: function (data) {
            $('#lbdocumento').html(data[0].id);
            //alert(data[0].id);
            $('#lbapellido').html(data[0].papellido);    
            $('#lbnombre').html(data[0].pnombre);            
            var cadena = data[0].fechanac;
            var res = cadena.substring(0, 10);            
            var edad = calcular_edad(res);
            $('#lbfecha').html(res);
            $('#lbedad').html(edad);
            $('#lbsexo').html(data[0].sexo);

        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function obtenerDatos() {
    var cedula = $("#identificacion").text();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: "/Paciente/obtenerPaciente?cedula=" + cedula,
        dataType: 'json',
        success: function (data) {
            $('#lbdocumento').html(data[0].id);
            //alert(data[0].id);
            $('#lbapellido').html(data[0].papellido);
            $('#lbnombre').html(data[0].pnombre);
            var cadena = data[0].fechanac;
            var res = cadena.substring(0, 10);
            var edad = calcular_edad(res);
            $('#lbfecha').html(res);
            $('#lbedad').html(edad);
            $('#lbsexo').html(data[0].sexo);

        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function ListarInasistenteFecha() {    
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: "/Eventos_Programacion/ListarInasistenteFecha",
        dataType: 'json',
        success: function (consulta) {
            new Chart(document.getElementById("myAreaChart"), {
                type: 'bar',
                data: {
                    labels: ["Julio", "Agosto",
                        "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    datasets: [
                        {
                            label: "Pacientes Inasistentes",
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#FF7F50"],
                            data: [5587, 6349, 6061, 6351, 6175, 5467]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Gráfica deserción de pacientes'
                    }
                }
            }); 
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function ChartAgenda() {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: "/Eventos_Programacion/ChartAgenda",
        dataType: 'json',
        success: function (consulta) {
            new Chart(document.getElementById("myAreaChart"), {
                type: 'line',
                data: {
                    labels: ["Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    datasets: [{
                        data: [34179, 36496, 36018, 37350, 34999, 27607],
                        label: "Citas Asignadas",
                        borderColor: "#3e95cd",
                        fill: false
                    }, {
                        data: [5587,6349,6061,6351,6175,5467],
                        label: "No asistidas",
                        borderColor: "#8e5ea2",
                        fill: false
                    }, {
                        data: [28592, 30147, 29957, 30999, 28824, 22145],
                        label: "Asistidas",
                        borderColor: "#3cba9f",
                        fill: false
                    }
                    
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Análisis general de agendamiento (últimos 6 meses) '
                    }
                }
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function ChartAgendaEPS() {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: "/Eventos_Programacion/ChartAgendEPS",
        dataType: 'json',
        success: function (consulta) {
            new Chart(document.getElementById("ChartEps"), {
                type: 'bar',
                data: {
                    labels: ["Ambuq", "Cajacopi", "NuevaEPS", "Saludvida", "Mutualser", "Coosalud", "Comfacor", "Sisben"],
                    datasets: [
                        {
                            label: "Citas",
                            backgroundColor: ["#8e5ea2", "#3e95cd", "#3cba9f", "#FF5733", "#F7DC6F", "#F5B041", "#F5B7B1","#D98880"],
                            data: [4690, 5602, 4302, 1027, 6451,2996,1353,1153]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Agendamiento mes de diciembre 2018 por Eps'
                    }
                }
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}


function ListarInasistenteFecha1() {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: "/Eventos_Programacion/ListarInasistenteFecha",
        dataType: 'json',
        success: function (consulta) {
            new Chart(document.getElementById("myAreaChart"), {
                type: 'bar',
                data: {
                    labels: ["Julio", "Agosto",
                        "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    datasets: [
                        {
                            label: "Pacientes que no asistieron",
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#3e95cd", "#8e5ea2", "#3cba9f"],
                            data: [2478, 5267, 734, 784, 433, 1300]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Ultimos 6 meses'
                    }
                }
            });

        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

//function ListaPorPaciente() {
function ListaEventoMedicoFecha() {
    fechaini = $("#fechaini").val();
    fechafin = $("#fechafin").val();    
    codigomedico = $("#codigomedico").val();    
    //$('#loading').show();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: '/Eventos_Programacion/ListaEventoMedicoFecha?fechaini=' + fechaini + '&fechafin=' + fechafin + '&codigomedico=' + codigomedico,
        dataType: 'json',
        beforeSend: function () {
            document.getElementById("loading").style.display = "block";
            document.getElementById("loading").innerHTML = "<img src='../images/cargando.gif' width='32' height='32'/>";
        },

        success: function (data) {
            document.getElementById("loading").style.display = "none";            
            $('#tbl').DataTable({                

                destroy: true,
                searching: true,
                "pagingType": "full_numbers",
                language: {
                    "decimal": "",
                    "emptyTable": "No hay información",
                    "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
                    "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
                    "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                    "infoPostFix": "",
                    "thousands": ",",
                    "lengthMenu": "Mostrar _MENU_ Entradas",
                    "loadingRecords": "Cargando...",
                    "processing": "Procesando...",
                    "search": "Buscar:",
                    "zeroRecords": "Sin resultados encontrados",
                    "paginate": {
                        "first": "Primero",
                        "last": "Ultimo",
                        "next": "Siguiente",
                        "previous": "Anterior"
                    }
                },

                fields: [{
                    label: 'Hora:',
                    type: 'datetime',
                    def: function () { return new Date(); },
                    format: 'h:mm AHH:mm:ss',
                    fieldInfo: '24 hour clock format'
                }, {
                    label: 'Historia Clínica:',                    
                }, {
                    label: 'Paciente:',                    
                }, {
                    label: 'Evento:',                                        
                }, {
                    label: 'Servicio:',                    
                }, {
                    label: 'Fecha:',
                }, {
                    label: 'IPS:',
                }, {
                    label: 'Asistió:',
                }, {
                    label: 'Teléfonos:',
                }, {
                    label: 'Agente:',
                }, 


                ],
                
                data: data,
                columns: [
                    { data: 'HoraIni' },
                    { data: 'HistClinica' },
                    { data: 'Paciente' },
                    { data: 'NomEvento' },
                    { data: 'NomServicio' },
                    { data: 'Fecha' },
                    { data: 'Nombre' },
                    { data: 'Asist' },
                    { data: 'Telefonos' },
                    { data: 'SystemUser' },
                ],
                
            })                        
            
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function ListaEventoAgenteFecha() {
    fechaini = $("#fechaini").val();
    fechafin = $("#fechafin").val();
    codigoagente = $("#codigoagente").val();
    //$('#loading').show();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: '/Eventos_Programacion/ListaEventoAgenteFecha?fechaini=' + fechaini + '&fechafin=' + fechafin + '&codigoagente=' + codigoagente,
        dataType: 'json',
        beforeSend: function () {
            document.getElementById("loading").style.display = "block";
            document.getElementById("loading").innerHTML = "<img src='../images/cargando.gif' width='32' height='32'/>";
        },

        success: function (data) {
            document.getElementById("loading").style.display = "none";
            $('#tbl').DataTable({
                destroy: true,
                searching: true,
                "pagingType": "full_numbers",
                language: {
                    "decimal": "",
                    "emptyTable": "No hay información",
                    "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
                    "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
                    "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                    "infoPostFix": "",
                    "thousands": ",",
                    "lengthMenu": "Mostrar _MENU_ Entradas",
                    "loadingRecords": "Cargando...",
                    "processing": "Procesando...",
                    "search": "Buscar:",
                    "zeroRecords": "Sin resultados encontrados",
                    "paginate": {
                        "first": "Primero",
                        "last": "Ultimo",
                        "next": "Siguiente",
                        "previous": "Anterior"
                    }
                },
                fields: [{
                    label: 'Fecha Agente:',
                    type: 'datetime',
                    def: function () { return new Date(); },
                    format: 'h:mm AHH:mm:ss',
                    fieldInfo: '24 hour clock format'
                }, {
                        label: 'Agente:',
                }, {
                    label: 'Historia Clínica:',
                }, {
                    label: 'Paciente:',
                }, {
                    label: 'Evento:',
                }, {
                    label: 'Servicio:',
                }, {
                    label: 'Fecha:',
                }, {
                    label: 'IPS:',
                }, {
                    label: 'Profesional:',
                }, {
                    label: 'Asistió:',
                }, {
                    label: 'Teléfonos:',
                }, {
                    label: 'Fecha de cita:',
                    type: 'datetime',
                    def: function () { return new Date(); },
                    format: 'h:mm AHH:mm:ss',
                    fieldInfo: '24 hour clock format'
                },


                ],

                "pagingType": "full_numbers",
                
                data: data,
                columns: [
                    { data: 'FechaSys' },
                    { data: 'SystemUser' },
                    { data: 'HistClinica' },
                    { data: 'Paciente' },
                    { data: 'NomEvento' },
                    { data: 'NomServicio' },                    
                    { data: 'Nombre' },
                    { data: 'NombreMedico' },
                    { data: 'Asist' },
                    { data: 'Telefonos' },                   
                    { data: 'HoraIni' },
                ],                
            })            
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function ListaInasistenteTabla() {
    fechaini = $("#fechaini").val();
    fechafin = $("#fechafin").val();    
    //$('#loading').show();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: '/Eventos_Programacion/ListarInasistenteTabla?fechaini=' + fechaini + '&fechafin=' + fechafin,
        dataType: 'json',
        beforeSend: function () {
            document.getElementById("loading").style.display = "block";
            document.getElementById("loading").innerHTML = "<img src='../images/cargando.gif' width='32' height='32'/>";
        },

        success: function (data) {
            document.getElementById("loading").style.display = "none";
            $('#tbl').DataTable({
                "pagingType": "full_numbers",
                language: {
                    "decimal": "",
                    "emptyTable": "No hay información",
                    "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
                    "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
                    "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                    "infoPostFix": "",
                    "thousands": ",",
                    "lengthMenu": "Mostrar _MENU_ Entradas",
                    "loadingRecords": "Cargando...",
                    "processing": "Procesando...",
                    "search": "Buscar:",
                    "zeroRecords": "Sin resultados encontrados",
                    "paginate": {
                        "first": "Primero",
                        "last": "Ultimo",
                        "next": "Siguiente",
                        "previous": "Anterior"
                    }
                },
                data: data,
                columns: [
                    { data: 'HistClinica' },
                    { data: 'Paciente' },
                    { data: 'NomEvento' },
                    { data: 'NomServicio' },
                    { data: 'Fecha' },
                    { data: 'Nombre' },
                    { data: 'Asist' },
                    { data: 'Telefonos' },
                    { data: 'SystemUser' },
                ],
                "pagingType": "full_numbers"
            })
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}


function ListarInasistenteUltimaFecha() {
    //Exception json max limit date
    fechaini = '2019-01-01';//$("#fechaini").val();
    fechafin = '2019-01-15';//$("#fechafin").val(); 
    //$('#loading').show();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",        
        url: '/Eventos_Programacion/ListarInasistenteUltimaFecha?fechaini=' + fechaini + '&fechafin=' + fechafin,
        dataType: 'json',
        beforeSend: function () {
            document.getElementById("loading").style.display = "block";
            document.getElementById("loading").innerHTML = "<img src='../images/cargando.gif' width='32' height='32'/>";
        },

        success: function (data) {
            document.getElementById("loading").style.display = "none";
            $('#tbl').DataTable({
                "pagingType": "full_numbers",
                language: {
                    "decimal": "",
                    "emptyTable": "No hay información",
                    "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
                    "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
                    "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                    "infoPostFix": "",
                    "thousands": ",",
                    "lengthMenu": "Mostrar _MENU_ Entradas",
                    "loadingRecords": "Cargando...",
                    "processing": "Procesando...",
                    "search": "Buscar:",
                    "zeroRecords": "Sin resultados encontrados",
                    "paginate": {
                        "first": "Primero",
                        "last": "Ultimo",
                        "next": "Siguiente",
                        "previous": "Anterior"
                    }
                },
                data: data,
                columns: [
                    { data: 'HistClinica' },
                    { data: 'Paciente' },
                    { data: 'NomEvento' },
                    { data: 'NomServicio' },
                    { data: 'Fecha' },
                    { data: 'Nombre' },
                    { data: 'Asist' },
                    { data: 'Telefonos' },
                    { data: 'SystemUser' },
                ],
                "pagingType": "full_numbers"
            })
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function CuantosEventosFecha() {
    fechaini = $("#fechaini").val();
    fechafin = $("#fechafin").val();
    //$('#loading').show();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        //url: '/Eventos_Programacion/ListarInasistenteUltimaFecha?fechaini=' + fechaini + '&fechafin=' + fechafin,
        url: '/Eventos_Programacion/CuantosEventosFecha?fechaini=' + fechaini + '&fechafin=' + fechafin,
        dataType: 'json',
        beforeSend: function () {
            document.getElementById("loading").style.display = "block";
            document.getElementById("loading").innerHTML = "<img src='../images/cargando.gif' width='32' height='32'/>";
        },

        success: function (datos) {
            document.getElementById("loading").style.display = "none";
            new Chart(document.getElementById("myAreaChart"), {
                type: 'bar',
                data: {
                    labels: ["Consultas Medicas", "Salud Oral",
                        "Odontologia General", "CyD", "Planificación", "Adulto Joven", "Agudeza Visual", "Adulto Mayor", "Control Prenatal"],
                    datasets: [
                        {
                            label: "Citas",
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#AED6F1", "#CDEB8B", "#F9E79F", "#F39C12", "#CD6155", "#f4979c", "#9dce0a"],
                            data: [datos[0], datos[1], datos[2], datos[3], datos[4], datos[5], datos[6], datos[7], datos[8]]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Agendamiento por servicios'
                    }
                }
            });


        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function CuantasAdmisionesFecha() {
    fechaini = $("#fechaini").val();
    fechafin = $("#fechafin").val();
    //$('#loading').show();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        //url: '/Eventos_Programacion/ListarInasistenteUltimaFecha?fechaini=' + fechaini + '&fechafin=' + fechafin,
        url: '/Eventos_Programacion/CuantasAdmisionesFecha?fechaini=' + fechaini + '&fechafin=' + fechafin,
        dataType: 'json',
        beforeSend: function () {
            document.getElementById("loading").style.display = "block";
            document.getElementById("loading").innerHTML = "<img src='../images/cargando.gif' width='32' height='32'/>";
        },

        success: function (datos) {
            document.getElementById("loading").style.display = "none";
            new Chart(document.getElementById("myAreaChart"), {
                type: 'bar',
                data: {
                    labels: ["Consultas Medicas", "Salud Oral",
                        "Odontologia General", "CyD", "Planificación", "Adulto Joven", "Agudeza Visual", "Adulto Mayor", "Control Prenatal"],
                    datasets: [
                        {
                            label: "Pacientes Admisionados",
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#AED6F1", "#CDEB8B", "#F9E79F", "#F39C12", "#CD6155", "#f4979c", "#9dce0a"],
                            data: [datos[0], datos[1], datos[2], datos[3], datos[4], datos[5], datos[6], datos[7], datos[8]]
                        },
                        {
                            label: 'Agendamiento Médico',
                            data: [datos[9], datos[10], datos[11], datos[12], datos[13], datos[14], datos[15], datos[16], datos[17]],

                            // Changes this dataset to become a line
                            type: 'line'
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Pacientes Admitidos por servicios'
                    }
                }
            });


        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}



function CuantosEventosFechaCE() {
    fechaini = $("#fechaini").val();
    fechafin = $("#fechafin").val();
    //$('#loading').show();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        //url: '/Eventos_Programacion/ListarInasistenteUltimaFecha?fechaini=' + fechaini + '&fechafin=' + fechafin,
        url: '/Eventos_Programacion/CuantosEventosFechaCE?fechaini=' + fechaini + '&fechafin=' + fechafin,
        dataType: 'json',
        beforeSend: function () {
            document.getElementById("loading2").style.display = "block";
            document.getElementById("loading2").innerHTML = "<img src='../images/cargando.gif' width='32' height='32'/>";
        },

        success: function (datos) {
            document.getElementById("loading2").style.display = "none";
            new Chart(document.getElementById("ChartCE"), {
                type: 'doughnut',
                data: {
                    labels: ["Consultas Medicas", "Consulta De Control",
                        "Consulta Lectura Examenes"],
                    datasets: [
                        {
                            label: "Citas",
                            backgroundColor: ["#555E7B", "#8db9ca", "#00aeff"],
                            data: [datos[0], datos[1], datos[2]]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Agendamiento Consulta Médica'
                    }
                }
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function CuantasAdmisionesFechaCE() {
    fechaini = $("#fechaini").val();
    fechafin = $("#fechafin").val();
    //$('#loading').show();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        //url: '/Eventos_Programacion/ListarInasistenteUltimaFecha?fechaini=' + fechaini + '&fechafin=' + fechafin,
        url: '/Eventos_Programacion/CuantasAdmisionesFechaCE?fechaini=' + fechaini + '&fechafin=' + fechafin,
        dataType: 'json',
        beforeSend: function () {
            document.getElementById("loading2").style.display = "block";
            document.getElementById("loading2").innerHTML = "<img src='../images/cargando.gif' width='32' height='32'/>";
        },

        success: function (datos) {
            document.getElementById("loading2").style.display = "none";
            new Chart(document.getElementById("ChartCE"), {
                type: 'doughnut',
                data: {
                    labels: ["Consultas Medicas", "Consulta De Control",
                        "Consulta Lectura Examenes"],
                    datasets: [
                        {
                            label: "Admisiones",
                            backgroundColor: ["#555E7B", "#8db9ca", "#00aeff"],
                            data: [datos[0], datos[1], datos[2]]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Pacientes Admitidos Consulta Médica'
                    }
                }
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function CuantosEventosFechaSO() {
    fechaini = $("#fechaini").val();
    fechafin = $("#fechafin").val();
    //$('#loading').show();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        //url: '/Eventos_Programacion/ListarInasistenteUltimaFecha?fechaini=' + fechaini + '&fechafin=' + fechafin,
        url: '/Eventos_Programacion/CuantosEventosFechaSO?fechaini=' + fechaini + '&fechafin=' + fechafin,
        dataType: 'json',
        beforeSend: function () {
            document.getElementById("loading3").style.display = "block";
            document.getElementById("loading3").innerHTML = "<img src='../images/cargando.gif' width='32' height='32'/>";
        },

        success: function (datos) {
            document.getElementById("loading3").style.display = "none";
            new Chart(document.getElementById("ChartSO"), {
                type: 'doughnut',
                data: {
                    labels: ["Odontologia Salud Oral (1°vez)", "Odontologia Salud Oral (Control)"],                        
                    datasets: [
                        {
                            label: "Citas",
                            backgroundColor: ["#FDE47F", "#7CCCE5"],
                            data: [datos[0], datos[1]]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Agendamiento Salud Oral'
                    }
                }
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function CuantasAdmisionesFechaSO() {
    fechaini = $("#fechaini").val();
    fechafin = $("#fechafin").val();
    //$('#loading').show();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        //url: '/Eventos_Programacion/ListarInasistenteUltimaFecha?fechaini=' + fechaini + '&fechafin=' + fechafin,
        url: '/Eventos_Programacion/CuantasAdmisionesFechaSO?fechaini=' + fechaini + '&fechafin=' + fechafin,
        dataType: 'json',
        beforeSend: function () {
            document.getElementById("loading3").style.display = "block";
            document.getElementById("loading3").innerHTML = "<img src='../images/cargando.gif' width='32' height='32'/>";
        },

        success: function (datos) {
            document.getElementById("loading3").style.display = "none";
            new Chart(document.getElementById("ChartSO"), {
                type: 'doughnut',
                data: {
                    labels: ["Odontologia Salud Oral (1°vez)", "Odontologia Salud Oral (Control)"],
                    datasets: [
                        {
                            label: "Citas",
                            backgroundColor: ["#FDE47F", "#7CCCE5"],
                            data: [datos[0], datos[1]]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Pacientes Admitidos Salud Oral'
                    }
                }
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}


function CuantosEventosFechaCYD() {
    fechaini = $("#fechaini").val();
    fechafin = $("#fechafin").val();
    //$('#loading').show();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        //url: '/Eventos_Programacion/ListarInasistenteUltimaFecha?fechaini=' + fechaini + '&fechafin=' + fechafin,
        url: '/Eventos_Programacion/CuantosEventosFechaCYD?fechaini=' + fechaini + '&fechafin=' + fechafin,
        dataType: 'json',
        beforeSend: function () {
            document.getElementById("loading4").style.display = "block";
            document.getElementById("loading4").innerHTML = "<img src='../images/cargando.gif' width='32' height='32'/>";
        },

        success: function (datos) {
            document.getElementById("loading4").style.display = "none";
            new Chart(document.getElementById("ChartCYD"), {
                type: 'doughnut',
                data: {
                    labels: ["Crecimiento y Desarrollo (1°vez)", "Crecimiento y Desarrollo (Control)"],
                    datasets: [
                        {
                            label: "Citas",
                            backgroundColor: ["#d2ea32", "#ff7243"],
                            data: [datos[0], datos[1]]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Agendamiento Consulta Crecimiento y desarrollo'
                    }
                }
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function CuantasAdmisionesFechaCYD() {
    fechaini = $("#fechaini").val();
    fechafin = $("#fechafin").val();
    //$('#loading').show();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        //url: '/Eventos_Programacion/ListarInasistenteUltimaFecha?fechaini=' + fechaini + '&fechafin=' + fechafin,
        url: '/Eventos_Programacion/CuantasAdmisionesFechaCYD?fechaini=' + fechaini + '&fechafin=' + fechafin,
        dataType: 'json',
        beforeSend: function () {
            document.getElementById("loading4").style.display = "block";
            document.getElementById("loading4").innerHTML = "<img src='../images/cargando.gif' width='32' height='32'/>";
        },

        success: function (datos) {
            document.getElementById("loading4").style.display = "none";
            new Chart(document.getElementById("ChartCYD"), {
                type: 'doughnut',
                data: {
                    labels: ["Crecimiento y Desarrollo (1°vez)", "Crecimiento y Desarrollo (Control)"],
                    datasets: [
                        {
                            label: "Citas",
                            backgroundColor: ["#d2ea32", "#ff7243"],
                            data: [datos[0], datos[1]]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Pacientes Admitidos Consulta Crecimiento y desarrollo'
                    }
                }
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function CuantosEventosFechaCP() {
    fechaini = $("#fechaini").val();
    fechafin = $("#fechafin").val();
    //$('#loading').show();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        //url: '/Eventos_Programacion/ListarInasistenteUltimaFecha?fechaini=' + fechaini + '&fechafin=' + fechafin,
        url: '/Eventos_Programacion/CuantosEventosFechaCP?fechaini=' + fechaini + '&fechafin=' + fechafin,
        dataType: 'json',
        beforeSend: function () {
            document.getElementById("loading5").style.display = "block";
            document.getElementById("loading5").innerHTML = "<img src='../images/cargando.gif' width='32' height='32'/>";
        },

        success: function (datos) {
            document.getElementById("loading5").style.display = "none";
            new Chart(document.getElementById("ChartCP"), {
                type: 'doughnut',
                data: {
                    labels: ["Control Prenatal (1°vez) Médico", "Control Prenatal(Control)"],
                    datasets: [
                        {
                            label: "Citas",
                            backgroundColor: ["#697d99", "#f4979c"],
                            data: [datos[0], datos[1]]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Agendamiento Consulta Control Prenatal'
                    }
                }
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function CuantasAdmisionesFechaCP() {
    fechaini = $("#fechaini").val();
    fechafin = $("#fechafin").val();
    //$('#loading').show();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        //url: '/Eventos_Programacion/ListarInasistenteUltimaFecha?fechaini=' + fechaini + '&fechafin=' + fechafin,
        url: '/Eventos_Programacion/CuantasAdmisionesFechaCP?fechaini=' + fechaini + '&fechafin=' + fechafin,
        dataType: 'json',
        beforeSend: function () {
            document.getElementById("loading5").style.display = "block";
            document.getElementById("loading5").innerHTML = "<img src='../images/cargando.gif' width='32' height='32'/>";
        },

        success: function (datos) {
            document.getElementById("loading5").style.display = "none";
            new Chart(document.getElementById("ChartCP"), {
                type: 'doughnut',
                data: {
                    labels: ["Control Prenatal (1°vez) Médico", "Control Prenatal(Control)"],
                    datasets: [
                        {
                            label: "Citas",
                            backgroundColor: ["#697d99", "#f4979c"],
                            data: [datos[0], datos[1]]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Pacientes Admitidos Consulta Control Prenatal'
                    }
                }
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}






function BuscarPaciente() {
    $("#tbl tr").remove();
    id = $('#busqueda').val();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",        
        dataType: 'json',
        data: "{id:" + JSON.stringify(id) +"}",
        url: "/Paciente/ObtenerPacienteId?id=" + id,
        success: function (data) {
            tableData = data;
            
            var rowH = "<tr><td class='tabla_titulo'>Documento</td><td class='tabla_titulo'>Primer Apellido</td><td class='tabla_titulo'>Segundo Apellido</td><td class='tabla_titulo'>Primer Nombre</td><td class='tabla_titulo'>Segundo Nombre</td></tr>";
            $("#tbl").append(rowH);
            jQuery.each(tableData, function (i, tableData) {
                var rowHTML = "<tr><td class='tabla_per'>" + tableData.id + "</td><td class='tabla_per'>" + tableData.papellido + "</td><td class='tabla_per'>" + tableData.sapellido + "</td><td class='tabla_per'>"
				+ tableData.pnombre + "</td><td class='tabla_per'>" + tableData.snombre + "</td><td class='tabla_per'><button id='editar' type='button' onclick='miFuncion2(" + tableData.id + ")' class='btn-info' ><span class='glyphicon glyphicon-edit' style='color:#fff;font-size: 15px;'></span> </button></td>" +
                "<td><button id='eliminar' type='button' onclick='miFuncion2(" + tableData.id + ")' class='btn-danger' ><span class='glyphicon glyphicon-remove' style='color:#fff;font-size: 15px;'></span> </button></td>";

                rowHTML += "</tr>";

                $("#tbl").append(rowHTML);

            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function AgregarServicio() {    
    codigo = $('#codigo').val();
    nomservicio = $('#nomservicio').val();
    valoru = $('#valoru').val();
    cantidad = $('#cantidad').val();
    total = $('#total').val();
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        
        success: function (data) {
            alert("hola");
            tableData = data;

            var rowH = "<tr><td class='tabla_titulo'>Documento</td><td class='tabla_titulo'>Primer Apellido</td><td class='tabla_titulo'>Segundo Apellido</td><td class='tabla_titulo'>Primer Nombre</td><td class='tabla_titulo'>Segundo Nombre</td></tr>";
            $("#tblser").append(rowH);
            jQuery.each(tableData, function (i, tableData) {
                var rowHTML = "<tr><td class='tabla_per'>" + tableData.id + "</td><td class='tabla_per'>" + tableData.papellido + "</td><td class='tabla_per'>" + tableData.sapellido + "</td><td class='tabla_per'>"
				+ tableData.pnombre + "</td><td class='tabla_per'>" + tableData.snombre + "</td><td class='tabla_per'><button id='editar' type='button' onclick='miFuncion2(" + tableData.id + ")' class='btn-info' ><span class='glyphicon glyphicon-edit' style='color:#fff;font-size: 15px;'></span> </button></td>" +
                "<td><button id='eliminar' type='button' onclick='miFuncion2(" + tableData.id + ")' class='btn-danger' ><span class='glyphicon glyphicon-remove' style='color:#fff;font-size: 15px;'></span> </button></td>";

                rowHTML += "</tr>";

                $("#tblser").append(rowHTML);

            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

//boton finalizar
$("#finalizar").click(function () {
    //alertify.alert("Boton Iniciado");            
    //console.info('hola');
    var fechaprueba = '14/07/2017';
    var modopago = 'DEBITO';
    var cliente = 'JOHN LUGO';
    var total_prueba = '18000';
    var i = 0;    
    //var envio = "{Fecha:'" + $("#id_fecha").val() + "',ModoPago:'" + $("#modoPago").val() + "',IdCliente:'" + $("#codigoCliente").val() + "',IdCabecera:'2',Total:'" + $('#TotalaPagar').val() + "',";
    var envio = "{Fecha:'" + fechaprueba + "',ModoPago:'" + modopago + "',IdCliente:'" + cliente + "',IdCabecera:'2',Total:'" + total_prueba + "',";
    $("#detalle tbody tr").each(function (index) {
        if (i == 0) {
            envio += "ListadoDetalle:[{IdProducto:'" + $(this).find('td').eq(0).text() +
                "',Cantidad:'" + $(this).find('td').eq(3).text() +
                "',Descuento:'" + $(this).find('td').eq(5).text() +
                "',SubTotal:'" + $(this).find('td').eq(7).text() + "'}";
        } else {
            envio += ",{IdProducto:'" + $(this).find('td').eq(0).text() +
                "',Cantidad:'" + $(this).find('td').eq(3).text() +
                "',Descuento:'" + $(this).find('td').eq(5).text() +
                "',SubTotal:'" + $(this).find('td').eq(7).text() + "'}"
        }
        i = 1;
    });
    envio += "]}";

    var json = eval("(" + envio + ')');

    //alertify.alert("INGRESE DATOS");
    console.info(json);

    $.ajax({
        url: "GuardarVenta",
        data: JSON.stringify(json),
        type: "POST",
        async: false,//this makes the ajax-call blocking
        contentType: 'application/json;charset=UTF-8',
        dataType: 'json',
        success: function (response) {
            alertify.alert(response);
            valid = response.valid;
        },
        error: function (error) {
            alertify.alert(error);

        }
    });
});

//variables
var valor = 0;
var total = 0;
var valor = 0;
var valordes = 0;
var valorcop = 0;
var subtotal = 0;
var descuento = 0;
var copago = 0;
var tot = 0;
var total_total = 0;
var total_descuento = 0;
var total_copago = 0;

var detalle_total = 0;
var detalle_subtotal = 0;
var detalle_copago = 0;
var detalle_descuento = 0;

function multiplicar() {
    var y = 0;
    var x = 0;
    var des = 0;
    var cop = 0;
    y = $("#cantidad").val();
    x = $("#valoru").val();
    des = $("#descuento").val();
    cop = $("#copago").val();
    subtotal = (parseFloat(x.replace(',','')) * y) - des - cop;
    $("#total").val(subtotal);
}

function fn_agregar() {
    cadena = "<tr>"
    cadena = cadena + "<td class'col-md-1'>" + $("#codigo").val() + "</td>";
    cadena = cadena + "<td class'col-md-3'>" + $("#nomservicio").val() + "</td>";
    cadena = cadena + "<td class'col-md-3'>" + $("#valoru").val() + "</td>";
    cadena = cadena + "<td class'col-md-1'>" + $("#cantidad").val() + "</td>";
    cadena = cadena + "<td class'col-md-1'>" + $("#descuento").val() + "</td>";
    cadena = cadena + "<td class'col-md-1'>" + $("#copago").val() + "</td>";
    var y = 0;
    var x = 0;
    var des = 0;
    var cop = 0;
    y = $("#cantidad").val();
    x = $("#valoru").val();
    des = $("#descuento").val();
    cop = $("#copago").val();
    total_total = (parseFloat(x.replace(',', '')) * y);
    total_descuento = des;
    total_copago = cop;
    subtotal = (parseFloat(x.replace(',', '')) * y) - des - cop;
    cadena = cadena + "<td class'col-md-2'>" + subtotal + "</td>"
    cadena = cadena + "<td><a class ='elimina'><button class='btn btn-danger' type='button'><span class='fa fa-remove'></span></button></a></td>";
    $("#detalle tbody").append(cadena);   
    sumar();
    fn_dar_eliminar();    
    limpiar();

}

function sumar() {
    total = total + subtotal;
    detalle_subtotal = detalle_subtotal + total_total;
    detalle_descuento = parseFloat(detalle_descuento) + parseFloat(total_descuento);   
    detalle_copago = parseFloat(detalle_copago) + parseFloat(total_copago);    
    $("#subtotal").val(total);    
    tot = total - descuento - copago;    
    $("#totdescuento").val(detalle_descuento);
    $("#totcopago").val(detalle_copago);
    $("#tot").val(detalle_subtotal);

    $("#subt").html(total.toLocaleString());
    $("#tdes").html(detalle_descuento.toLocaleString());
    $("#tcopago").html(detalle_copago.toLocaleString());
    $("#totalhtml").html(detalle_subtotal.toLocaleString());
}

function restar() {
    alert(valorcop);
    total = total - valor;    
    detalle_subtotal = detalle_subtotal - valor-valordes-valorcop;
    detalle_descuento = detalle_descuento - valordes;
    detalle_copago = detalle_copago - valorcop;
    $("#tdes").html(detalle_descuento.toLocaleString());
    $("#tcopago").html(detalle_copago.toLocaleString());
    $("#subt").html(total.toLocaleString());
    $("#totalhtml").html(detalle_subtotal.toLocaleString());
}

function limpiar() {
    $("#codigo").val("");
    $("#nomservicio").val("");
    $("#valoru").val("");
    $("#total").val("");
    $("#cantidad").val("");
    $("#descuento").val("");
    $("#copago").val("");
}

function limpiarDetalle() {
    $("#detalle tbody tr").val("");
}

function fn_dar_eliminar() {
    $("a.elimina").click(function () {
        valor = $(this).parents("tr").find("td").eq(6).html();
        valordes = $(this).parents("tr").find("td").eq(4).html();
        valorcop = $(this).parents("tr").find("td").eq(5).html();
        $(this).parents("tr").fadeOut("normal", function () {
            $(this).remove();
            restar();
        });
    });
};

function descontar() {
    var x = 0;
    var totaldes = 0;
    x = $("#descuento").val();
    total = $("#total").val();
    totaldes = total - x;
    $("#total").val(totaldes);
}

function descontar_copago() {
    var x = 0;
    var totalcopago = 0;
    x = $("#copago").val();
    total = $("#total").val();
    totalcopago = total - x;
    $("#total").val(totalcopago);
}


function cargarEtnia() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        //data:"{etnia:"+JSON.stringify(etnia)+"}",
        url: "/Paciente/GetEtnia",
        success: function (data) {
            /*alert("etnia: " + data[0]);                            
            $("#etnia").html(data[0]);*/
            $.each(data, function (key, val) {
                $('select[name="etnia"]').append($('<option>', {
                    value: val.id,
                    text: val.nombre
                }));
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function cargarTipoDocumento() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        //data:"{etnia:"+JSON.stringify(etnia)+"}",
        url: "/Paciente/GetTipoDocumento",
        success: function (data) {
            /*alert("etnia: " + data[0]);                            
            $("#etnia").html(data[0]);*/
            $.each(data, function (key, val) {
                $('select[name="tipodoc"]').append($('<option>', {
                    value: val.id,
                    text: val.nombre
                }));
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function cargarNivelEducativo() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        //data:"{etnia:"+JSON.stringify(etnia)+"}",
        url: "/Paciente/GetNivelEducativo",
        success: function (data) {
            /*alert("etnia: " + data[0]);                            
            $("#etnia").html(data[0]);*/
            $.each(data, function (key, val) {
                $('select[name="educativo"]').append($('<option>', {
                    value: val.id,
                    text: val.nombre
                }));
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function cargarOcupacion() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        //data:"{etnia:"+JSON.stringify(etnia)+"}",
        url: "/Paciente/GetOcupacion",
        success: function (data) {
            /*alert("etnia: " + data[0]);                            
            $("#etnia").html(data[0]);*/
            $.each(data, function (key, val) {
                $('select[name="ocupacion"]').append($('<option>', {
                    value: val.id,
                    text: val.nombre
                }));
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function cargarSexo() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        //data:"{etnia:"+JSON.stringify(etnia)+"}",
        url: "/Paciente/GetSexo",
        success: function (data) {
            /*alert("etnia: " + data[0]);                            
            $("#etnia").html(data[0]);*/
            $.each(data, function (key, val) {
                $('select[name="sexo"]').append($('<option>', {
                    value: val.id,
                    text: val.nombre
                }));
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function cargarZona() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        //data:"{etnia:"+JSON.stringify(etnia)+"}",
        url: "/Paciente/GetZona",
        success: function (data) {
            /*alert("etnia: " + data[0]);                            
            $("#etnia").html(data[0]);*/
            $.each(data, function (key, val) {
                $('select[name="zona"]').append($('<option>', {
                    value: val.id,
                    text: val.nombre
                }));
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function cargarContrato() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",        
        url: "/Admisiones/GetContrato",
        success: function (data) {           
            $.each(data, function (key, val) {
                $('select[name="contrato"]').append($('<option>', {
                    value: val.id,
                    text: val.contrato
                }));
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}
function cargarPrograma() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",        
        url: "/Admisiones/GetPrograma",
        success: function (data) {            
            $.each(data, function (key, val) {
                $('select[name="programa"]').append($('<option>', {
                    value: val.id,
                    text: val.programa
                }));
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}

function cargarMunicipio() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        //data:"{etnia:"+JSON.stringify(etnia)+"}",
        url: "/Paciente/GetMunicipio",
        success: function (data) {
            /*alert("etnia: " + data[0]);                            
            $("#etnia").html(data[0]);*/
            $.each(data, function (key, val) {
                $('select[name="municipio"]').append($('<option>', {
                    value: val.id,
                    text: val.nombre
                }));
            });
        },
        error: function (result) {
            alert("ha ocurrido un error");
        }
    });
}
