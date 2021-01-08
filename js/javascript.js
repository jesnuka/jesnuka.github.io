function onKonami(cb)
{
  var input = '';
  var key = '38384040373937396665';
  document.addEventListener('keydown', function (e)
  {
    input += ("" + e.keyCode);
    if (input === key)
    {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}
onKonami
(
  function ()
  {
    var object1 = document.getElementById("object1");
    object1.style.display = 'block';
  }
)
