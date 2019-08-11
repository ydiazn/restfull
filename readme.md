# Example of Reactjs + Django REST

An API is used to list and delete questions

## Setup virtual environment

`apt-get install python3-venv`
`python3 -m venv venv`

## Install python dependencies

`source venv/bin/activate`
`pip install -r requeriments.txt`

## Install javascript dependencies

`npm install`

## Setup project

`source venv/bin/activate`
`python manage.py migrate`
`python manage.py createsuperuser`

## Run example

Pack react componentes

`npm run build`

Then run django project

`python manage.py runserver`

- Create some question form admin site : localhost:8000/admin
- Logout (this is necesary for avoid csrf error during question delete)
- View and delete questions in page: localhost:8000/qa

### API

* List: /qa/questions
* Destroy: /qa/questions/pk





