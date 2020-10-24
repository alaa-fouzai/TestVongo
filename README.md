# TestVongo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

This project contains both php API's and Angular Project And Sql files

## Development server

Run `ng serve --proxy-config proxy.conf.json` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## How To Run the project

go inside your wamp or xamp Server and clone the project under htdocs `git clone https://github.com/alaa-fouzai/TestVongo.git`

after the clone is done go inside the TestVongo folder and the inside TestVongoAngular and open a CMD inside TestVongoAngular and type `npm install` .

after the install is done type `ng serve --proxy-config proxy.conf.json`

Add the Sql file into your database 

and it should be Working :) 

## Database

the servername for the database i use is 'localhost'
the username for the database i use is 'root'
the password for the database i use is ''
the db_name for the database i use is 'testvongo'

if you change anything you need to change it inside Connection.php And inside ListItems.php

## Folder hierarchy

htdocs ------> TestVongo --------> TestVongoAngular --------> All Angular Files
						 --------> AjouterItem.php
						 --------> connection.php
						 --------> DeleteItem.php
						 --------> ListItems.php
						 --------> login.php
						 --------> ModifierItem.php
						 --------> register.php

