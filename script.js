//DIVS
var area2 = document.querySelector('.area2')
var turma = document.querySelector('.modal-menus')
var comp = document.querySelector('.modal-menus2')
var competencia = document.querySelector('.modal-menus3')
var habilidades = document.querySelector('.modal-menus4')
var plano = document.querySelector('.modal-menus5')
var obs = document.querySelector('.modal-menus6')


//buttons
var btnturma = document.querySelector('#btn-turma')
var compBtn = document.querySelector('#btn-comp')
var competenciaBtn = document.querySelector('#btn-competencia')
var habilidadeBtn = document.querySelector('#btn-habilidade')
var planoBtn = document.querySelector('#btn-plano')
var obsBtn = document.querySelector('#btn-obs')
var enviarBtn = document.querySelector('#btn-enviar')

function aparecerTurma() {
    //cores
    btnturma.style.background = "gray"

    area2.style.display = "block"
    turma.style.display = "block"
    comp.style.display = "none"
}

function voltarTurma() {
    //divs apagadas
    comp.style.display = "none"
    competencia.style.display = "none"
    habilidades.style.display = "none"
    plano.style.display = "none"
    obs.style.display = "none"
    //cores
    btnturma.style.background = "gray"
    compBtn.style.background = "var(--azul)"
    competenciaBtn.style.background = "var(--azul)"
    habilidadeBtn.style.background = "var(--azul)"
    planoBtn.style.background = "var(--azul)"
    obsBtn.style.background = "var(--azul)"
    //aparecer
    turma.style.display = "block"
    area2.style.display = "block"
    enviarBtn.style.cssText = 'margin-top: 0%;'
}

function componente() {
    //divs apagadas
    turma.style.display = "none"
    competencia.style.display = "none"
    habilidades.style.display = "none"
    plano.style.display = "none"
    obs.style.display = "none"
    //cores
    compBtn.style.background = "gray"
    btnturma.style.background = "var(--azul)"
    competenciaBtn.style.background = "var(--azul)"
    habilidadesBtn.style.background = "var(--azul)"
    planoBtn.style.background = "var(--azul)"
    obsBtn.style.background = "var(--azul)"

    //aparecer
    comp.style.display = "block"
    enviarBtn.style.cssText = 'margin-top: 0%;'
}

function cmd() {
    //divs apagadas
    turma.style.display = "none"
    comp.style.display = "none"
    habilidades.style.display = "none"
    plano.style.display = "none"
    obs.style.display = "none"

    //cores
    competenciaBtn.style.background = "gray"
    btnturma.style.background = "var(--azul)"
    compBtn.style.background = "var(--azul)"
    habilidadeBtn.style.background = "var(--azul)"
    planoBtn.style.background = "var(--azul)"
    obsBtn.style.background = "var(--azul)"

    //aparecer
    competencia.style.display = "block"
    enviarBtn.style.cssText = 'margin-top: 0%;'

}
function habilidade() {
    //divs apagadas
    turma.style.display = "none"
    comp.style.display = "none"
    competencia.style.display = "none"
    plano.style.display = "none"
    obs.style.display = "none"

    //cores
    habilidadeBtn.style.background = "gray"
    btnturma.style.background = "var(--azul)"
    compBtn.style.background = "var(--azul)"
    competenciaBtn.style.background = "var(--azul)"
    planoBtn.style.background = "var(--azul)"
    obsBtn.style.background = "var(--azul)"

    //aparecer
    habilidades.style.display = "block"
    enviarBtn.style.cssText = 'margin-top: 0%;'
}
function dev_plano() {
    //cores
    btnturma.style.background = "var(--azul)"
    compBtn.style.background = "var(--azul)"
    habilidadeBtn.style.background = "var(--azul)"
    competenciaBtn.style.background = "var(--azul)"
    obsBtn.style.background = "var(--azul)"
    planoBtn.style.background = "gray"

    //divs apagadas
    turma.style.display = "none"
    comp.style.display = "none"
    habilidades.style.display = "none"
    competencia.style.display = "none"
    obs.style.display = "none"

    //aparecer
    plano.style.display = "grid"
    enviarBtn.style.height = "100px"
    enviarBtn.style.cssText = 'margin-top: 130%;'
}
function observacao() {
    //divs apagadas
    turma.style.display = "none"
    comp.style.display = "none"
    habilidades.style.display = "none"
    competencia.style.display = "none"
    plano.style.display = "none"

    //cores
    btnturma.style.background = "var(--azul)"
    compBtn.style.background = "var(--azul)"
    habilidadeBtn.style.background = "var(--azul)"
    competenciaBtn.style.background = "var(--azul)"
    obsBtn.style.background = "gray"
    planoBtn.style.background = "var(--azul)"

    //aparecer
    obs.style.display = "grid"
    enviarBtn.style.cssText = 'margin-top: 30%;' + 'height: 50px;'
}
