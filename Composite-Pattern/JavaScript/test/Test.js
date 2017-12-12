var Node = require("./../src/Node");
var Folder = require("./../src/Folder");
var File = require("./../src/File");
var Filehandler = require("./../src/FileHandler");

//call node.js assert tool
var assert = require('assert');


describe('ConstructorTest', function () {
    
    describe('#checkNode', function () {
        it('node data check', function () {
            let node = new Node();
            assert.deepEqual(new Node(), node);
        });
    });

    describe('#checkFolder', function () {
        it('folder data check', function () {
            let folder = new Folder();
            assert.deepEqual(new Folder(), folder);
        });
    });

    describe('#checkFile', function () {
        it('file data check', function () {
            let file = new File();
            assert.deepEqual(new File, file);
        });
    });
    
    describe('#checkNode', function () {
        it('node data check', function () {
            let  filehandler = new Filehandler();
            assert.deepEqual(new Filehandler(), filehandler);
        });
    });

});


describe('CompositeStructurTest', function () {

    let folder1;

    before(function () {
        folder1 = new Folder("Composite");
        let folder2 = new Folder("src");
        let folder3 = new Folder("test");
        let file1 = new File("Script.js", 1024);
        let file2 = new File("Test.js", 1024);
        let file3 = new File("Package.json", 512);

        folder2.addNode(file1);
        folder3.addNode(file2);

        folder1.addNode(folder2);
        folder1.addNode(folder3);
        folder1.addNode(file3);
    });

    describe('#checkFolderSize', function () {
        it('folder size check', function () {
            assert.equal(2560, folder1.getSize());
        });
    });

    describe('#checkFolderFiles', function () {
        it('folder files check', function () {
            assert.equal(3, folder1.getNumberOfFiles());
        });
    });

});


describe('CompositeDatabaseTest', function () {

    let filehandler;
    let folder1;
    let file1;
    let file2;

    before(function () {
        filehandler = new Filehandler();
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

    describe('#checkFileHandlerInsert', function () {
        it('folder insert check', function (done) {
            filehandler.insert(file1);
            setTimeout(function () {
                filehandler.findByFilename(file1, function (data) {
                    assert.deepEqual(file1, data);
                    done();
                });
            }, 100);
        });
    });
    
    describe('#checkFileHandlerFind', function () {
        it('folder find check', function (done) {
            filehandler.insert(folder1);
            setTimeout(function () {
                filehandler.findAll(function (data) {
                    let file = new File();
                    file.name = data[1].nodes[1].nodes[0].name;
                    file.size = data[1].nodes[1].nodes[0].size;
                    //data is the raw object without functions
                    assert.deepEqual(file2, file);
                    done();
                });
            }, 100);
        });
    });
});