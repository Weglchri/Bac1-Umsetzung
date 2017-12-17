# Bac1-Umsetzung
Bac1-Implementation

Reposity contains listed following design patterns implemented with ES6 standard.

<h3>Components:</h3>
JavaScript: ES6<br>
Mocha: 4.0.1<br>
MongoJS: 2.4.1<br>
Mongodb: 2.2.33

<h2>Creational Pattern</h2>

<h3>Singleton</h3>

<p>Implemented logger class build with the singleton pattern used in several use cases.</p>

<p>Standard logger class with methods to print and log errors or specific messages.</p>


<h3>Factory</h3>

<p>Implemented factory can create usertable or grouptable which represents 
    an data access object for a filebased database (DAO).</p>


<p>TableFactory creates an DAO after given keyword from TableType. The 
Table provides an interface for database DAOs UserTable and GroupTable which can 
handle User and Group objects.</p>


<h2>Structural Pattern</h2>

<h3>Facade</h3>

<p>Represents an facade pattern which provides a method to intimitade an fictional validation check for Insurances of their customers</p>
    
<p>AccountService describes the facade which interacts which:   
Validator: Input-vadlidation.
DataCheck: Data-validaton.  
Logger: Data-logging.
The Facade can handle the Person object which has the necessary field to check.</p>


<h3>Composite</h3>

<p>The composite pattern allows easy handling of components of same extended type. In this case it is a filesystem with type file and folder, which can be stored in filebased databse. </p>

<p>Node describes the base class which every component needs to extend. The
File describes the leaf of the pattern while folder is another composite type.
The Filehandler represents the DAO class for the database and can handle Node based objects.</p><br>


<h2>Behavioral Pattern</h2>

<h3>Observer</h3>

<p>This observer pattern implementation simulates an generic participant creator where validation and notification observer can check the update and creation process.</p>

<p>Observer is an interface for observer implementation types which can be used by the subject.
The Participant class represents a concrete Subject implementation which can be observed.</p>


<h3>Command</h3>

<p>This command pattern implementation represents a simple real world example of a game character, which gets a set of action movesets through the command pattern.</p>
    
<p>Command class therefore is representing the interface for the movesets.
Knight class as receiver which executes the triggered actions.
The controller as Invoker provides the interface for the interaction of this pattern.</p>




