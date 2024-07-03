

document.addEventListener('DOMContentLoaded', function () {
   //Identificador de botones
   const botonIngresarDatos = document.getElementById('ingresardatos');
   const botonIngresarHtml = document.getElementById('ingresarhtml');
   const botonIngresarCss = document.getElementById('ingresarcss');
   const botonIngresarJs = document.getElementById('ingresarjs');

   // Ingresar Datos Personales
   botonIngresarDatos.addEventListener('click', function () {
      var nombre = document.getElementById('formGroupExampleInput').value;
      var apellido = document.getElementById('formGroupExampleInput2').value;

      console.log(nombre + ' ' + apellido);
      document.getElementById('nombre').textContent = nombre;
      document.getElementById('apellido').textContent = apellido;
   });

   //Notas HTML
   botonIngresarHtml.addEventListener('click', function () {
      var nota1html = Number(document.getElementById('nota1htmlf').value);
      var nota2html = Number(document.getElementById('nota2htmlf').value);
      var nota3html = Number(document.getElementById('nota3htmlf').value);
      var notashtml = nota1html + nota2html + nota3html;
      var promhtml = notashtml / 3;
      var promfixedh = promhtml.toFixed(2);

      console.log(nota1html, nota2html, nota3html);
      console.log(promfixedh)
      document.getElementById('nota1html').textContent = nota1html;
      document.getElementById('nota2html').textContent = nota2html;
      document.getElementById('nota3html').textContent = nota3html;
      document.getElementById('promhtml').textContent = promfixedh;
   })

   //Notas CSS
   botonIngresarCss.addEventListener('click', function () {
      var nota1css = Number(document.getElementById('nota1cssf').value);
      var nota2css = Number(document.getElementById('nota2cssf').value);
      var nota3css = Number(document.getElementById('nota3cssf').value);
      var notascss = nota1css + nota2css + nota3css;
      var promcss = notascss / 3;
      var promfixedc = promcss.toFixed(2);

      console.log(nota1css, nota2css, nota3css);
      console.log(promfixedc);
      document.getElementById('nota1css').textContent = nota1css;
      document.getElementById('nota2css').textContent = nota2css;
      document.getElementById('nota3css').textContent = nota3css;
      document.getElementById('promcss').textContent = promfixedc;
   })

   //Notas JS
   botonIngresarJs.addEventListener('click', function () {
      var nota1js = Number(document.getElementById('nota1jsf').value);
      var nota2js = Number(document.getElementById('nota2jsf').value);
      var nota3js = Number(document.getElementById('nota3jsf').value);
      var notasjs = nota1js + nota2js + nota3js;
      var promjs = notasjs / 3;
      var promfixedj = promjs.toFixed(2);

      console.log(nota1js, nota2js, nota3js);
      console.log(promfixedj);
      document.getElementById('nota1js').textContent = nota1js;
      document.getElementById('nota2js').textContent = nota2js;
      document.getElementById('nota3js').textContent = nota3js;
      document.getElementById('promjs').textContent = promfixedj;
   })
});