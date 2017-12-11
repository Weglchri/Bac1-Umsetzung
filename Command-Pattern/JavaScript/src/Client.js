var Invoker = require("./Invoker");
var OperationModule = require("./OperationModule");
var AddModule = require("./AddModule");
var RemoveModule = require("./RemoveModule");

var operationmodule = new OperationModule();
var addmodule = new AddModule(operationmodule);
var removemodule = new RemoveModule(operationmodule);
var invoker = new Invoker(addmodule);
var invoker = new Invoker(removemodule);

addmodule.execute();
addmodule.execute();
addmodule.execute();
removemodule.execute();
