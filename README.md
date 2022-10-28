# AirBnB Clone - The Console
The console is the first segment of the AirBnB project at Holberton School that will collectively cover fundamental concepts of higher level programming. The goal of AirBnB project is to eventually deploy our server a simple copy of the AirBnB Website(HBnB). A command interpreter is created in this segment to manage objects for the AirBnB(HBnB) website.
# Functionalities of this command interpreter:
* Create a new object (ex: a new User or a new Place)
* Retrieve an object from a file, a database etc...
* Do operations on objects (count, compute stats, etc...)
* Update attributes of an object
* Destroy an object
# Table of Content
* Environment
* Installation
* File Descriptions
* Usage
* Examples of use
* Bugs
* Authors
* License
# Environment
This project is interpreted/tested on Ubuntu using python3
# Installation
# File Descriptions
console.py - the console contains the entry point of the command interpreter. List of commands this console current supports:
* EOF - exits console
* quit - exits console
* <emptyline> - overwrites default emptyline method and does nothing
* create - Creates a new instance ofBaseModel, saves it (to the JSON file) and prints the id
* destroy - Deletes an instance based on the class name and id (save the change into the JSON file).
* show - Prints the string representation of an instance based on the class name and id.
* all - Prints all string representation of all instances based or not on the class name.
* update - Updates an instance based on the class name and id by adding or updating attribute (save the change into the JSON file).
# models/ directory contains classes used for this project:
base_model.py - The BaseModel class from which future classes will be derived
* def __init__(self, *args, **kwargs) - Initialization of the base model
* def __str__(self) - String representation of the BaseModel class
* def save(self) - Updates the attribute updated_at with the current datetime
* def to_dict(self) - returns a dictionary containing all keys/values of the instance
Classes inherited from Base Model:
* amenity.py
* city.py
* place.py
* review.py
* state.py
* user.py
# /models/engine directory contains File Storage class that handles JASON serialization and deserialization :
file_storage.py - serializes instances to a JSON file & deserializes back to instances
* def all(self) - returns the dictionary __objects
* def new(self, obj) - sets in __objects the obj with key .id
* def save(self) - serializes __objects to the JSON file (path: __file_path)
* def reload(self) - deserializes the JSON file to __objects
# /tests directory contains all unit test cases for this project:
/test_models/test_base_model.py - Contains the TestBaseModel and TestBaseModelDocs classes TestBaseModelDocs class:
* def setUpClass(cls)- Set up for the doc tests
* def test_pep8_conformance_base_model(self) - Test that models/base_model.py conforms to PEP8
* def test_pep8_conformance_test_base_model(self) - Test that tests/test_models/test_base_model.py conforms to PEP8
* def test_bm_module_docstring(self) - Test for the base_model.py module docstring
* def test_bm_class_docstring(self) - Test for the BaseModel class docstring
* def test_bm_func_docstrings(self) - Test for the presence of docstrings in BaseModel methods
TestBaseModel class:
* def test_is_base_model(self) - Test that the instatiation of a BaseModel works
* def test_created_at_instantiation(self) - Test created_at is a pub. instance attribute of type datetime
* def test_updated_at_instantiation(self) - Test updated_at is a pub. instance attribute of type datetime
* def test_diff_datetime_objs(self) - Test that two BaseModel instances have different datetime objects
/test_models/test_amenity.py - Contains the TestAmenityDocs class:
* def setUpClass(cls) - Set up for the doc tests
* def test_pep8_conformance_amenity(self) - Test that models/amenity.py conforms to PEP8
* def test_pep8_conformance_test_amenity(self) - Test that tests/test_models/test_amenity.py conforms to PEP8
* def test_amenity_module_docstring(self) - Test for the amenity.py module docstring
* def test_amenity_class_docstring(self) - Test for the Amenity class docstring
/test_models/test_city.py - Contains the TestCityDocs class:
def setUpClass(cls) - Set up for the doc tests
* def test_pep8_conformance_city(self) - Test that models/city.py conforms to PEP8
* def test_pep8_conformance_test_city(self) - Test that tests/test_models/test_city.py conforms to PEP8
* def test_city_module_docstring(self) - Test for the city.py module docstring
* def test_city_class_docstring(self) - Test for the City class docstring
/test_models/test_file_storage.py - Contains the TestFileStorageDocs class:
/test_models/test_review.py - Contains the TestReviewDocs class
/test_models/state.py - Contains the TestStateDocs class:
/test_models/user.py - Contains the TestUserDocs class:
# Authors
Alexa Orrico - Github / Twitter Jennifer Huang Github / Twitter Luggard ubochi[D[D[D
