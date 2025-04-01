#!/bin/bash

# Создание директорий
mkdir -p project_root/{scripts,static,templates,logs,data,old_version,migrations,docs}

# Создание файлов
touch project_root/{main.py,config.py,helpers.py,database.py,utils.py,views.py,README.md,requirements.txt,.gitignore,test.py}
touch project_root/scripts/{init_db.py,backup.py}
touch project_root/static/{script.js,styles.css}
touch project_root/templates/{base.html,index.html}
touch project_root/logs/{app.log,debug.log}
touch project_root/data/{database.sqlite,secrets.json}
touch project_root/docs/TODO.txt

# Наполняем файлы бессмысленным содержимым
echo 'print("Welcome to the worst project ever!")' > project_root/main.py
echo 'DATABASE_URL = "sqlite:///project_root/data/database.sqlite"' > project_root/config.py
echo -e 'import os\n\ndef helper_function():\n    pass' > project_root/helpers.py
echo -e 'import sqlite3\n\nconn = sqlite3.connect("project_root/data/database.sqlite")' > project_root/database.py
echo '/* Place for ugly CSS */' > project_root/static/styles.css
echo '<html><body><?python print("Hello from template!") ?></body></html>' > project_root/templates/base.html
echo 'console.log("JS but written in Python and eval-ed")' > project_root/static/script.js
echo 'print("Tests passed!")' > project_root/test.py
echo '# TODO: Написать документацию' > project_root/docs/TODO.txt
echo 'secrets = {"api_key": "12345"}' > project_root/data/secrets.json
echo '' > project_root/.gitignore
echo -e 'flask\nrequests\nrandompackage==99.99.99' > project_root/requirements.txt

# Делаем файлы исполняемыми
chmod +x project_root/main.py

echo "Ужасный проект создан! Готовьтесь к боли."
