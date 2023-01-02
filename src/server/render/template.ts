export const template = (html:string, initialProps:object={}): string => (
  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600&display=swap" rel="stylesheet">
  <title>Helix App</title>
</head>
<body>
  <div id="app">${html}</div>
  <script src="app.js" type="text/javascript"></script>
  <script>
    window.__INITIAL_PROPS__ = ${JSON.stringify(initialProps)}
  </script>
</body>
</html>
`
)