import {Node} from "./../src/Node"
import {Folder} from "./../src/Folder"
import {File} from "./../src/File"
import {FileHandler} from "./../src/FileHandler"

//call node.js assert tool
import assert = require('assert');


describe('ConstructorTest', function () {
    
    describe('#FolderTest', function () {
        it('folder instatiation test', function () {
            let folder = new Folder("root");
            assert.deepEqual(new Folder("root"), folder);
        });
    });

    describe('#FileTest', function () {
        it('file instatiation test', function () {
            let file = new File("test.txt", 1024);
            assert.deepEqual(new File("test.txt", 1024), file);
        });
    });
    
    describe('#FileHandlerTest', function () {
        it('filehandler instatiation test', function () {
            let  filehandler = new FileHandler();
            assert.deepEqual(new FileHandler(), filehandler);
        });
    });

});


describe('CompositeStructurTest', function () {

    let folder1:Folder;
    let folder2:Folder;
    let folder3:Folder;

    before(function () {
        folder1 = new Folder("Composite");
        folder2 = new Folder("src");
        folder3 = new Folder("test");
        let file1 = new File("Script.js", 1024);
        let file2 = new File("Test.js", 1024);
        let file3 = new File("Package.json", 512);

        folder2.addNode(file1);
        folder3.addNode(file2);

        folder1.addNode(folder2);
        folder1.addNode(folder3);
        folder1.addNode(file3);
    });

    describe('#FolderSizeTest', function () {
        it('compare size of folder', function () {
            assert.equal(2560, folder1.getSize());
        });
    });

    describe('#FolderNumberTest', function () {
        it('compare number of folders', function () {
            assert.equal(3, folder1.getNumberOfFiles());
        });
    });

});


describe('CompositeDatabaseTest', function () {

    let filehandler:FileHandler;
    let folder1:Folder;
    let file1:File;
    let file2:File;

    before(function () {
        filehandler = new FileHandler();
        folder1 = new Folder("Composite");
        let folder2 = new Folder("src");
        let folder3 = new Folder("test");
        file1 = new File("Script.js", 1024);
        file2 = new File("Test.js", 1024);
        let file3 = new File("Package.json", 512);

        folder2.addNode(file1);
        folder3.addNode(file2);

        folder1.addNode(folder2);
        folder1.addNode(folder3);
        folder1.addNode(file3);
    });
    
    after(function(){
       filehandler.deleteAll(); 
    });

});