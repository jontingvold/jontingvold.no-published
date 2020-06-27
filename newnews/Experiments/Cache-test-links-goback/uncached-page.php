<?php
header("Cache-Control: no-cache, must-revalidate");
?>
<!DOCTYPE html>
<head>
<meta charset="utf-8">
<title>Cache preloading with js</title>

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-9010257-6', 'auto');
  ga('send', 'pageview');

</script>
</head>

<body>
<p>This page sleeps for 3000 ms. If cached, it should return immediately.</p>
<?php 
ob_flush();
flush();
sleep(3); 
?>
<p>Click on <a href="go-back-page.html">this link</a>, go back and see if this page returns immediately.</p>
</body>
</html>