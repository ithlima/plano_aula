<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Planejamento</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="area">
        <div class="titulo">
            <div class="nome-pesquisa">
                Pesquisar
            </div>
            <div class="btn-inicio">
                <button class="but">
                    +
                </button>
                <button class="but">
                    filtro
                </button>
            </div>
        </div>
        <div class="formulario">
            <form action="#" method="post">
                <label for="data-i">Data inicial</label>
                <input type="date" name="data-i" class="datai">
                <label for="data-f">Data final</label>
                <input type="date" name="data-f" id="" class="dataf">
                <label for="mes">Mês</label>
                <select name="mes" id="mes" class="mes">
                    <option value="1">Janeiro</option>
                    <option value="2">Fevereiro</option>
                    <option value="3">Março</option>
                    <option value="4">Abril</option>
                    <option value="5">Maio</option>
                    <option value="6">Junho</option>
                    <option value="7">Julho</option>
                    <option value="8">Agosto</option>
                    <option value="9">Setembro</option>
                    <option value="10">Outubro</option>
                    <option value="11">Novembro</option>
                    <option value="12">Dezembro</option>
                </select>
                <label for="escola">Escola</label>
                <select name="escola" id="escola" class="escola">
                    <option value="1">Salaberga</option>
                    <option value="2">Manoel Rodrigues</option>
                    <option value="3">CSJ</option>
                </select>
                <label for="turma">Turma</label>
                <select name="turma" id="turma" class="turma">
                    <option value="1">1° ano</option>
                    <option value="2">2° ano</option>
                    <option value="3">3° ano</option>
                </select>
                <input type="submit" value="Buscar" name="btn-buscar" class="but">
                <input type="submit" value="Limpar" name="btn-limpar" class="but">
            </form>
        </div>
        <div class="pdf">
            <button class="but">pdf</button>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th>#</th>
                <th>DATA INICIAL</th>
                <th>DATA FINAL</th>
                <th>ESCOLA</th>
                <th>TURMA</th>
                <th style="border-right: none;">COMPONENTE CURRICULAR</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                 <td>1</td>
                 <td>01/02/2023</td>
                 <td>30/02/2023</td>
                 <td>EEEP Salaberga Torquato Gomes de Matos</td>
                 <td>3°B</td>
                 <td style="border-right: none;">Matemática</td>
            </tr>
            </tbody>
        </table>
        <div class="passador">
            <button class="but">&larr;&larr;</button>
            <button class="but">&larr;</button>
            <button class="but" style="width: 40px;">1</button>
            <button class="but">&rarr;</button>
            <button class="but">&rarr;&rarr;</button>
            <select name="pag" id="">
                <option value="1">1</option>
            </select>
        </div>
    </div>
</body>

</html>